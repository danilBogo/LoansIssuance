import React, {useState} from 'react';
import axios from "axios";

export function CreditForm() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [patronymic, setPatronymic] = useState("")

    const submitForm = (e: any) => {
        e.preventDefault()
        axios.post("credit/dicks", {
            name: "123",
            surname: "1234",
            patronymic: "12345"
        }).then(r => console.log(r)).catch(r => console.log(r))
    }

    return (
        <div>
            <form>
                <input value={surname}
                       onChange={(e) => setSurname(e.target.value)}
                       placeholder="Фамилия"/>
                <input value={name}
                       onChange={(e) => setName(e.target.value)}
                       placeholder="Имя"/>
                <input value={patronymic}
                       onChange={(e) => setPatronymic(e.target.value)}
                       placeholder="Отчество"/>
                <button onClick={submitForm}>Отправить</button>
            </form>
        </div>
    )
}