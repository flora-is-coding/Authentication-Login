import { useState } from 'react';
import './login.css';

export default function Login () {
    const initialState = {
        login: '',
        password: ''
    }

    const [form, setForm] = useState(initialState);
    const [addedForm, setAddedForm] = useState('')

    const handleLogin = (e) => {
        const value = e.target.value
        console.log(value)
    }

    const handlePassword = (e) => {
        const value = e.target.value
        console.log(value)
    }

    return (
        <div className="login">
            <h2 className="login__title">Login</h2>
            <form className="login__form">
                <fieldset className="login__fieldset" >
                    <label className="login__label">
                        <p className="login__paragraph">Login/E-mail</p>
                        <input className="login__input" type="email" onChange={(e) => handleLogin(e)}/>
                    </label>
                    <label className="login__label">
                        <p className="login__paragraph">Password</p>
                        <input className="login__input" type="password" onChange={(e) => handlePassword(e)}/>
                    </label>
                </fieldset>
                <button className="login__button button--login">
                    Login
                </button>
            </form>
        </div>
    )
}