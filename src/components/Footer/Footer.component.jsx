import React from "react";
import { FooterBox,EndingInfo } from "./Footer.styles";

const Footer = () => {
    return ( 
        <>
            <FooterBox>
                <EndingInfo>
                    <h1>
                        <span>Contact Me: ronvilorio@gmail.com</span>
                        <span><a href="https://github.com/RonaldVilorio/ronHome">Site Source Code</a></span>
                    </h1>
                </EndingInfo>
                <p>&#169; 2022 Ronald Vilorio</p>
            </FooterBox>
        
        </> 
    );
}
 
export default Footer;