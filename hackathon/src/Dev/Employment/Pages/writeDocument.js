import React from 'react';
import styled from 'styled-components';
import EmployInput from '../Components/NavBar/employInput';
import Nav from '../Components/NavBar/Nav';
import Button from '../Components/NavBar/button';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
const WriteDocument = () => {
    const navigate = useNavigate();
    const [company, setCompany] =useState('')
    const [name, setName] =useState('')
    const [phone, setPhone] =useState('')
    const [email, setEmail] =useState('')
    const [description, setDescription] =useState('')
    const [title, setTitle] =useState('')
    const [startDate, setStartDate] =useState('')
    const [endDate, setEndDate] =useState('')
    const [position, setPosition] =useState('정규직')

    const handleSubmit = () => {
        if (company && name && phone&&email&&description&&title&&startDate&&endDate&&position) {
            alert('작성한 내용이 저장되었습니다.')
            navigate('/MakeChat');
        } else {
            alert('필드를 모두 작성해주세요.');
        }
    }
    return (
        <WriteDocumentStyle>
            <Nav />
            <div className='title'>채용 공고 작성하기</div>
            <div  className='title-des'>상세하게 작성할수록 회사에 적합한 인재를 구할 수 있습니다</div>
            <div className='title-num'>1. 회사정보</div>
            <EmployInput title="회사명" onChange={(e) => setCompany(e.target.value)}/>
            <EmployInput title="담당자 이름" onChange={(e) => setName(e.target.value)}/>
            <EmployInput title="연락처" onChange={(e) => setPhone(e.target.value)}/>
            <EmployInput title="이메일" onChange={(e) => setEmail(e.target.value)}/>
            <EmployInput title="기업소개" onChange={(e) => setDescription(e.target.value)}/>

            <div className='title-num'>2. 공고정보</div>
            <EmployInput title="공고명" onChange={(e) => setTitle(e.target.value)}/>
            <div className='datepicker'>
                <div className='datepicker-title'>공고 시작일
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy/MM/dd"
                    isClearable
                    placeholderText="날짜를 선택하세요"
                />
                </div>
                <div className='datepicker-title'>공고 마감일
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy/MM/dd"
                    isClearable
                    placeholderText="날짜를 선택하세요"
                />
            </div>
            
            </div>
            <Button title="채용공고 작성완료" onClick={handleSubmit}/> 

            <div className='title-num'>3. 근무형태</div>
            <div style={{width:'68%', margin: "2vh"}}>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group" style={{zIndex:0}}>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked onClick={() => setPosition('정규직')}/>
                    <label class="btn btn-outline-primary" for="btnradio1" onClick={() => setPosition('정규직')}>정규직</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => setPosition('계약직')}/>
                    <label class="btn btn-outline-primary" for="btnradio2" onClick={() => setPosition('계약직')}>계약직</label>
                </div>
            </div>
            
        </WriteDocumentStyle>
    );
};

const WriteDocumentStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    height: 170vh;
    .title{
        font-size: 3.5vh;
        font-weight: 600;
        width: 70%;
    }
    .title-des{
        font-size: 2vh;
        width: 70%;
        margin-top: 3vh;
    }
    .title-num{
        font-size: 2.3vh;
        font-weight: 600;
        width: 70%;
        margin-top: 5vh;
    }
    .datepicker{
        display: flex;
        justify-content: center;
        font-size: 2vh;
        font-weight: 500;
        margin: 2vh 0 15vh 0;
       
        .datepicker-title{
            display: flex;
            flex-direction: column;
            margin: 2vh 15vh;
        }
    }
`
export default WriteDocument;