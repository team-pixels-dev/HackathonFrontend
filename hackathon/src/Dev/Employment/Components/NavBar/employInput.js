import React from 'react';
import styled from 'styled-components';

const employInput = ({title, onChange}) => {
    return (
        <EmployInputStyle>
            <div className='inputtitle'>{title}</div>
            <div className='input'><input type='text' onChange={onChange}/></div>
        </EmployInputStyle>
    );
};

const EmployInputStyle = styled.div`
    width:70%;
    .inputtitle{
        font-size: 2vh;
        font-weight: 500;
        margin-top: 2vh;
    }
    .input{
        width: 90%;
        height: 5.5vh;
        border: 1px solid #D0D0D0;
        border-radius: 1vh;
        margin-top: 2vh;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            width: 98%;
            height: 5vh;
            margin-top: .3vh;
            border: none;
        }
    }

`
export default employInput;