import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { increase, decrease, increaseBy } from "../../modules/counter";
import ReduxCounterPresenter from "./ReduxCounterPresenter";


const ReduxCounterContainer = () => {
    const { count } = useSelector((state:RootState)=>state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onIncreaseBy = (diff:number) => {
        dispatch(increaseBy(diff));
    };


    return (
        <ReduxCounterPresenter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    )
}

export default ReduxCounterContainer;