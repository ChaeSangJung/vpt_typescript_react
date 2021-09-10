import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    return (
        <div>
            <strong>{count}</strong>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;

// useState 를 사용 할 때 어떤 상황에 Generics 를 사용하는게 좋을까요?
// 바로, 상태가 null일 수도 있고 아닐수도 있을때 Generics 를 활용하시면 좋습니다.

// type Information = { name: string; description: string };
// const [info, setInformation] = useState<Information | null>(null);