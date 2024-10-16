import styled from "styled-components";


export const ItemContainer = styled.div`
    
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    strong{
        color: #539BF5;
        font-size: 24px;
        font-family: 'Roboto';
    }


    p{
        color: #999999;
        font-size: 20px;
        font-family: 'Roboto';
    }
    
    a{
        color: #539BF5;
        text-decoration: none;
    }
    .remover{
        color: red;
        margin-left: 10px;
        cursor: pointer;
    }
    
    .opcoes{
        margin-left: 80vh;
        font-family: 'Roboto';
    }

    hr{
        margin-top: 10px;
        width: 100vh;
    }
    




`