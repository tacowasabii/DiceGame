import styled from "styled-components";
import Dice from "./Dice";

function Board({ name, color, gameHistory, isWin }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  return (
    <MainContainer isWin={isWin}>
      <h1>{name}</h1>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: inline-block;
  padding: 35px 30px;
  border: ${({ isWin }) =>
    isWin ? "1px solid #fff" : "1px solid transparent"};
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
  background-color: #272b38;
  width: 30%;
  margin: 10px;

  & > h1,
  h2 {
    margin: 45px auto 15px;
    color: #888d9d;
    font-weight: 400;
    font-size: 18px;
  }

  & > h1 {
    margin-top: 0;
  }
`;

export default Board;
