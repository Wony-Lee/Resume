import React, {useCallback, useEffect} from 'react';
import styled from '@emotion/styled'
import {useAppSelector} from "../../store";
import parse from 'html-react-parser'
import {paramCheck} from "../../utils/paramCheck";


const Layout = styled.div<{selected?: number}>`
  display:${({selected}) => selected !== 0 ? "flex" : "none"};
  flex-direction: column;
  width:100%;
  
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
  @media(max-width:640px) {
    align-items: center;
  }
`;

const Header = styled.div`
  display:flex;
  margin-bottom:30px;
  h2 {
    font-size:24px;
    font-weight: bold;
    
  }
`;
const Content = styled.div`
  width:80%;
  margin-bottom:40px;
  word-break:break-all;
  p {
    font-size:16px;
    line-height: 24px;
  }
`
const LinkArea = styled.div`
  
  p {
    cursor:pointer
  }
`;

interface Props {
    id:number;
    title:string;
    description:string;
    links?:string | undefined;
}

const Detail = ({id, title, description, links}:Props) => {
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
        <Layout selected={tab}>
            <Header>
                <h2>{title} </h2>
            </Header>
            <Content>
                {parse(description)}
            </Content>
            <LinkArea>
                <p onClick={handleLocation}>
                    {paramCheck(links)}
                </p>
            </LinkArea>
        </Layout>
    );
};

export default React.memo(Detail);
