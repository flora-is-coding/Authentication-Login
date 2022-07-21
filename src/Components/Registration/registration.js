import { useState, useRef } from 'react';
import './registration.css';

export default function Registration () {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [form, setForm] = useState(initialState);
    const [addedForm, setAddedForm] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextAddedForm = [...addedForm, form]

        if (form.password === form.confirmPassword) {
            console.log('match!')
        }
        setAddedForm(nextAddedForm);
        setForm(initialState)
    }

    const handleFirstnameChange = (event) => setForm(state => ({ ...state, firstName: event.target.value }));
    const handleLastnameChange = (event) => setForm(state => ({ ...state, lastName: event.target.value }));
    const handleEmailChange = (event) => setForm(state => ({ ...state, email: event.target.value }));
    const handlePasswordChange = (event) => setForm(state => ({ ...state, password: event.target.value }));
    const handleConfirmPasswordChange = (event) => setForm(state => ({ ...state, confirmPassword: event.target.value }));

    return (
        <div className="registration">
            <h2 className="registration__title">Registation</h2>
            <form className="registration__form">
                <fieldset className="registration__fieldset">
                    <label className="registration__label">
                        <p className="registration__paragraph">First Name</p>
                        <input className="registration__input" type="text" onChange={handleFirstnameChange} />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Last Name</p>
                        <input className="registration__input" type="text" onChange={handleLastnameChange} />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Email</p>
                        <input className="registration__input" type="text" onChange={handleEmailChange} />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Password</p>
                        <input className="registration__input" type="password" minLength="8" required onChange={handlePasswordChange} />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Confirm Password</p>
                        <input className="registration__input" type="password" minLength="8" required onChange={handleConfirmPasswordChange} />
                    </label>
                    
                </fieldset>
                <button className="registration__button button--submit" onClick={handleSubmit} >
                    Submit
                </button>
            </form>
        </div>
    )
}