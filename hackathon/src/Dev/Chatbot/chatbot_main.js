import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Chatbox from './chatbox';
import Message from './message';
import { useState } from 'react';
import default_profile_image from '../../asset/chatbot_main/default_profile.webp';
import axios from 'axios';
import apiClient from '../../client';
import Tooltip from './tooltip';
import SidebarItem from './sidebar_item';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bright_text};
  width: 200px;
  padding: 0px 20px;
`;

const Profile = styled.div`
    display:flex;
    align-items: center;
    /* margin: 10px 0; */
    font-size : 20px;
    height: 100px;
`

const ProfileImage = styled.div`
    width : 40px;
    height : 40px;
    background-image : url(${default_profile_image});
    background-size: cover;
    border-radius : 100%;
    margin-right : 15px;
`

const SidbarItemHaed = styled.div`
  margin: 10px 0;
  font-weight: 500;
`;

const Main = styled.div`
  width:70%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

const Content = styled.div`
  width:70%;
  height: 85%;
  display: flex;
  flex-direction:column;
  justify-content: top;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;


const ChatboxArea = styled.div`
  height:100px;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: top;
`;

const WelcomeMessage = styled.div`
  font-size: 24px;
  margin : 100px 0px;
  width:fit-content;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

function Chatbot_main() {
    const [isHoverChatbox, setIsHoverChatbox] = useState(false);
    const [isHoverSidebarItemHeader, setIsHoverSidebarItemHeader] = useState(false);
    const [messageChange, setMessageChange] = useState(0);

    const [qnas, setQnas] = useState(
        [
            {
              "id": 1,
              "question": "탕비실은 어디에 있나요?",
              "answer": "탕비실은 2층 안내 데스크 오른편에 있습니다. 탕비실에서는 전자레인지, 냉장고, 씽크대 등이 있으며, 과자, 음료수 등의 다과들이 구비되어 있습니다."
            },
            {
              "id": 2,
              "question": "5층 화장실은 어디에 있나요?",
              "answer": "5층 화장실은 5층 사무실 자동문 입구 근처에 있습니다."
            },
            {
              "id": 3,
              "question": "마케팅 부서는 어디에 있나요?",
              "answer": "마케팅 부서는 6층에 있습니다. 6층 사무실에서 맨 왼쪽에 있는 부서가 마케팅 부서입니다."
            },
            {
              "id": 4,
              "question": "복합기를 사용해서 문서를 양면으로 복사하고 싶은데 어떻게 해야 하나요?",
              "answer": "알겠습니다. 복합기를 사용해서 문서를 복사하는 방법을 알려드리겠습니다. 하지만 문서의 크기나 컬러 여부 등에 대한 정보 등 자세한 정보가 더 필요합니다."
            },
            {
              "id": 5,
              "question": "문서를 흑백으로 양면 복사하고 싶어요. 용지는 A4 용지를 사용해요.",
              "answer": "알겠습니다. 복합기를 사용해서 문서를 A4 용지 크기로 흑백 양면 복사하는 방법을 알려드리겠습니다.\n1. 복합기의 커버 위에 복사할 종이를 놓습니다.\n2. 복합기의 디스플레이에서 ‘복사’를 누릅니다.\n3. ‘컬러 선택’에서 컬러를 ‘흑백’으로 선택합니다.\n4. ‘양면’에서 ‘양면-\u003E양면’을 누릅니다.\n5. ‘시작’ 버튼을 누릅니다."
            },
            {
              "id": 6,
              "question": "매출 현황표를 바탕으로 그래프를 그리고 싶은데 어떻게 해야 하나요?",
              "answer": "(주)픽셀은 매출 현황표를 바탕으로 그래프를 그릴 때는 조건부 서식를 사용하고 있습니다. 따라서 조건부 서식을 이용해서 매출 현황 그래프를 그려보도록 하겠습니다.\n1. 표에서 그래프로 나타내고 싶은 부분을 드래그합니다.\n2. 엑셀 상단에 ‘홈’ 탭에서 ‘조건부 서식’을 클릭합니다.\n3. ‘조건부 서식’에서 ‘데이터 막대’를 클릭하고, 원하는 색상을 선택합니다."
            }
          ]
    );

    const [isFirst, setIsFirst] = useState(true);
    const [messages, setMessages] = useState([]);

    const [input, setInput] = useState('');

    const [sidebarItems, setSidebarItems] = useState([]);

    const scrollRef = useRef(null);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
    
        const newMessages = [...messages, { sender: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        try {
            const res = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                  model: 'gpt-3.5-turbo',
                  messages: [{ role: 'user', content: input }],
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                  },
                }
              );
              const data = res.data.choices[0].message.content;
              setMessages([...newMessages, { sender: 'bot', content: data }]);
        } catch (error) {
            console.error('Error fetching response from OpenAI:', error);
        }

        // apiClient.post('/qna',{"question":"탕비실은 어디에 있나요?"})
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    };

    const handleKeyPress = (e) => {
        e.preventDefault();  // Enter 키 입력시 폼 제출을 방지합니다.
        sendMessage(e);
    };
      

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messageChange, messages]);

    useEffect(()=>{
        setSidebarItems(['정수기 위치', '복사하는 방법', '프린트하는 방법']);
    }, [])

  return (
    <AppContainer>
      <Tooltip isHoverChatbox={isHoverChatbox} isHoverSidebarItemHeader={isHoverSidebarItemHeader}/>
      <Sidebar>
        <Profile>
            <ProfileImage></ProfileImage>
            <div>강주연님</div>
        </Profile>
        <SidbarItemHaed
            onMouseEnter={()=>setIsHoverSidebarItemHeader(true)}
            onMouseLeave={()=>setIsHoverSidebarItemHeader(false)}
        >이전에<br/> 궁금했던 것들</SidbarItemHaed>
        {sidebarItems.map((text, index) => (
            <SidebarItem key={index}>{text}</SidebarItem>
        ))}
      </Sidebar>
      <Main>
        <Content>
          {isFirst ? <WelcomeMessage>귀하의 입사를 축하드립니다</WelcomeMessage> : null}
          {messages.map((message, index) => (
            <Message key={index} message={message} isUser={message.sender === 'user'} setMessageChange={setMessageChange} />
          ))}
          <div ref={scrollRef}></div>
        </Content>
        <ChatboxArea onMouseEnter={()=>setIsHoverChatbox(true)}
            onMouseLeave={()=>setIsHoverChatbox(false)}
            >
            <Chatbox setInput={setInput} handleKeyPress={handleKeyPress} setIsHoverChatbox={setIsHoverChatbox}/>
        </ChatboxArea>
      </Main>
    </AppContainer>
  );
}

export default Chatbot_main;
