import styled from "styled-components"
import { PropsStyle } from "../../types/StyleType"

export const LabelCheckBox = styled.label<PropsStyle>`
    color: #212121;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
    line-height: 150%;
    letter-spacing: 0.2px;
    margin-left: 10px;
`
export const DivCheckBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    gap: 15px;
    padding: 8px;
`
export const DivChildren = styled.div`
    width: 100%;
`
export const AllPerFilter = styled.div<PropsStyle>`
    color: #757575;
    text-align: right;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
    line-height: 150%;
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`