import styled from "styled-components"
import { Colors } from "../GlobalStyle"
import ImgSrc from '../../images/headerBack.jpg'
import {LogoGithub} from '@styled-icons/ionicons-solid/LogoGithub'
import {LogoLinkedin}from '@styled-icons/ionicons-solid/LogoLinkedin'
import { Code } from "@styled-icons/ionicons-solid"
export const HeaderBox = styled.div`
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
     
` 
export const Name = styled.span`
    margin-top:2rem;

`
export const IconHolder = styled.div`
    a{
        color:inherit;
        text-decoration:none;        
    }
    display:flex;
    margin-top:.5rem;
    align-content:space-between;
`
export const GithubIcon = styled(LogoGithub)` 
    height: 4rem;
    margin-right:.7rem;
   
`
export const LinkedInIcon = styled(LogoLinkedin)` 
    height: 4rem;
    margin-right:.7rem;

`
export const CodeWarIcon = styled(Code)` 
    height:4rem;


`