import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
 height: 100%;
`;

const ListItemDiv = styled.div`
  display: flex;
  color: grey;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  height: 100%;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.trending ? 'white' : 'grey' };
    color: ${(props) => props.trending ? 'lightgrey' : 'white' };
  }
`;

const SubTopics = styled.div`
  position: absolute;
  top: 90px;
  background-color: red;
  padding: 16px;
`;

const SubTopicItem = styled.div`
  font-size: 24px;
  cursor: pointer;
  padding: 16px;
  &:hover {
   background-color: blue;
  }
`;

class ListItem extends Component {
 constructor(props) {
  super(props);
  this.state = {
   expanded: false
  };
 }

 render() {

  return (
   <Wrapper
    onMouseOver={() => this.setState({ expanded: true })}
    onMouseLeave={() => this.setState({ expanded: false })}
   >
    <ListItemDiv
     key={this.props.item.title}
     trending={this.props.item.title === 'Trending'}
    >
     <div>{this.props.item.title}</div>
    </ListItemDiv>
    <div>
    {
     this.state.expanded && this.props.item.subTopics.length > 0 ?
     <SubTopics>
      {
       this.props.item.subTopics.map(obj => {
        return <SubTopicItem>{obj.title}</SubTopicItem>
       })
      }
     </SubTopics>
     : null
    }
    </div>
   </Wrapper>
  )
 }
}

export default ListItem;