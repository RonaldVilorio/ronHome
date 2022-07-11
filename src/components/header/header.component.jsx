import React from 'react'
import {
    HeaderBox,
    TitleName,
    Name,
    IconHolder,
    GithubIcon,
    LinkedInIcon,
    CodeWarIcon,
    // ThinkImg
} from './header.styles.jsx'
import ThinkImg from '../../assets/think.svg'
const Header = () => {
    return ( 
        <header>
            <HeaderBox>
                {/* <ThinkImg/>               */}
                {/* <DevelopImg/>
                <RunImg/>
                <ThinkImg/> */}
                <TitleName>                
                    <span>Developer, Runner, Problem Solver</span>                              
                    <Name>Ronald Vilorio</Name>
                    <IconHolder>
                        <a href="https://github.com/RonaldVilorio"><GithubIcon/></a>
                        <a href="https://www.linkedin.com/in/ronald-vilorio/"><LinkedInIcon/></a>
                        <a href="https://www.codewars.com/users/RonaldVilorio"><CodeWarIcon/></a>                                                 
                    </IconHolder>
                </TitleName>
            </HeaderBox>
        </header>
     );
}
 
export default Header;