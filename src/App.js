import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './components/card';
import Header from './components/header';

const Body = styled.div``;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Body>
        <Header list={this.props.headerList} />

        {
          this.props.characters.map(obj => {
            return (
              <Card key={obj.reference} character={obj} />
            ) 
          })
        }
      </Body>
    );
  }
}

export default App;
