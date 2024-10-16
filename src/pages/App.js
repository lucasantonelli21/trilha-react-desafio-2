
import { useState } from 'react';
import gitLogo from '../assets/github-logo.png';
import Button from '../components/Button/index.js';
import Input from '../components/Input/index.js';
import ItemList from '../components/ItemList/index.js';
import {Container} from './styles';
import {api} from '../services/api.js';
function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)
  
    if(data.id){
      const alreadyThere = repos.find(repo => repo.id === data.id);
      if(!alreadyThere){
        setRepos(prev => [...prev,data]);
      }else{
        alert('Repositório Repetido');
      }
      setCurrentRepo('');
    }
    else{
      alert('Repositório não encontrado')
    }
  };

  const handleRemove = (id) => {
      const repoToRemove = repos.find(repo => repo.id === id);
      const newRepos = repos.filter( (repo) => repo.id !== repoToRemove.id);
      setRepos(newRepos);
  }

  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width={72} height={72} alt='logo-git'/>
        <Input value={currentRepo} onChange={(event)=> setCurrentRepo(event.target.value)}/>
        <Button label="Buscar" onClick={handleSearchRepo} />
        {repos.map(repo => <ItemList repo={repo} removeOption={handleRemove}/>)}
      </Container>
    </div>
  );
}

export default App;
