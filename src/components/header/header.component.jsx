import React from 'react'
import {
    HeaderBox,
    TitleName,
    Name,
    IconHolder,
    GithubIcon,
    LinkedInIcon,
    CodeWarIcon,
    WakaTimeIcon,
    ThinkImg,
    DevelopImg,
    RunImg
} from './Header.styles.jsx'

const Header = () => {
    return ( 
        <header>
            <HeaderBox>                
                <ThinkImg/>              
                <DevelopImg/> 
                <RunImg/> 

                <TitleName>                
                    <span>Developer, Runner, Problem Solver</span>                              
                    <Name>Ronald Vilorio</Name>
                    <IconHolder>
                        <a href="https://github.com/RonaldVilorio"><GithubIcon/></a>
                        <a href="https://www.linkedin.com/in/ronald-vilorio/"><LinkedInIcon/></a>
                        <a href="https://www.codewars.com/users/RonaldVilorio"><CodeWarIcon/></a>
                        <a href="https://wakatime.com/@Ron"><WakaTimeIcon/></a>                                                 
                    </IconHolder>
                </TitleName>
            </HeaderBox>
        </header>
     );
}
 
export default Header;