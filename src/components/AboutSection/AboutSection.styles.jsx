import styled from "styled-components";
import { Colors } from "../GlobalStyle";

export const AboutSectionBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:50vh;
    background-color:${Colors.tertiary_green};
    font-size:2.5rem;
    padding:5rem;

`
export const Button = styled.button`
    margin-top:7rem;
    border-radius:.5rem;
    box-shadow:.2rem .2rem;
    height:5rem;
    background-color:${Colors.primary_green};

    &:hover{
        cursor: pointer;
    }

`
