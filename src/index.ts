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
