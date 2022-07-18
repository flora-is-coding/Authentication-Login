import './registration.css';

export default function Registration () {
    const initialState = {
        username: '',
        
        password: ''
    }

    return (
        <div className="registration">
            <h2 className="registration__title">Registation</h2>
            <form className="registration__form">
                <fieldset className="registration__fieldset">
                    <label className="registration__label">
                        <p className="registration__paragraph">First Name</p>
                        <input className="registration__input" type="text" />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Last Name</p>
                        <input className="registration__input" type="text" />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Email</p>
                        <input className="registration__input" type="text" />
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
                <button className="registration__button button--submit">
                        Submit
                    </button>
            </form>
        </div>
    )
}