import { Link } from "react-router-dom";
import '../styles/NotFound.css';

export default function NotFound() {
    return (
        <div className="notFound">
            <h1>Oops! You seem to be lost...</h1>
            <div className="redirect">
                <p>Go back to Homepage:</p>
                <Link to='/'>Home</Link>
            </div>

        </div>
    )
}