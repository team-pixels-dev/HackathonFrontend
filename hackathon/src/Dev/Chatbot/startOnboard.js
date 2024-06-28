import styled from "styled-components";

const WelcomeMessage = styled.div`
  font-size: 24px;
  margin : 100px 0px;
  width:fit-content;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  &>span{
    font-size:20px;
  }
`;

const StartOnboardButton = styled.div`
    width:500px;
    height:200px;
    background-color: ${props => props.theme.colors.primary_bright};
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid ${props => props.theme.colors.primary};
    border-radius:24px;
    &>div{
        font-size:30px;
        font-weight:500;
    }
`

function StartOnboard() {
    return(
        <>
            <WelcomeMessage>귀하의 입사를 축하드립니다<br/><span>픽셀(주)</span></WelcomeMessage>
            {/* <StartOnboardButton>
                <div>
                   업무 배워보기
                </div>
            </StartOnboardButton> */}
        </>
    )
}

export default StartOnboard;