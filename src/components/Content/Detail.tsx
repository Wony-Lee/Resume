import React, {useCallback} from 'react';
import styled from '@emotion/styled'
import {useAppSelector} from "../../store";


const Layout = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  @media(max-width:640px) {
    align-items: center;
  }
`;

const Header = styled.div`
  display:flex;
  margin-bottom:30px;
`;
const Content = styled.div`
  width:80%;
  margin-bottom:40px;
`
const LinkArea = styled.div`
  p {
    cursor:pointer
  }
`;

const Detail = () => {
    const tab = useAppSelector(state => state.content.tab)
    const handleLocation = useCallback(()=>{
        switch(tab) {
            case 1:
                return window.open('https://certi.hmc.co.kr/', '_blank')
            case 2:
                return;
            case 3:
                return;
            case 4:
                return window.open('https://metaground.io', '_blank');
            default:
                return 0;
        }
    },[tab])
    return (
        <Layout>
            <Header>
                <h2>Title : {"Text"} </h2>
            </Header>
            <Content>
                <p>
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                    대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명대충 설명
                </p>
            </Content>
            <LinkArea>
                <p onClick={handleLocation}>Go Link</p>
            </LinkArea>
        </Layout>
    );
};

export default Detail;
