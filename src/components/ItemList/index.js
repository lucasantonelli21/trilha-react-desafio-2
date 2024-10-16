import React from 'react'
import {ItemContainer} from './styles.js'


function ItemList({repo,removeOption}) {
  
  const handleRemoveRepo = () =>{
      removeOption(repo.id);
  }
  
  return (
    <ItemContainer onClick={handleRemoveRepo}>
        <strong>{repo.name}</strong>
        <p>{repo.full_name}</p>
        <div className='opcoes'>
          <a href={repo.html_url} target= "_blank">Ver repositório</a>
          <a href={handleRemoveRepo} className='remover'>Remover</a>
        </div>
        <hr/>
    </ItemContainer>
  )
}

export default ItemList;
