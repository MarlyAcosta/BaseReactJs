import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ObjetoApi from './components/ObjetoApi'
import Pagination from './components/Pagination'
import './App.css';

function App() {

  const [objetoApi, setObjetoApi] = useState([]);
  const [infoApi, setinfoApi] = useState([]);

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fetchApi = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setObjetoApi(data.results);
        setinfoApi(data.info)
      })
      .catch(error => console.log(error))
  };

  const onSiguiente = () => {
    fetchApi(infoApi.next);
  }

  const onAtras = () => {
    fetchApi(infoApi.prev);
  }

  useEffect(() => {
    fetchApi(initialUrl)
  }, [])

  return (
    <>
      <Navbar brand="App base" />
      <div className='container mt-5'>
        <Pagination prev={infoApi.prev} next={infoApi.next} onAtras={onAtras} onSiguiente={onSiguiente} />
        <ObjetoApi objetoApi={objetoApi} />
        <Pagination prev={infoApi.prev} next={infoApi.next} onAtras={onAtras} onSiguiente={onSiguiente} />
      </div>
    </>

  );
}

export default App;
