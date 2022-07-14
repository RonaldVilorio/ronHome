import styled from "styled-components";
import { Colors } from "../GlobalStyle";

export const FooterBox = styled.div`
    display:flex; 
    justify-content:center;
    align-items:center;
    background-color: ${Colors.black_bean};
    padding:.2rem;
    height: 20rem;
    color:${Colors.primary_green};
    a{
        text-decoration:none;
        color:inherit;
    }    

`