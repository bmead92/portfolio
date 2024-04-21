import './index.css';
import {Link} from 'react-router-dom';

const Links = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/github"> Github </Link>
                </li>
                <li>
                    <Link to="/resume"> Resume </Link>
                </li>
            </ul>
        </>
    )
}

export default Links;