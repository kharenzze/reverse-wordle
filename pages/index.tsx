import { memo, useState, FC, ChangeEventHandler } from 'react'
import type { NextPage } from 'next'
import { useFetch } from 'use-http'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getDefaultCharCell, CharCell } from '../src'

const DIM = 5

const useMatrix = () =>
  useState(() => {
    const initialize = () => Array(DIM).fill(0)
    const matrix = initialize().map(initialize)
    return matrix.map(row => row.map(getDefaultCharCell))
  })

type MatrixSetter = ReturnType<typeof useMatrix>[1]

const Home: NextPage = () => {
  const { error, data: dataset = '' } = useFetch('/5char.es.txt', {}, [])
  const [matrixData, setMatrixData] = useMatrix()
  const renderCell = (j: number) => (c: CharCell, i: number) =>
    <Cell setter={setMatrixData} i={i} j={j} key={i} data={c} />
  const body = matrixData.map((row, j) => (
    <div className="row" key={j}>
      {row.map(renderCell(j))}
    </div>
  ))
  return (
    <div className={styles.container}>
      <Header />
      {body}
    </div>
  )
}

interface ICell {
  setter: MatrixSetter
  i: number
  j: number
  data: CharCell
}

const Cell: FC<ICell> = ({ setter, i, j, data }) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setter(m => {
      m[j][i].char = evt.target?.value
      return m
    })
  }
  return <input value={data.char} onChange={onChange} className="cell" />
}

const Header = memo(() => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Reverse Wordle!</h1>
    </main>
  </>
))

export default Home
