import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import ItemListContainer from './components/Contenido/Products/ItemListContainer';

import React, { Component } from 'react';

export default class App extends Component {
  render () {
    return (
      <>
        <NavBar></NavBar>
        <ItemListContainer greeting="Bienvenido a mi sitio web!!!"></ItemListContainer>
      </>
    )
    }
}