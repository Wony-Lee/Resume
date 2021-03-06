import React from 'react';
import styled from '@emotion/styled';
import GuestForm from "./GuestForm";
import GuestList from "./GuestList";

const Layout = styled.div`
  width:80%;
  margin-top:30px;
`;

const Guest = () => {
    return (
        <Layout>
            <GuestForm />
            <GuestList />
        </Layout>
    );
};

export default Guest;
