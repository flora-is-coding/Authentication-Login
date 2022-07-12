import './registration.css';

export default function Registration () {
    return (
        <div className="registration">
            <h2 className="registration__title">Registation</h2>
            <form className="registration__form">
                <fieldset className="registration__fieldset">
                    <label className="registration__label">
                        <p className="registration__paragraph">E-mail</p>
                        <input className="registration__input" type="email" />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Repeat E-mail</p>
                        <input className="registration__input" type="email" />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Password</p>
                        <input className="registration__input" type="password" minLength="8" required />
                    </label>
                    <label className="registration__label">
                        <p className="registration__paragraph">Repeat Password</p>
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