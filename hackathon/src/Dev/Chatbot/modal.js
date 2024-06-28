import styled from "styled-components";

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index: 1;
    background-color: #000;
    opacity: 40%;
`

const ModalArea = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index: 2;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ModalContent = styled.div`
    height:300px;
    width:500px;
    background-color:white;
    border-radius: 12px;
    z-index: 2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &>div{
        margin-top:50px;
        font-size:22px;
        font-weight:500;
    }
    &>div>span{
        font-size:15px;
        color:#747474;
    }
` 

const OkBottun = styled.div`
    margin-top:50px;
    height:50px;
    width:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:12px;
    background-color:${props => props.theme.colors.primary};
    &>div{
        color:black;
        font-size:30px;
        cursor: pointer;
    }
    &>div:hover{
        color:white;
    }
`

function Modal(props) {
    return(
        <>
            <Background/>
            <ModalArea>
                <ModalContent>
                    <div>수고하셨습니다!<br/> 픽셀컴퍼니 적응을 위한 기본 과정을 완료하셨어요.<br/>
                    이제 업무를 수행하러 가볼까요?<br/>
                    <span>언제든 다시 온보딩을 진행하실 수 있어요.</span>
                    </div>
                    <OkBottun>
                        <div onClick={()=>props.setModalOpen(false)}>
                            확인
                        </div>
                    </OkBottun>
                </ModalContent>
            </ModalArea>
        </>
    )
}

export default Modal;