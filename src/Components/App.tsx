import React from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";
import MyForm from "./MyForm";
import ReCounter from "./ReCounter";
import ReducerSample from "./ReducerSample";


const App: React.FC = () => {
  const onClickGreeting = (name:string) => {
    console.log(`${name} says hello`);
  }
  const onSubmit = (form: { e_name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greeting name={"Sydney"} onClickGreeting={onClickGreeting} />
      <Counter />
      <MyForm onSubmit={onSubmit}/>
      <div>
        <h1>reducer Counter</h1>
        <ReCounter />
      </div>
      <ReducerSample />
    </>
  )
}

export default App;