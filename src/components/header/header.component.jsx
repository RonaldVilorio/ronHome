import React from 'react'
import {
    HeaderBox,
    TitleName,
    Name,
    GithubIcon} from './header.styles.jsx'

const Header = () => {
    return ( 
        <header>
            <HeaderBox>
                <TitleName>                
                    <span>Developer, Runner, Problem Solver</span>
                    <GithubIcon/>                
                    <Name>Ronald Vilorio</Name>
                </TitleName>
            </HeaderBox>
        </header>
     );
}
 
export default Header;