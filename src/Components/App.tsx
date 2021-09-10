import React from "react";
import Greeting from "./Greeting";

const App: React.FC = () => {
  const handleClick = (name:string) => {
    console.log(`${name} says hello`)
  }
  return (
    <Greeting name={"Sydney"} onClickGreeting={handleClick} />
  )
}

export default App;