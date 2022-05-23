import React, {useCallback, useState} from 'react';
import styled from '@emotion/styled'
import Images from "../Profile/Images";
import {useQuery} from "react-query";
import parse from "html-react-parser";

const Layout = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  margin-top:30px;
`;
const Header = styled.div`
  margin-bottom:30px;
`;
const Content = styled.div<{ isActive: boolean }>`
  display:${({isActive}) => isActive ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  max-width:360px;
  margin-top:30px;
    p {
      line-height: 26px;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  };
  animation-duration: 2s;
  animation-name: fadeIn;
  
  @media(max-width: 640px) {
    width:260px;
  }
`;

const MyInfo = styled.div`
  margin-bottom:20px;
  p {
    width:100%;
    margin-bottom:10px;
    b {
      color:darkorange;
      font-weight: bold;
    }
  }
`;

const MyProfile = () => {
    const [isActive, setIsActive] = useState(false)
    const handleIsActive = useCallback(()=>{
        setIsActive(prev => prev = !prev)
    },[isActive])
    const apiCall = () => {
        return fetch(`${process.env.REACT_APP_SERVER_URL}/profile/`)
            .then(res => res.json())
    }
    const {isLoading, isError, data ,error } = useQuery(["profile"], apiCall,{
            refetchOnWindowFocus:true,
            retry:3,
            onSuccess: data => {
                // console.log('API CALL =>',data)
            },
            onError: (e) => {
                console.error(e,'API CALL FAIL')
            }
        }
    )

    return (
        <Layout>
            <Header>
                <Images imgUrl={data?.imgUrl}/>
            </Header>
                <MyInfo>
                    <p>
                        <b>이름 : </b>{data?.name}
                    </p>
                    <p>
                        <b>생년월일 : </b>{data?.birth}
                    </p>
                    <p>
                        <b>거주지 : </b>{data?.address}
                    </p>
                    <p>
                        <b>이메일 : </b>{data?.email}
                    </p>
                </MyInfo>
                <p onClick={handleIsActive}>더보기</p>
                <Content isActive={isActive}>
                        <p>{data?.description && parse(data?.description)}</p>
                </Content>
        </Layout>
    );
};

export default React.memo(MyProfile);
