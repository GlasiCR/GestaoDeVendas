import styled from "styled-components";
import {color} from "../../theme/constants"
import {PropsStyle} from "../../types/StyleType"

export const Percentage = styled.div`
    color: #FFF;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    border-radius: 50px;
    height: auto;
    margin-left: 15px;
    padding: 4px 17px;
`
export const TitleKpi = styled.h5<PropsStyle>`
    color: ${(props) => (props.color ? props.color : '#C5CFFF')};
    font-weight: 400;
`
export const ContainerKpi = styled.div<PropsStyle>`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : color.secondary)};
    border-radius: 24px;
    color: white;
    width: ${(props) => (props.width ? props.width : '25%')};
    padding: 22px 35px;
    margin: 10px;
    display: flex;
    gap: 25px;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.20);
`
export const DatasKpi = styled.div`
    display: flex;
    flex-direction: column;
` 
export const ContainerNumbers = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const NumberKPI = styled.h2<PropsStyle>`
    color: ${(props) => (props.color ? props.color : '#FFF')};
`