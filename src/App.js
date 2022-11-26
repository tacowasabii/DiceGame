import Button from "./Button";
import Dice from "./Dice";

function App() {
  return (
    <div>
      <Button>던지기</Button>
      <Button>처음부터</Button>
      <Dice color="red" num={4} />
    </div>
  );
}

export default App;
