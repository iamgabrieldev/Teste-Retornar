import React, { useState } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ChoicePage from './pages/ChoicePage/index';
import CustomizePage from './pages/CustomizePage/index';
import SummaryPage from './pages/SummaryPage/index';

const sabores = [
  {
    nome: "Morango",
    tempo: 0,
    preco: 0,
  },
  {
    nome: "Banana",
    tempo: 0,
    preco: 0,
  },
  {
    nome: "Kiwi",
    tempo: 0,
    preco: 0,
  },
]

const tamanhos = [
  {
    nome: "Pequeno (300ml)",
    tempo: 5,
    preco: 10,
  },
  {
    nome: "Médio (500ml)",
    tempo: 7,
    preco: 12
  },
  {
    nome: "Grande (700ml)",
    tempo: 9,
    preco: 15,
  },
]

const adicionais = [
  {
    nome: "Granola",
    tempo: 0,
    preco: 3,
  },
  {
    nome: "Paçoca",
    tempo: 0,
    preco: 3,
  },
  {
    nome: "Leite Ninho",
    tempo: 0,
    preco: 3,
  },
]

const App: React.FC = () => {
  
  const [sabor, setSabor] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [adicional, setAdicional] = useState("");

  function handleSabor(sabor:any) {
    setSabor(sabor);
  }
  function handleTamanho(tamanho:any) {
    setTamanho(tamanho);
  }
  function handleAdicional(adicional:any) {
    setAdicional(adicional);
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sistema-acai/escolha">
          <ChoicePage 
            sabores={sabores}
            tamanhos={tamanhos}
            handleSabor={handleSabor}
            handleTamanho={handleTamanho}
          />
        </Route>
        <Route path="/sistema-acai/personalização">
          <CustomizePage 
            adicionais={adicionais}
            handleAdicional={handleAdicional}
          />
        </Route>
        <Route path="/sistema-acai/resumo">
          <SummaryPage 
            sabor={sabor}
            tamanho={tamanho}
            adicional={adicional}
          />
        </Route>
        <Route exact path="*">
          <Redirect to="/sistema-acai/escolha" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
