import styled from "styled-components"
import { Colors } from "../GlobalStyle"
import {LogoGithub} from '@styled-icons/ionicons-solid/LogoGithub'
import {LogoLinkedin}from '@styled-icons/ionicons-solid/LogoLinkedin'
import { Code } from '@styled-icons/ionicons-solid'
import { Hourglass } from "@styled-icons/ionicons-solid"
import ThinkImgSrc from '../../assets/think.svg'
import RunImgSrc from '../../assets/run.svg'
import DevelopImgSrc from '../../assets/develop.svg'

export const HeaderBox = styled.div`
    color:${Colors.black_bean};
    height: 100vh;
    background-image:linear-gradient(to bottom, ${Colors.primary_green}, ${Colors.secondary_green});
    position:relative;
    clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
    
`
export const TitleName = styled.h1`
    display:flex;
    flex-direction: column;
    align-items:center;
    transform:translateY(60rem);
    font-size: 2.5rem;
    font-weight:700;
    letter-spacing:.6rem;
    text-transform:uppercase;
     
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
    height: 2.5rem;
    margin-right:.7rem;
`
export const LinkedInIcon = styled(LogoLinkedin)` 
    height: 2.5rem;
    margin-right:.7rem;
`
export const CodeWarIcon = styled(Code)` 
    height:2.5rem;
    margin-right:.7rem;
`
export const WakaTimeIcon = styled(Hourglass)`
    height:2.5rem;
`
export const ThinkImg = styled(ThinkImgSrc)`
    position:absolute;
    width:20rem;
    top:60rem;

`
export const RunImg = styled(RunImgSrc)`
    position:absolute;    
    width:20rem;
    top:15rem;
    left:50%;
    transform:translateX(-15rem);
    
`
export const DevelopImg = styled(DevelopImgSrc)`
    position:absolute;
    width:20rem;
    left:100%;
    top:50rem;
    transform:translateX(-40rem);

`