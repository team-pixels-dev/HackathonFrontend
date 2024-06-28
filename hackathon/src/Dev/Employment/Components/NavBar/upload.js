import React,{useCallback} from 'react';
import styled from 'styled-components';
import {useDropzone} from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
const Upload = ({title}) => {
    const onDrop = useCallback((acceptedFiles) => {
        
        console.log(acceptedFiles);
      }, []);
    
      const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*,application/pdf,.doc,.docx,.xls,.xlsx,.txt', // 허용할 파일 형식
        multiple: true
      });
    return (
        <UploadStyle {...getRootProps()}>
            <input {...getInputProps()} />
            <p style={{marginTop:"2vh"}}><FontAwesomeIcon icon={faFilePdf} style={{marginRight:'1vh',fontSize: '2.5vh'}}/>{title}</p>
        </UploadStyle>
    );
};

const UploadStyle = styled.div`
  background-color: #FFB546;
  border-radius: 1vh;
  width: 70%;
  height: 12vh;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 1.8vh;
  margin: 1vh 0;
  input{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    
  }
`

export default Upload;