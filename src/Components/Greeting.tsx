import React from "react";

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClickGreeting: (name : string) => void; 
    // void 아무것도 리턴하지 않는 함수라는 뜻
};

// const Greeting: React.FC<GreetingsProps> = ({ name, mark }) => (
//     <div>Hello, {name} {mark}</div>
// )
// const Greeting = ({name, mark} : GreetingsProps) => (
//     <div>Hello, {name} {mark}</div>
// )
const Greeting = ({name, mark, optional, onClickGreeting} : GreetingsProps) => {
    const handleClick = () => onClickGreeting(name);
    
    return (
        <>
            <div>
                Hello, {name} {mark}
                {optional && <p>{optional}</p>}
            </div>
            <div>
                <button onClick = {handleClick}>click me</button>
            </div>
        </>
    )
}

Greeting.defaultProps = {
    mark : "?"
};


export default Greeting;