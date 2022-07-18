import { useState, useRef } from 'react';
import './registration.css';

export default function Registration () {
    const initialState = {
        firstname: '',
        lastName: '',
        email: '',
        password: ''
    }

    const [form, setForm] = useState(initialState);
    const [addedForm, setAddedForm] = useState([]);

    const handleSubmit = () => {
        const nextAddedForm = [...addedForm, form]

        setAddedForm(nextAddedForm);
        setForm(initialState)
    }

    console.log(form);
    console.log(addedForm);

    return (
        <div className="registration">
            <h2 className="registration__title">Registation</h2>
            <form className="registration__form">
                <fieldset className="registration__fieldset">
                    <label className="registration__label">
                        <p className="registration__paragraph">First Name</p>
                        <input className="registration__input" type="text" onChange={firstname => setForm(state => ({ ...state, firstname: firstname.target.value }))} />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Last Name</p>
                        <input className="registration__input" type="text" onChange={lastName => setForm(state => ({ ...state, lastName: lastName.target.value }))} />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Email</p>
                        <input className="registration__input" type="text" onChange={email => setForm(state => ({ ...state, email: email.target.value }))} />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Password</p>
                        <input className="registration__input" type="password" minLength="8" required />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Confirm Password</p>
                        <input className="registration__input" type="password" minLength="8" required />
                    </label>
                    
                </fieldset>
                <button className="registration__button button--submit" onClick={handleSubmit} >
                        Submit
                    </button>
            </form>
        </div>
    )
}