import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    const navigate = useNavigate();
    return (
        <NavStyle>
            <header >
                <div onClick={() =>navigate('/')}>시니어 구직</div>
            </header>
        </NavStyle>
        
    );
};

export default Nav;

const NavStyle = styled.header`
    background-color: #FF9A01;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    div{
        font-size: 40px;
        font-weight: 600;
        color: white;
        margin-left: 5vh;
        cursor: pointer;
    }
`