import Input from "../../UI/input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [isAmountValid, setIsAmountValid ]=useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const inputAmount = amountInputRef.current.value;
        if(inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10){
            setIsAmountValid(false);
            return;
        }
        props.onAddToCart(+inputAmount);
    }

    return ( 
    <form className="form" onSubmit={submitHandler}>
        <Input 
            ref = {amountInputRef}
            label='Количество' 
            input={{
                id: props.id,
                type: "number",
                min: "1",
                step: "1",
                defaultValue: "1"
            }}/>
        <button>Добавить</button>
        {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10</p>}
    </form>
    );
};

export default MealItemForm;