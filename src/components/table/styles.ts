import styled from "styled-components";
import {color} from "../../theme/constants"
import {PropsStyle} from "../../types/StyleType"

export const ContainerTable = styled.table`
    border-radius: 16px;
    background-color: transparent;
    margin: 25px;
    width: 95%;
    height: 400px;
    border-collapse: collapse;
    position: relative;
    overflow: hidden;
`
export const Thead = styled.thead<PropsStyle>`
    background-color: ${color.primary};   
    th{          
            color: #C5CFFF;
            font-size: 16px;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            line-height: 150%;
            letter-spacing: 0.2px;
            text-align: center;
            padding: 13px;
            &:first-child {
                border: none;
            }
            &:nth-child(2){
            padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '10px')};
            text-align: left;
            }
        }
`
export const Tbody = styled.tbody`
    background-color: #FAFAFA;
    
    td{
        color: #212121;
        text-align: center;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.2px;
        padding: 13px;
        
        &:nth-child(1){
            padding-left: 20px
        }
        &:nth-child(2){
            padding-left: 10px;
            text-align: left;
        }
    }
      
`
