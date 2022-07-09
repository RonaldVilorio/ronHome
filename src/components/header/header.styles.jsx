import styled from "styled-components"
import { Colors } from "../GlobalStyle"
import ImgSrc from '../../images/headerBack.jpg'
import {LogoGithub} from '@styled-icons/ionicons-solid/LogoGithub'

export const HeaderBox = styled.div`
    height: 100px;
    color: ${Colors.primary_green};
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
    font-weight:700;
    letter-spacing:.6rem;
    position:relative;
     
` 
export const Name = styled.span`
    position:absolute;
    margin-top:15rem;

`
export const GithubIcon = styled(LogoGithub)` 
    color:${Colors.primary_green};
    height: 4rem;
    display:flex;
    justify-content:center;
`