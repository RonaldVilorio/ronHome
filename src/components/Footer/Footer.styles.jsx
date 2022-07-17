import styled from "styled-components";
import { Colors } from "../GlobalStyle";

export const FooterBox = styled.div`
    display:flex;
    flex-direction:column;
    background-color: ${Colors.black_bean};
    padding:.2rem;
    height: auto;
    color:${Colors.primary_green};
    text-transform:uppercase;
    
    
    p{
        margin-top:0;
        margin-left:1.5rem;
        align-self:flex-start;
        font-size:1.6rem;
    }
    
`
export const EndingInfo = styled.div`

    padding:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    transform:translateY(1rem);

    h1{
        display:flex; 
        justify-content:center;
        align-items:center;
        display:flex;
        flex-direction:column;
        font-size:2rem;
        line-height:3rem;
        
        a{
            text-decoration:none;
            color:beige;
        }
    }

`