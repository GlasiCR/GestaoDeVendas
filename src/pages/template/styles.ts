import styled from "styled-components";
import { color } from "../../theme/constants";
import { Link } from 'react-router-dom';

export const ContainerTemplate = styled.main`
    display: flex;
    background: transparent;
    width: 100vw;
    padding-bottom: 20px;
    margin-bottom: 20px;
`
export const NavSide = styled.nav`
    background: ${color.primary};
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    width: 274px;
    letter-spacing: 0.2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 45px;
    margin-bottom: 100px;
`
export const ContainerCard = styled.div`
    width: 223px;
    height: 201px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 450px;
    margin-bottom: 250px;
`
export const Card = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background: ${color.third};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    padding-bottom: 13px;
`
export const ImgHands = styled.img`
    position: absolute;
    width: 194px;
    height: 194px;
    top: -100px;
    text-align: center;
`
export const ParagraphTalkUs = styled.p`
    padding: 10px 15px;  
`
export const ContainerUserLogin = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: flex-end; 
   gap: 5px;
`
export const ImgUserAvatar = styled.img`
    border-radius: 50px;
    background: ${color.primary};
    width: 46px;
    height: 46px;
    padding: 10px;
`
export const ContainerBtnMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`
export const BtnSidebar = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;
    padding: 25px;
    font-size: 16px;
    border-radius: 8px;
    margin: 0 13px;

    &:hover {
        background-color: rgba(118, 130, 193, 0.30000001192092896);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    } 
`
export const ContainerRightTemplate = styled.div`
    flex: 1;
    margin: 20px 50px 20px 20px;
`
export const NameUser = styled.h3`
    color: #212121;
    text-align: left;
`
export const EmailUser = styled.h5`
    color: #757575;
    font-weight: 400;
    text-align: left;
`
export const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
`
export const IconMenu = styled.img`
    margin-right: 20px;
`
export const UnderlinedLink = styled(Link)`
    text-decoration: none;
`