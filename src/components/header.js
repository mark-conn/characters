import React from 'react';
import styled from 'styled-components';
import ListItem from './listItem';

const mediaSizes = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 360
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #DDDDDD;
`;

const Logo = styled.div`
 font-size: 36px;
 padding-left: 12px;
 color: red;
 font-weight: bold;
`;

const DesktopList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-left: 10%;
  @media (max-width: ${mediaSizes.xs}px) {
    display: none;
  }
`;

const MobileList = styled.div`
  @media (min-width: ${mediaSizes.xs}px) {
    display: none;
  }
`;


function Header(props) {
 return (
  <Wrapper>
   <Logo>Logo</Logo>
   <DesktopList>
     {
       props.list.map(obj => {
        return (
          <ListItem key={obj.title} item={obj} />
        )
       })
     }
   </DesktopList>
   <MobileList>MOBILE LIST</MobileList>
  </Wrapper>
 )
}

export default Header;