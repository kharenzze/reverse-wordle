export enum CharCellStatus {
  None,
  Exist,
  Exact
}

export interface CharCell {
  status: CharCellStatus,
  char: string
}