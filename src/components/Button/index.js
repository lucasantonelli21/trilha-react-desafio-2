import React from 'react'
import { ButtonContainer } from './styles';
function Button({label,onClick}) {
  return (
    <ButtonContainer>
        <button onClick={onClick}>{label}</button>
    </ButtonContainer>
  )
}

export default Button;
