import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {SiNotion} from 'react-icons/si'
import styled from '@emotion/styled'

const Layout = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100%;
  box-sizing: border-box;
  
`;

const List = styled.ul`
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  width:100%;
  height:60px;
  background-color:darkorange;
  border-radius: 16px;
`;

const Item = styled.li`
  display:flex;
  align-items: center;
  
  color:white;
  span {
    margin-top:3px;
  }
  &:hover {
    color:black;
  }
`;

const FootBar = () => {
    return (
        <Layout>
            <List>
            <Item>
                <AiFillGithub />
                <span>GitHub</span>
            </Item>
            <Item>
                <AiFillLinkedin />
                <span>LinkedIn</span>
            </Item>
            <Item>
                <SiNotion/>
                <span>Notion</span>
            </Item>
            <Item>
                <AiFillYoutube />
                <span>YOUTUBE</span>
            </Item>
            </List>
        </Layout>
    );
};

export default FootBar;
