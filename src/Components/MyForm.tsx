import React, { useState } from "react";

type MyFormProps = {
    onSubmit: (form: { name: string; description: string }) => void;
};
const MyForm = ({ onSubmit } : MyFormProps) => {
    const [form, setForm] = useState({
        name: "",
        description : ""
    })

    const {name, description} = form;

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        }); // 초기화
    }
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { target : { name, value } } = e;
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" value={name} onChange={onChange} />
                <input name="description" value={description} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default MyForm;