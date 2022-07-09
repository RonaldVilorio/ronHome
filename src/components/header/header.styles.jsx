import styled from "styled-components"
import { Colors } from "../GlobalStyle"
import ImgSrc from '../../images/headerBack.jpg'

export const HeaderBox = styled.div`
    height: 100px;
    color: ${Colors.myWhite};
    border: 3px solid black;
    height: 85vh;
    background-image:url(${ImgSrc});
    background-size:cover;
    background-position:bottom;
    
`
export const TitleName = styled.h1`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin: 50% auto;
    font-size: 4rem;

` 