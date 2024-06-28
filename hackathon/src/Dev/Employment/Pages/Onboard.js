import React from 'react';
import Nav from '../Components/NavBar/Nav';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
export default function Onboard() {
    const navigate = useNavigate();

    return (
        <div>
            <Nav />
            <OnboardStyle>
            <span className='onboard-box-text'>어떤 도움이 필요하신가요 ?</span>
                <div className='onboard-box'>
                    <div className='onboard-box1' onClick={() => navigate('/employInfo')}><p className='onboard-box-text1'>구직자</p> <p className='onboard-box-text2'>구직을 하고 계시다면 <br/>이곳을 눌러주세요.</p></div>
                    <div className='onboard-box1' onClick={() => navigate('/writeDocument')}><p className='onboard-box-text1'>고용주</p> <p className='onboard-box-text2'>고용을 원하신다면 <br/>이곳을 눌러주세요.</p></div>
                </div>
            </OnboardStyle>
            
        </div>
    );
};


const OnboardStyle = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    .onboard-box-text{
        font-size: 30px;
        font-weight: 700;
    }
    .onboard-box{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10vh;
        
        .onboard-box1{
        display: flex;
        flex-direction: column;
        margin-left: 4vh;
        margin-right: 4vh;
        background-color: #F4F4F4;
        width: 25vw;
        height: 40vh;
        border-radius: 2vh;
        border: 2px solid #F4F4F4;
        &:hover{
            border: 2px solid #FF9A01;
            background-color: #FF9A01;
            cursor: pointer;
        }

        .onboard-box-text1{
            font-size: 33px;
            font-weight: 600;
            margin-top: 7vh;
            margin-left: 5vh;
            
        }
        .onboard-box-text2{
            font-size: 19px;
            font-weight: 300;
            margin-top: -1vh;
            margin-left: 5vh;
            
        }
    }
    }
    
`
