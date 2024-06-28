import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/NavBar/Nav';
import Table from '../Components/NavBar/Table';
import Advertisement from '../../../asset/advertisement.png'
const employInfo = () => {
    return (
        <>
            <Nav />
            <EmployInfoStyle>
                <span>채용 공고를 확인해보세요.</span>
                <img src={Advertisement} />
                <Table />
            </EmployInfoStyle>
        </>
        
    );
};

const EmployInfoStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-top: 20vh;
    
    span{
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 5vh;
    }
    img{
        width: 30%;
    }

`
export default employInfo;