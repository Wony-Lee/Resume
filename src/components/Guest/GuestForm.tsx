import React, {useCallback} from 'react';
import styled from '@emotion/styled';
import useInputs from "../../hooks/useInputs";

const Layout = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  margin-bottom:20px;
  h1 {
    margin-bottom:20px;
    color:darkorange;
    font-weight: bold;
    font-size:20px;
  }
`;

const Form = styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  .header {
    display:flex;
    align-items: center;
    margin-bottom:10px;
    label {
      margin: 3px 3px 0 0;
      color:darkorange;
      font-weight: bold;
    }
    input {
      width:120px;
      outline:none;
      border:1px solid darkorange;
    }
  }
  .content {
    display:flex;
    justify-content: center;
    width:100%;
    margin-bottom:10px;
    textarea {
      width:calc(100% - 24px);
      max-width:360px;
      height:50px;
      border:1px solid darkorange;
      resize: none;
      outline:none;
    }
  }
  .foot {
    button {
      width:100px;
      height:30px;
      border: 1px solid darkorange;
      background-color:white;
      color:darkorange;
      cursor:pointer;
      &:hover {
        color:white;
        background-color:darkorange;
      }
    }
  }
`;

const GuestForm = () => {
    const [postValue, handlePostValue, setPostValue] = useInputs("")
    const { name, content } = postValue

    const handleSubmit = useCallback((e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", name);
        formData.append("content", content);

        // formData Check
        for(let val of formData.values()) {
            console.log('val',val)
        }
        setPostValue({...postValue, name:"", content:""});
    },[name, content])

    return (
        <Layout>
            <h1>Guest</h1>
            <Form onSubmit={handleSubmit}>
                <div className={"header"}>
                    <label>이름 : </label>
                    <input
                        type={"text"}
                        placeholder={"Name"}
                        name={"name"}
                        value={name || ""}
                        maxLength={6}
                        onChange={handlePostValue}
                    />
                </div>
                <div className={"content"}>
                    <textarea
                        name={"content"}
                        placeholder={"Content"}
                        value={content || ""}
                        maxLength={120}
                        onChange={handlePostValue}
                    />
                </div>
                <div className={"foot"}>
                    <button>글 작성</button>
                </div>
            </Form>
        </Layout>
    );
};

export default GuestForm;
