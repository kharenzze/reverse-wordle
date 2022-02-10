export const DIM = 5
export const ATTEMPS = 6

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

//regex sample: /^(?=[^g]+)(?=.*l)(?=.*a)(?=.*u)(?=[^l][^ua].[^a]r).{5}$/gm

interface PositionSummary {
  exact: String
  differentFrom: Set<String>
}

interface GameSummary {
  blacklist: Set<String>
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
}
