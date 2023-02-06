import React from 'react';
import styled from 'styled-components';

const ChatMain = () => {
  return (
    <Wrap>
      <Headers>
        <MainTitle>Who Are You</MainTitle>
        <SubTitle>익명채팅을 시작해보세요</SubTitle>
      </Headers>
      <LogoutBtn>로그아웃</LogoutBtn>
      <UsrProfile>
        <Usr1 src="/images/ChatMain/IMG_2706.JPG" alt="usr1_profile" />
        <Usr1 src="/images/ChatMain/IMG_2706.JPG" alt="usr1_profile" />
        <Usr1 src="/images/ChatMain/IMG_2706.JPG" alt="usr1_profile" />
        <Usr1 src="/images/ChatMain/IMG_2706.JPG" alt="usr1_profile" />
      </UsrProfile>
      <ChatForm>
        <UsrChat>
          <Usr1 src="/images/ChatMain/IMG_2706.JPG" alt="usr1_profile" />
        </UsrChat>
        <UsrChat>
          <Usr1 src="/images/ChatMain/IMG_2706.JPG" alt="usr1_profile" />
        </UsrChat>
        <UsrChat>
          <Usr1 src="/images/ChatMain/IMG_2706.JPG" alt="usr1_profile" />
        </UsrChat>
      </ChatForm>
    </Wrap>
  );
};

const Wrap = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #dce9f1;
  border-radius: 30px;
`;

const Headers = styled.div`
  padding-left: 50px;
  padding-top: 70px;
`;

const MainTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;

const SubTitle = styled.div`
  position: absolute;
  width: 208px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #454545;
  padding-top: 21px;
`;

const LogoutBtn = styled.button`
  width: 130px;
  height: 40px;
  background: #f1a0bf;
  border-radius: 50px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  margin-left: 480px;
  margin-right: 50px;
`;

const UsrProfile = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 10px 50px 10px;
`;

const Usr1 = styled.img`
  width: 118px;
  height: 116px;
  cursor: pointer;
  border-radius: 70px;
  margin: 15px;
`;

const ChatForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 522px;
  background: #f8fafe;
  border-radius: 30px;
`;

const UsrChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 540px;
  height: 130px;
  margin: 0 30px 0 30px;
  cursor: pointer;
  &:hover {
    background-color: #f0f7fc;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  }
`;

export default ChatMain;
