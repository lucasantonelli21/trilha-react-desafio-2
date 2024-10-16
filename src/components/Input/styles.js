import styled from 'styled-components';

export const InputConatiner = styled.div`
    
    border-radius: 20px;
    backgound:#999999;
    height: 62px;
    width: 100vh;
    

    margin: 20px;


    input{
        background: transparent;
        border: 1px solid #999999;
        border-radius: 15px;
        width: 95%;
        height: 100%;
        padding: 0 20px;
        color: #FAFAFA;
        font-size: 20px;
    }
    
    input:hover, *{
        outline:0;
        background: #999999;
        color: #2D333B;
    }

     input:focus{
       outline: 0;
    }
`