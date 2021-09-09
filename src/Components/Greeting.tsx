import React from "react";

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
};

// const Greeting: React.FC<GreetingsProps> = ({ name, mark }) => (
//     <div>Hello, {name} {mark}</div>
// )
// const Greeting = ({name, mark} : GreetingsProps) => (
//     <div>Hello, {name} {mark}</div>
// )
const Greeting = ({name, mark, optional} : GreetingsProps) => {
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
        </div>
        
    )
}

Greeting.defaultProps = {
    mark : "?"
};


export default Greeting;