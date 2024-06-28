import React from 'react';
import styled from 'styled-components';

const button = ({title, onClick, color
}) => {
    return (
        <ButtonStyle >
            <div className='button' onClick={onClick}style={{backgroundColor: `${color}`}}>{title}</div>
        </ButtonStyle>
    );
};

const ButtonStyle = styled.div`
    width: 100%;
    height: 18vh;
    position: fixed;
    bottom: 0vh;
    display: flex;
    justify-content: center;
    background-color: white;
    z-index: 999;
    .button{
        width: 70%;
        height: 8vh;
        background-color: #FF9A01;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.2vh;
        font-weight: 700;
        font-size: 2.2vh;
        position: fixed;
        bottom: 10vh;
        z-index: 999;
        
    }
`
export default button;