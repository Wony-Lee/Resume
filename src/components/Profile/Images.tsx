import React from 'react';
import styled from '@emotion/styled'

const Layout = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:160px;
  height:160px;
  border:1px solid darkorange;
  border-radius: 50%;
  img {
    width:160px;
    height:160px;
    border-radius: 50%;
  }
`;

interface Props {
    imgUrl?: string
}

const Images = ({imgUrl}:Props) => {
    return (
        <Layout>
            <img src={`${process.env.PUBLIC_URL}/images/photo.jpeg`} alt={"profile"} />
        </Layout>
    );
};

export default React.memo(Images);
