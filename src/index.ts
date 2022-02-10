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

export const summarizeMatrix = (matrix: CharCellStatus[][]): GameSummary => {
  const summary = initilizeSummary()

  return summary
}
