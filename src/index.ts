export const DIM = 5
export const ATTEMPS = 6
export const VERSION = process.env.VERSION
export { SummaryLogic } from './Summary'

type vec2 = [number, number]

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

const MATRIX_DIM: vec2 = [ATTEMPS, DIM]
const getNextPosition =
  ([mx, my]: vec2) =>
  ([x, y]: vec2): vec2 => {
    if (y === my - 1) {
      return [x + 1, 0]
    }
    return [x, y + 1]
  }

export const getNextCellPos = getNextPosition(MATRIX_DIM)
