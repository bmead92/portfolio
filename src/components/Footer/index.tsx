import './index.scss';
import Strings from '../../strings/Strings';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div id='footer'>
            {Strings.externalLinks.map((entry) => {
                return (
                    <div
                        className='tab'
                        key={entry.index}
                    >
                        <Link
                            className='text'
                            to={`${entry.url}`}
                        >
                            {entry.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

export default Footer;