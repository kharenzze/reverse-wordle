export const DIM = 5
export const ATTEMPS = 6
export const VERSION = process.env.VERSION

export enum CharCellStatus {
  None,
  Exist,
  Exact,
}

export const getNextStatus = (status: CharCellStatus) => {
  const next = status + 1
  if (next > CharCellStatus.Exact) {
    return CharCellStatus.None
  }
  return next
}

export interface CharCell {
  status: CharCellStatus
  char: string
}

export const getDefaultCharCell = (): CharCell => ({
  status: CharCellStatus.None,
  char: '',
})

interface PositionSummary {
  exact: string
  differentFrom: Set<string>
}

interface GameSummary {
  blacklist: Set<string>
  byPosition: PositionSummary[]
}

const initilizeSummary = (): GameSummary => ({
  blacklist: new Set(),
  byPosition: Array(DIM)
    .fill(0)
    .map(() => ({
      exact: '',
      differentFrom: new Set(),
    })),
})

export const SummaryLogic = {
  fromMatrix: (matrix: CharCell[][]): GameSummary => {
    const summary = initilizeSummary()
    for (let i of Array(ATTEMPS).keys()) {
      for (let j of Array(DIM).keys()) {
        const cell = matrix[i][j]
        if (!cell.char) {
          continue
        }
        switch (cell.status) {
          case CharCellStatus.None:
            {
              summary.blacklist.add(cell.char)
            }
            break
          case CharCellStatus.Exist:
            {
              summary.byPosition[j].differentFrom.add(cell.char)
            }
            break
          case CharCellStatus.Exact:
            {
              summary.byPosition[j].exact = cell.char
            }
            break
        }
      }
    }
    return summary
  },

  toRegExp: (summary: GameSummary): RegExp => {
    //regex sample: /^(?=[^g]+)(?=.*l)(?=.*a)(?=.*u)(?=[^l][^ua].[^a]r).{5}$/gm
    const blacklist = `[^${Array.from(summary.blacklist).join('')}]`
    const blacklistPart = `(?=${blacklist.repeat(DIM)})`
    const mustExistSet: Set<string> = summary.byPosition.reduce((acc, pos) => {
      for (let c of pos.differentFrom) {
        acc.add(c)
      }
      return acc
    }, new Set() as Set<string>)
    const mustExistPart: string = Array.from(mustExistSet)
      .map(c => `(?=.*${c})`)
      .join('')
    const byPositionArray = summary.byPosition.map(p => {
      if (p.exact) {
        return p.exact
      } else if (p.differentFrom.size) {
        return `[^${Array.from(p.differentFrom).join('')}]`
      }
      return '.'
    })
    const byPositionPart = `(?=${byPositionArray.join('')})`
    const finalString = `^${blacklistPart}${mustExistPart}${byPositionPart}.{${DIM}}$`
    return new RegExp(finalString, 'gm')
  },
}
