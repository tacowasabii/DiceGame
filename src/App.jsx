import { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Button from "./Button";
import GlobalStyle from "./GlobalStyle";
import DiceImg from "./assets/logo.png";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [isBlueWin, setIsBlueWin] = useState(false);
  const [isRedWin, setIsRedWin] = useState(false);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
    setIsBlueWin(nextMyNum > nextOtherNum ? true : false);
    setIsRedWin(nextMyNum < nextOtherNum ? true : false);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    setIsBlueWin(false);
    setIsRedWin(false);
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <div className="App">
        <Logo src={DiceImg} alt="주사위 게임 로고" />
        <Title>주사위 게임</Title>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
        <div>
          <Board
            name="나"
            color="blue"
            isWin={isBlueWin}
            gameHistory={myHistory}
          />
          <Board
            name="상대"
            color="red"
            isWin={isRedWin}
            gameHistory={otherHistory}
          />
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 20px auto;
  text-align: center;

  & > div > Button {
    min-width: 120px;
    padding: 14px 27px;
    border-radius: 9999px;
    outline: none;
    font-size: 18px;
    font-family: "NanumSquareRoundEB";
    cursor: pointer;
    margin: 6px;
  }
  & > div > Button:nth-child(3) {
    border: 1px solid #7090ff;
    color: #7090ff;
    background-color: rgba(0, 89, 255, 0.2);
    &:hover {
      background-color: rgba(0, 89, 255, 0.3);
    }
  }
  & > div > Button:nth-child(4) {
    border: 1px solid #ff4664;
    color: #ff4664;
    background-color: rgba(255, 78, 78, 0.2);
    &:hover {
      background-color: rgba(255, 78, 78, 0.3);
    }
  }
  & > div > div {
    margin-top: 27px;
  }
`;

const Title = styled.h1`
  margin: 10px auto 28px;
  font-size: 28px;
`;

const Logo = styled.img`
  height: 65px;
`;

export default App;
