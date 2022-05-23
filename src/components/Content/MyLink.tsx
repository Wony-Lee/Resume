import React, {useCallback, useEffect, useState} from 'react';
import styled from '@emotion/styled'
import {useAppDispatch, useAppSelector} from "../../store";
import {setSelectTab} from "../../reducers/content";
import Detail from "./Detail";
import {IDetail} from "../../interface/detailInterface";
import {useQuery} from "react-query";

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
  div {
    margin:5px 5px 10px 0px;
    h1 {
      padding:5px;
      color:darkorange;
      text-align: center;
      font-size:20px;
      font-weight: bold;
    } 
  }
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
    color:darkorange
  }
  @media(max-width:640px) {
    margin:5px;
    padding:0;
  }
`;

const MyLink = () => {
    const dispatch = useAppDispatch()
    const apiCall = () => {
        return fetch(`${process.env.REACT_APP_SERVER_URL}/detail/`)
            .then(res => res.json())
    }
    const {isLoading, isError, data ,error } = useQuery("detail", apiCall,{
            refetchOnWindowFocus:true,
            retry:3,
            onSuccess: data => {
                console.log(data)
            },
            onError: (e) => {
                console.log(e)
            }
        }
    )

    const tab = useAppSelector(state => state.content.tab)
    const handleSelectedTab = useCallback((param:number) => {
        console.log(param)
        dispatch(setSelectTab(param))
        if(param === tab) dispatch(setSelectTab(0))
    },[dispatch, tab])

    useEffect(()=>{
    },[])
    return (
        <Layout>
            <Article>
                <div>
                    <h1>진행한 프로젝트</h1>
                </div>
                <List>
                    <Item onClick={() => handleSelectedTab(1)}>
                        현대
                        증명서 발급
                    </Item>
                    <Item onClick={() => handleSelectedTab(2)}>
                        현대 SF MSK
                    </Item>
                    <Item onClick={() => handleSelectedTab(3)}>
                        현대 SF MIS
                    </Item>
                    <Item onClick={() => handleSelectedTab(4)}>
                        메타그라운드
                    </Item>
                </List>
            </Article>
            <Contents>
                {
                    data?.map((item:IDetail) =>
                        item.id === tab &&
                      <Detail
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        links={item.link}
                      />
                    )
                }
            </Contents>
        </Layout>
    );
};

export default MyLink;
