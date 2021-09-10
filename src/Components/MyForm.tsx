import React, { useState } from "react";

type MyFormProps = {
    onSubmit: (form: { e_name: string; description: string }) => void;
};
const MyForm = ({ onSubmit } : MyFormProps) => {
    const [form, setForm] = useState({
        e_name: "",
        description : ""
    })

    const {e_name, description} = form;

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            e_name: '',
            description: ''
        }); // 초기화
    }
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { target : { name, value } } = e;
        setForm({
            ...form,
            [name]: value
            // e_name or description
            // e_name : value
            // description : value
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="e_name" value={e_name} onChange={onChange} />
                <input name="description" value={description} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default MyForm;