import styled from "styled-components";

const WelcomeMessage = styled.div`
  font-size: 24px;
  margin : 40vh 0vh;
  width:fit-content;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  &>span{
    font-size:20px;
  }
`;

const StartOnboardButton = styled.div`
    width:500px;
    height:100%;
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

function StartOnboard({index}) {

    if(index == 1){
        return(
            <WelcomeMessage>귀하의 입사를 축하드립니다!<br/><span>픽셀(주)</span></WelcomeMessage>
        )
    } else if(index == 2){
        return(
            <WelcomeMessage>처음 입사하셔서 모르는 것이 많을 것 같습니다.</WelcomeMessage>
        )
    } else if(index == 3){
        return(
            <WelcomeMessage>지금부터 제가 하실 일에 대해 차근차근 설명드리겠습니다.</WelcomeMessage>
        )
    } else if(index == 4){
        return(
            <WelcomeMessage>모르는게 있으면 망설이지 말고 물어봐주세요!</WelcomeMessage>
        )
    } else if(index == 5){
        return(
            <WelcomeMessage>그럼 시작하겠습니다!</WelcomeMessage>
        )
    }
}

export default StartOnboard;