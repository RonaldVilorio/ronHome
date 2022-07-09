import { createGlobalStyle } from "styled-components";

export const Colors = {
    myWhite:'#FFF',
    myBlack:'#000'

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