import React from 'react';
import styled from 'styled-components';
import employData from '../Data/employData';
import Nav from '../Components/NavBar/Nav';
import { useParams } from 'react-router-dom';
import Button from '../Components/NavBar/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const EmployDetail = () => {
    const { index } = useParams();
    const item = employData[index];
    const navigate = useNavigate();
    const splitIntoSentences = (text) => {
        return text.match(/[^.!?]+[.!?]+/g) ;
      };
    
    const applyBtn = () => {
        alert('지원되었습니다.')
        navigate('/')
    }
    return (
        <>
        {item ? (
            <>
                <Nav />
                <EmployDetailStyle>
                    <div className='detail-titlebox'>
                        <div className='detail-title'>{item.company}</div>
                        <div className='detail-description'>{item.jobTitle}</div>
                    </div>
                    <Table>
                        <tbody>
                            
                            <TableRow>
                                <TableCell style={{color:"#FF9A01"}}><span className='title'>경력</span>{item.experience}</TableCell>
                                <TableCell><span className='title'>근무지역</span>{item.location}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{color:"#FF9A01"}}><span className='title'>학력</span>{item.education}</TableCell>
                                <TableCell><span className='title'>근무요일</span>{item.workDays}</TableCell>
                            </TableRow>
                            <TableRow><TableCell><span className='title'>급여</span>{item.salary}</TableCell></TableRow>
                        </tbody>
                        </Table>
                        <img className='img'src={item.img} />
                        <div className='description'>{splitIntoSentences(item.description)}</div>
                        <div className='callbutton'><FontAwesomeIcon icon={faPhone} style={{marginRight:"3vh"}} />문의전화: 010-5555-3434</div>
                    <Button title='지원하기' onClick={applyBtn}/>
                </EmployDetailStyle>
                
            </>
            
        ):''}
        </>
        
    );
};


export default EmployDetail;
const EmployDetailStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20vh;
    align-items: center;
    height: 180vh;
    
    .detail-titlebox{
        padding: 4vh 0;
        border-bottom: 1px solid #DCDCDC;
        width: 70%;
    }
    .detail-title{
        font-size: 38px;
        font-weight: 700;
    }
    .detail-description{
        font-size: 26px;
        font-weight: 400;
        margin-top: 3vh;
    }
    img{
        width: 50%;
        margin-top: 10vh;
    }
    .description{
        width: 50%;
        font-size: 25px;
        margin-top: 10vh;
    }
    .callbutton{
        width: 70%;
        height: 8vh;
        background-color: #F4F4F4;
        display: flex;
        padding-left: 10vh;
        align-items: center;
        border-radius: 1.2vh;
        font-weight: 500;
        font-size: 2.2vh;
        position: fixed;
        bottom: 20vh;
    }
`

const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 24px;
  text-align: left;
    color: #676767;
    font-weight: 300;
`;

const TableRow = styled.tr`
  /* border-bottom: 1px solid #ddd; */
`;

const TableCell = styled.td`
  padding: 2vh 4vh;
  .title{
    color: #676767;
    font-size: 25px;
    font-weight: 400;
    width: 8vh;
    padding: 0 8vh 0 0;
  }
`;

