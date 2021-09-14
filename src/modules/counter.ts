// action type
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성 함수
export const increase = () => ({
    type: INCREASE
});
export const decrease = () => ({
    type: DECREASE
});
export const increaseBy = (diff:number) => ({
    type: INCREASE_BY,
    payload : diff
});

// 액션 캑체들의 타입
type CounterAction = 
    ReturnType<typeof increase> | 
    ReturnType<typeof decrease> | 
    ReturnType<typeof increaseBy>

// state 타입
type CounterState = {
    count : number;
}

// 초기상태 선언
const initialState : CounterState = {
    count : 0
}

// reducer
const counter = (
        state : CounterState = initialState, 
        action:CounterAction
    ) : CounterState => {
    switch (action.type) {
        case INCREASE :
            return { count : state.count + 1 };
        case DECREASE :
            return { count : state.count - 1 };
        case INCREASE_BY :
            return {count : state.count + action.payload };
        default:
            return state;
    }
}

export default counter;