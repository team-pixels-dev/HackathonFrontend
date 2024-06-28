import React, { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: #000;
  opacity: 40%;
  overflow-y: hidden;
`;


const ModalContent = styled.div`
    position: fixed;
    overflow-y: hidden;
  height: 250px;
  width: 600px;
  background-color: white;
  border-radius: 12px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  & > input {
    background-color: #F4F4F4;
    border: none;
    width: 80%;
    height: 7vh;
    border-radius: 1vh;
    margin-top: 2vh;
    margin-bottom: 0;
  }
  
  
  align-items: center;
  & > div {
    margin-top: 50px;
    font-size: 22px;
    font-weight: 500;
  }
  & > div > span {
    font-size: 2.2vh;
    font-weight: 600;
  }
  & >div > :first-child{
    margin-right: 2vh;
    font-size: 3vh;
  }
`;

const OkButton = styled.div`
  margin-top: 50px;
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #FF9A01;
  margin-top: 1vh;
  & > div {
    color: black;
    font-size: 10px;
    cursor: pointer;
  }
  & > div:hover {
    color: white;
  }
`;

function Modal({ setModalOpen, icon, text, handleSave }) {
  const [departmentName, setDepartmentName] = useState("");

  const onSave = () => {
    handleSave(departmentName);
    setDepartmentName(""); // 입력 필드 초기화
    setModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <Background onClick={() => setModalOpen(false)}/>
        <ModalContent>
            <div>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
            </div>
            <input
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            placeholder="부서명을 입력하세요"
            />
            <OkButton style={{marginTop:'2vh'}}>
            <div onClick={onSave} style={{fontSize:'2vh', margin:'0'}}>부서 추가하기</div>
            </OkButton>
        </ModalContent>
    </>
  );
}

export default Modal;
