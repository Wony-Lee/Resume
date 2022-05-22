import React, {useCallback} from 'react';
import styled from '@emotion/styled'
import {useAppDispatch, useAppSelector} from "../../store";
import {setSelectTab} from "../../reducers/content";
import Detail from "./Detail";

const Layout = styled.div`
  display:flex;
  width:100%;
  margin-top:30px;
  @media(max-width:640px) {
    display:block;
  }
`;

const Article = styled.div`
  width:20%;
  @media(max-width:640px) {
    overflow-x: scroll;
    width:100%;
    margin-bottom:40px;
    font-size:14px;
  }
`;

const Contents = styled.div`
  display:flex;
  width:80%;
  @media(max-width:640px) {
    justify-content: center;
    width:100%;
  }
`;

const List = styled.ul`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media(max-width:640px) {
    min-width:400px;
    padding:10px;
    flex-direction: row;
  }
`;

const Item = styled.li`
  margin:10px;
  padding:10px;
  box-sizing: border-box;
  cursor:pointer;
  &:hover {
    color:pink;
  }
  @media(max-width:640px) {
    margin:5px;
    padding:0;
  }
`;

const MyLink = () => {
    const dispatch = useAppDispatch()
    const tab = useAppSelector(state => state.content.tab)
    const handleSelectedTab = useCallback((param:number) => {
        console.log(param)
        dispatch(setSelectTab(param))
        if(param === tab) dispatch(setSelectTab(0))
    },[dispatch, tab])
    return (
        <Layout>
            <Article>
                <List>
                    <Item onClick={() => handleSelectedTab(1)}>
                        현대
                        증명서 발급 시스템
                        {/*(화면개발)*/}
                        {/*https://certi.hmc.co.kr/*/}
                    </Item>
                    <Item onClick={() => handleSelectedTab(2)}>
                        {/*(링크 없음)*/}
                        현대 SF MSK
                        {/*(대시보드 화면 개발)*/}
                    </Item>
                    <Item onClick={() => handleSelectedTab(3)}>
                        {/*(링크 없음)*/}
                        현대 SF MIS
                        {/*(화면 개발 및 Qlik 개발)*/}
                    </Item>
                    <Item onClick={() => handleSelectedTab(4)}>
                        메타그라운드
                        {/*https://metaground.io*/}
                    </Item>
                </List>
            </Article>
            <Contents>
                {
                    tab !== 0 &&
                    <Detail />
                }
            </Contents>
        </Layout>
    );
};

export default MyLink;
