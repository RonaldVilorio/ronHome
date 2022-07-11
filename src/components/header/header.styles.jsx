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
    box-sizing:inherit;
    color:${Colors.black_bean};
    border: .1rem solid ${Colors.secondary_green};
    border-radius:.5rem;
    height: 85vh;
    background-image:linear-gradient(to bottom, ${Colors.primary_green}, ${Colors.secondary_green});
    margin: 5rem auto 0 auto;
    position:relative;
    
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
    margin-right:.7rem;
`
export const WakaTimeIcon = styled(Hourglass)`
    height:4rem;
`
export const ThinkImg = styled(ThinkImgSrc)`
    position:absolute;
    width:30rem;
    top:80rem;

`
export const RunImg = styled(RunImgSrc)`
    position:absolute;    
    width:30rem;
    top:15rem;
    left:50%;
    transform:translateX(-15rem);
    
`
export const DevelopImg = styled(DevelopImgSrc)`
    position:absolute;
    width:30rem;
    left:100%;
    top:80rem;
    transform:translateX(-40rem);

`
// export const Waka = styled(Waka)` 


// `