import React from 'react';
import styled from '@emotion/styled';

const Layout = styled.div`
  
`;

const Form = styled.form`
  display:flex;
  flex-direction: column;
  input {
    width:70px;
  }
`;

const GuestForm = () => {
    return (
        <Layout>
            <Form>
                <div>
                    <label>이름 : </label>
                    <input type={"text"} />
                </div>
                <div>
                    <label>내용 : </label>
                    <input type={"text"} />
                </div>
            </Form>
        </Layout>
    );
};

export default GuestForm;
