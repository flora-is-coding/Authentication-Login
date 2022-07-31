import Login from "../Login/login";
import Main from "../Main/main";
import Registration from "../Registration/registration";
import './home.css';

export default function Home () {
    return (
        <div className="home__box">
            <div className="home__content">
                <div className="title__content">
                    <h1>Hello and Welcome</h1>
                    <p>You can create a collection of everything here</p>
                </div>
                <Main />
            </div>
        </div>
    )
}