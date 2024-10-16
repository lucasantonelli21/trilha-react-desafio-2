import React from 'react';
import { InputConatiner } from './styles';

function Input({value, onChange}) {
  return (
    <div>
        <InputConatiner>
            <input value={value} onChange={onChange}/>
        </InputConatiner>
    </div>
  );
}

export default Input;
