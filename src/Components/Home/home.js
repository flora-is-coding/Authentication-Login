import Login from "../Login/login";
import Registration from "../Registration/registration";
import './home.css';

export default function Home () {
    return (
        <div className="home__box">
            <div className="home__content">
                <div className="home__left-column">
                    <Registration />
                </div>
                <div className="home__right-column">
                    <Login />
                </div>
            </div>
        </div>
    )
}