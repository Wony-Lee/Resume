import React from 'react';
import styled from '@emotion/styled';

const Layout = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  height:230px;
  padding:10px;

  box-sizing: border-box;
  & div {
    max-width:360px;
    width:100%;
    padding:10px;
    box-sizing: border-box;
    margin-bottom:10px; 
  }
  .header {
    display:flex;
    align-items: center;
    height:30px;
    border:1px solid darkorange;
  }
  .content {
    height:100%;

    word-break:break-all;
    border:1px solid darkorange;
    
  }
  .foot {
    display:flex;
    justify-content: space-evenly;
    width:100%;
    border:1px solid darkorange;
  }
`;

const Button = styled.button<{ colors?: string }>`
  width:120px;
  height:30px;
  color:${({colors}) => colors ? colors : "black"};
  border:1px solid ${({colors}) => colors ? colors : "black"};;
  background-color:white;
  cursor: pointer;
  &:hover {
    color:white;
    border:1px solid darkorange;
    background-color:darkorange;
  }
`;

const GuestItem = () => {
    return (
        <Layout>
            <div className={"header"}>
                <p>이름 : {"홍길동"}</p>
            </div>
            <div className={"content"}>
                제작중
            </div>
            <div className={"foot"}>
                <Button colors={"palevioletred"}>수정</Button>
                <Button colors={"cornflowerblue"}>삭제</Button>
            </div>
        </Layout>
    );
};

export default GuestItem;
