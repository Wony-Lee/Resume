import React from 'react';
import styled from '@emotion/styled'

const Layout = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:160px;
  height:160px;
  border-radius: 50%;
  border:1px solid black;
`;

const Images = () => {
    return (
        <Layout>
            <img src={""} />
        </Layout>
    );
};

export default Images;
