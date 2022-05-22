import React, {useCallback, useState} from 'react';
import styled from '@emotion/styled'
import Images from "../Profile/Images";

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
  width:260px;
  margin-top:30px;
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
    },[])
    return (
        <Layout>
            <Header>
                <Images />
            </Header>
            <MyInfo>
                <p>
                    <b>이름 : </b>이윤원
                </p>
                <p>
                    <b>생년월일 : </b>94.08.31
                </p>
                <p>
                    <b>거주지 : </b>서울시 강서구
                </p>
                <p>
                    <b>이메일 : </b>tkfkddla@nate.com
                </p>
            </MyInfo>
            <p onClick={handleIsActive}>더보기</p>
            <Content isActive={isActive}>
                <div>자기소개</div>
            </Content>
        </Layout>
    );
};

export default MyProfile;
