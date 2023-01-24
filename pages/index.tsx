import { FC, memo, MouseEventHandler, useState, KeyboardEventHandler } from 'react'
import cx from 'classnames'
import type { NextPage } from 'next'
import { useFetch } from 'use-http'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  CharCell,
  CharCellStatus,
  getDefaultCharCell,
  getNextStatus,
  DIM,
  ATTEMPS,
  SummaryLogic,
  VERSION,
  getNextCellPos,
  getPrevCellPos,
} from '../src'
import { ModePicker, Mode } from '../src/ModePicker'

const mapModeToCellStatus: Record<Mode, CharCellStatus> = {
  [Mode.Type]: CharCellStatus.None,
  [Mode.Green]: CharCellStatus.Exact,
  [Mode.Yellow]: CharCellStatus.Exist,
}

const useMatrix = () =>
  useState(() => {
    const initialize = (n: number) => () => Array(n).fill(0)
    const matrix = initialize(ATTEMPS)().map(initialize(DIM))
    return matrix.map(row => row.map(getDefaultCharCell))
  })

type MatrixSetter = ReturnType<typeof useMatrix>[1]

const Home: NextPage = () => {
  const { data: dataset = '' } = useFetch('/5char.es.txt', {}, [])
  const [matrixData, setMatrixData] = useMatrix()
  const [match, setMatch] = useState<RegExpMatchArray | null>(null)
  const [mode, setMode] = useState<Mode>(Mode.Type)
  const renderCell = (i: number) => (c: CharCell, j: number) =>
    <Cell setter={setMatrixData} i={i} j={j} key={j} data={c} mode={mode} />
  const body = matrixData.map((row, i) => (
    <div className="row" key={i} data-row={i}>
      {row.map(renderCell(i))}
    </div>
  ))

  const onChangeMode = (mode: Mode) => setMode(mode)
  const onClickSolve = () => {
    const summary = SummaryLogic.fromMatrix(matrixData)
    const regExp = SummaryLogic.toRegExp(summary)
    const match = dataset.match(regExp)
    setMatch(match)
  }
  const renderMatch = () => {
    if (!match) {
      return 'no results'
    }
    return <p className={styles.solutions}>{(match as RegExpMatchArray).join(', ')}</p>
  }
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <span className={styles.version}>v{VERSION}</span>
        <h1 className={styles.title}>Welcome to Reverse Wordle!</h1>
        <ModePicker onChange={onChangeMode} mode={mode} />
        {body}
        <button role="button" className={styles.solve} onClick={onClickSolve}>
          Solve
        </button>
        {renderMatch()}
      </main>
    </div>
  )
}

interface ICell {
  setter: MatrixSetter
  i: number
  j: number
  data: CharCell
  mode: Mode
}

const keyRegExp = /^Key[A-Z]$/
const BACKSPACE_KEY = 'Backspace'

const Cell: FC<ICell> = ({ setter, i, j, data, mode }) => {
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = evt => {
    const setChar = (char: string) => {
      setter(m => {
        m[i][j] = {
          ...data,
          char,
        }
        return [...m]
      })
    }
    const code = evt.code
    let next: number[] = []
    if (keyRegExp.test(code)) {
      const char = evt.key
      setChar(char.toLowerCase())
      next = getNextCellPos([i, j])
    } else if (code === BACKSPACE_KEY) {
      setChar('')
      next = getPrevCellPos([i, j])
    }
    const [nextI, nextJ] = next
    const nextInput = document.querySelector(`input[data-row="${nextI}"][data-col="${nextJ}"]`) as HTMLInputElement
    nextInput?.focus()
  }
  const onRightClick: MouseEventHandler<HTMLInputElement> = evt => {
    evt.preventDefault()
    setter(m => {
      m[i][j] = {
        ...data,
        status: getNextStatus(data.status),
      }
      return [...m]
    })
  }
  const onClick = () => {
    const status = mapModeToCellStatus[mode]
    setter(m => {
      m[i][j] = {
        ...data,
        status,
      }
      return [...m]
    })
  }
  const classname = cx(styles.cell, {
    [styles.exact]: data.status === CharCellStatus.Exact,
    [styles.exist]: data.status === CharCellStatus.Exist,
  })
  return (
    <input
      value={data.char.toUpperCase()}
      data-row={i}
      data-col={j}
      onKeyDown={onKeyDown}
      className={classname}
      maxLength={1}
      onContextMenu={onRightClick}
      onClick={onClick}
    />
  )
}

const Header = memo(() => (
  <Head>
    <title>Reverse Wordle</title>
    <meta name="description" content="Cheats for Wordle" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
))

export default Home
