import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

const CardWrapper = styled.div`
 box-shadow: 0 2px 2px 0px #DDDDDD;
 border-radius: 8px;
 padding: 16px;
 width: 60%;
`;

const Header = styled.div`
 font-size: 26px;
`;

const SubHeader = styled.div`
 font-size: 16px;
 font-style: italic;
`;

const Year = styled.div`
 color: red;
`;

const Image = styled.img`
 height: 75px;
`;

const SupportingCharactersWrapper = styled.div`
 display: flex;
 margin-top: 1rem;
`;

const SupportingCharacter = styled.div`
 box-shadow: 0 2px 2px 0px #DDDDDD;
 border-radius: 8px;
 padding: 16px;
 cursor: pointer;
 margin-left: 8px;
 &:first-child {
  margin-left: 0;
 }
`;

class Card extends Component {
 constructor(props) {
  super(props);

  this.state = {
    currentImage: props.character.images[0]
  };
 }

 handleImage(images) {
  const nextImage = images.filter(image => image !== this.state.currentImage);
  this.setState({
    currentImage: nextImage[0]
  })
 }

 render() {
  const obj = this.props.character;

  return (
   <CardWrapper>
     <HeaderWrapper>
       <Header>{obj.name}</Header>
       <Image 
         src={this.state.currentImage} 
         alt='homer' 
         onClick={() => this.handleImage(obj.images)} 
       />
     </HeaderWrapper>
     <SubHeader>{obj.show}</SubHeader>
     <Year>{obj.firstAppearance}</Year>
     <SupportingCharactersWrapper>
      {
       obj.supportingCharacters.map(char => {
        return (
         <SupportingCharacter
          key={char.reference}
         >
          <Image src={char.image} alt='supporting char image'/>
          <div>{char.name}</div>
         </SupportingCharacter>
        ) 
       })
      }
     </SupportingCharactersWrapper>
   </CardWrapper>
  )
 }
}

export default Card;

