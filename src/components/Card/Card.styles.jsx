import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    h1{
        font-size:2rem;
        letter-spacing:.5rem;
        text-transform:uppercase;
        transform:translateX(-3rem);

    }
    
    a{
        text-decoration:none;
        max-width:80%;
    }
    img{     
        align-self:flex-end;
        max-width:80%;                        
    }

`