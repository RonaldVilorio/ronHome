import { createGlobalStyle } from "styled-components";

export const Colors = {
    primary_green:'#76BA99',
    secondary_green:'#ADCF9F',
    tertiary_green:'#CED89E',
    beige:'#FFDCAE'

}

export const GlobalStyles = createGlobalStyle`

html{
    padding: 0;
    margin: 0;
    box-sizing: border-box;        
    font-size: 62.50%;   
}

body{
    padding: 3rem;
    font-family:'lato',sans-serif
}


`