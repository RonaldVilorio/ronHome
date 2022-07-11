import styled from "styled-components"
import { Colors } from "../GlobalStyle"

import {LogoGithub} from '@styled-icons/ionicons-solid/LogoGithub'
import {LogoLinkedin}from '@styled-icons/ionicons-solid/LogoLinkedin'
import { Code } from '@styled-icons/ionicons-solid'
// import ThinkImgSrc from '../../assets/thinkImg.svg'

export const HeaderBox = styled.div`
    box-sizing:inherit;
    color:#3D0C02;
    /* #3D0C02
    #0C0404 */
    border: .1rem solid ${Colors.secondary_green};
    border-radius:.5rem;
    height: 85vh;
    background-image:linear-gradient(to right bottom, ${Colors.primary_green}, ${Colors.secondary_green});
    /* background-size:cover; */
    /* background-position:bottom; */
    margin: 5rem auto 0 auto;
    
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
// export const ThinkImg = styled(ThinkImgSrc)`
//     height:4rem;

// `