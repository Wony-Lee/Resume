import React from 'react';
import styled from '@emotion/styled'
import NavBar from "./Navigation/NavBar";

const Layout = styled.div`
  display:flex;
  flex-direction: column;
  margin:0 auto;
  max-width:1280px;
`;

const Header = styled.div`
  width:100%;
  padding:10px;
  box-sizing: border-box;
  background-color:darkorange;
  border-radius:16px;
`;

const Content = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  
  min-height:760px;
  height:100%;
  border:1px solid green;
  
  
`

const Footer = styled.div`
  width:100%;
  border:1px solid blue;
  
  position:fixed;
  bottom:0;
  @media(max-height:860px) {
    position:relative;
  }
`;

interface Props {
    children?: React.ReactNode
}

const AppLayout = ({children}:Props) => {
    return (
        <Layout>
            <Header>
                <NavBar/>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout>
    )
}

export default AppLayout
