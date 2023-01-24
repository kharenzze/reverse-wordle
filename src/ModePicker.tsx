import { FC, ChangeEventHandler } from 'react'
import styles from '../styles/Home.module.css'
import cx from 'classnames'

export enum Mode {
  Type,
  Yellow,
  Green,
}

interface IProps {
  onChange: (m: Mode) => void
  mode: Mode
}

export const ModePicker: FC<IProps> = ({ onChange, mode }) => {
  const localOnChange: ChangeEventHandler<HTMLInputElement> = evt => {
    const m = +evt.target.value as Mode
    onChange(m)
  }

  const parentCN = cx('row', styles.radioGroup)
  const greenBoxCN = cx(styles.box, 'green')
  const yellowBoxCN = cx(styles.box, 'yellow')

  return (
    <div className={parentCN}>
      <div className="row align-center">
        <input name="mode" type="radio" onChange={localOnChange} value={Mode.Type} checked={mode === Mode.Type} />
        <div className={styles.box} />
      </div>
      <div className="row align-center">
        <input name="mode" type="radio" onChange={localOnChange} value={Mode.Yellow} checked={mode === Mode.Yellow} />
        <div className={yellowBoxCN} />
      </div>
      <div className="row align-center">
        <input name="mode" type="radio" onChange={localOnChange} value={Mode.Green} checked={mode === Mode.Green} />
        <div className={greenBoxCN} />
      </div>
    </div>
  )
}
