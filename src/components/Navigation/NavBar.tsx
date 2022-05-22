import React from 'react';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const List = styled.ul`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.li`
  padding:10px;
  
  font-weight:bold;

  box-sizing: border-box;
  cursor:pointer;
  
  a {
    color:white;
    text-decoration: none;
    &:hover {
      color:black;
    }
  }
`;

const NavBar = () => {
    return (
        <List>
            <Item>
                <Link to={"/"}>
                    Wony
                </Link>
            </Item>
            <Item>
                <Link to={"/profile"}>
                    Profile
                </Link>
            </Item>
            <Item>
                <Link to={"/guest"}>
                    Guest
                </Link>
            </Item>
        </List>
    );
};

export default NavBar;
