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
  a {
    text-decoration: none;
    color:white;
  }
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
                    <span>
                        <a
                            href={"https://github.com/Wony-Lee"}
                            rel={"noopener"}
                            target={"_blank"}
                        >
                            GitHub
                        </a>
                    </span>

            </Item>
            <Item>
                    <AiFillLinkedin />
                    <span>
                        <a
                            href={"https://www.linkedin.com/in/%EC%9C%A4%EC%9B%90-%EC%9D%B4-733a14202/"}
                           rel={"noopener"}
                           target={"_blank"}
                        >
                        LinkedIn
                        </a>
                    </span>
            </Item>
            <Item>
                <SiNotion/>
                <span>
                    <a
                        href={"https://dev-wony.notion.site/Wony-Resume-6fd8fdddb5e14a25996aafd9ff38c619"}
                       rel={"noopener"}
                       target={"_blank"}
                    >
                        Notion
                    </a>
                </span>
            </Item>
            <Item>
                    <AiFillYoutube />
                    <span>
                        <a
                            href={"https://www.youtube.com/results?search_query=%EC%9C%A4%EC%8B%9C%EC%9B%90"}
                            rel={"noopener"}
                            target={"_blank"}
                        >
                        YOUTUBE(Bro)
                        </a>
                    </span>
            </Item>
            </List>
        </Layout>
    );
};

export default FootBar;
