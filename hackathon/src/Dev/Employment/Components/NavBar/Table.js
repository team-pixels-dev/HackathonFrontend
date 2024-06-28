import React, { useState } from 'react';
import styled from 'styled-components';
import employData from '../../Data/employData';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Table(){
    const navigate = useNavigate();
    
    const handleRowClick = (index) => {
        navigate(`/detail/${index}`);
    }
    return (
    <TableStyle>
      <TableBody>
        {employData.map((data, index) => (
          <TableRow key={index} onClick={() => handleRowClick(index)}>
            <TableCell>
                <TableRowContents>
                    <div className='employer'>{data.company}</div>
                    <div className='title'>{data.jobTitle}</div>
                </TableRowContents>
            </TableCell>
            <TableCell>
                <TableRowContents>
                    <div className='detail'>{data.location}</div>
                    <div className='detail'>{data.position}</div>
                    <div className='detail'>{data.period}</div>
                </TableRowContents>
            </TableCell>
            <TableCell>
                <FontAwesomeIcon icon={faChevronRight} style={{position: "relative", right: "-10%"}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableStyle>
    );
};

const TableStyle = styled.table`
  width: 70%;
  height: 100vh;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;
const TableBody = styled.tbody`
    border: 2px solid #DCDCDC;
    border-radius: 1vh;
`
const TableRow = styled.tr`
  border-bottom: 2px solid #DCDCDC;
  cursor: pointer;
`;

const TableCell = styled.td`
  padding: 5vh 7vh;
`;

const TableRowContents = styled.div`
    .employer{
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 2vh;
    }
    .title{
        font-size: 24px;
        font-weight: 400;
    }
    .detail{
        background-color: #FF9A01;
        color: white;
        width: 18vh;
        padding: 1vh;
        text-align: center;
        position: relative;
        
        margin: 1vh -10vh 0 0;
        border-radius: .5vh;
    }
`
