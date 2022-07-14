import styled from "styled-components";
import { Colors } from "../GlobalStyle";

export const FooterBox = styled.div`
    display:flex;
    justify-content:center;
    background-color: ${Colors.black_bean};
    padding:.2rem;
    height: 20rem;
    color:${Colors.primary_green};
    text-transform:uppercase;
    line-height:3rem;
    h1{
        display:flex; 
        justify-content:center;
        align-items:center;
        display:flex;
        flex-direction:column;
        font-size:2.2rem;
        transform:translateX(10rem);
        a{
            text-decoration:none;
            color:beige;
        }
    }
    p{
        color:blue;
        
        

    }
    
    

`