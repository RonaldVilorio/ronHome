import styled from "styled-components"
import { Colors } from "../GlobalStyle"

export const HeaderBox = styled.div`
    height: 100px;
    color: ${Colors.myBlack};
    border: 3px solid black;
    height: 100vh;
    /* font-size:${({})}; */
    /* border: ${props=> `1px solid ${props.theme.colors.persianGreen}`}; */

`
export const TitleName = styled.h1`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin: 50% auto;

` 