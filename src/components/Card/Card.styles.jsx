import styled from "styled-components";
import {Colors} from "../GlobalStyle";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;   
    background-size:cover;
    background-blend-mode:screen;
    font-size:2rem;
    letter-spacing:.5rem;
    text-transform:uppercase;

    img{
        background: linear-gradient(to right,${Colors.primary_green}, ${Colors.secondary_green});
        max-width:100%;
        max-height:100%;
                
    }

`