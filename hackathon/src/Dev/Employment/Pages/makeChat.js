import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../Components/NavBar/Nav';
import Button from '../Components/NavBar/button';
import Upload from '../Components/NavBar/upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faBuilding } from '@fortawesome/free-solid-svg-icons';
import AddDepartment from '../Components/NavBar/addDepartment';  // 경로를 맞춰주세요
import { useNavigate } from 'react-router-dom';

const MakeChat = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleSave = (departmentName) => {
        setDepartments([...departments, departmentName]);
        alert('부서가 추가되었습니다.');
        handleCloseModal();
    };
    const submitBtn = () => {
        alert('챗봇이 생성되었습니다.');
        navigate('/');
    }

    return (
        <MakeChatStyle>
            <Nav />
            <div className='title'>챗봇 생성하기</div>
            <div className='title-des'>업무 자료를 업로드하고 하단의 버튼을 누르면 챗봇이 생성됩니다</div>
            <div className='title-basic'>회사 기본사항(조직도, 배치도 등)</div>
            <Upload title="회사 기본 업무사항 자료를 이곳에 업로드해주세요"/>
            <div className='title-basic'>부서별 기본사항</div>
            {departments.map((name, index) => (
                <Upload key={index} title={`${name} 부서의 업무사항 자료를 이곳에 업로드해주세요.`} />
            ))}
            <div className='addbutton' onClick={handleOpenModal}>
                <FontAwesomeIcon icon={faCirclePlus} className='addIcon' />부서 추가하기
            </div>
            {modalOpen ? '': <Button title='챗봇 생성하기' color='#D9D9D9' onClick={submitBtn}/>}
            {modalOpen && (
                
                <AddDepartment 
                    setModalOpen={setModalOpen} 
                    handleClose={handleCloseModal} 
                    icon={<FontAwesomeIcon icon={faBuilding} />} 
                    text="부서명을 입력해주세요." 
                    handleSave={handleSave} 
                />
            )}
        </MakeChatStyle>
    );
};

const MakeChatStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    height: 150vh;
    .title {
        font-size: 3.5vh;
        font-weight: 600;
        width: 70%;
    }
    .title-des {
        font-size: 2vh;
        width: 70%;
        margin-top: 3vh;
    }
    .title-basic {
        font-size: 2.3vh;
        font-weight: 600;
        width: 70%;
        margin: 8vh 0 2vh 0;
    }
    .addbutton {
        width: 70%;
        height: 12vh;
        border: 3px solid #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.2vh;
        font-weight: 700;
        font-size: 2.4vh;
        bottom: 10vh;
        z-index: 999;
        margin-top: 2vh;
        .addIcon {
            margin-left: -2vh;
            margin-right: 3vh;
            font-size: 4vh;
        }
    }
`;

export default MakeChat;
