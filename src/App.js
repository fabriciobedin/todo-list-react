import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import './App.scss';
import Tasks from './components/tasks/Tasks';
import Header from './components/header/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTimesCircle, faTrashAlt)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Tasks />
        </Container>
      </div>
    );
  }
}

export default App;