import { ChangeEventHandler } from "react"
import * as S from "./styles"
type Props = {
    value: string,
    textLabel: string,
    fontWeightLabel?: string,
    typeInput: string,
    checked?: boolean,
    onChange?: ChangeEventHandler,
}

export default function CheckboxInput({ textLabel, fontWeightLabel, typeInput, checked, onChange, value }: Props) {
    return (
        <S.DivCheckBox>
            <div >
                <input type={typeInput} id={value} name="optionFilter" checked={checked} onChange={onChange} value={value}/>
                <S.LabelCheckBox font-weight={fontWeightLabel} htmlFor={value}>{textLabel}</S.LabelCheckBox>
            </div>
        </S.DivCheckBox>
    )
}
