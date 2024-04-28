import './index.scss';
import Strings from '../../strings/Strings';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div id='footer' className='container'>
            {Strings.externalLinks
                .filter((link) => link.name !== 'TLG')
                    .map((entry) => {
                        return (
                            <div
                                className='tab'
                                key={entry.index}
                            >
                                <Link
                                    className='text globalFontColor'
                                    to={`${entry.url}`}
                                >
                                    {entry.name}
                                </Link>
                            </div>
                        )
                    })
            }
        </div>
    )
};

export default Footer;