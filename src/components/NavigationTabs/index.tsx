import './index.scss';
import Strings from '../../strings/Strings';
import {NavLink} from 'react-router-dom';

const NavigationTabs = () => {
    return (
        <div className="container">
            {Strings.navigationTabs.map((entry) => {
                return (
                    <div className='tab'>
                        <NavLink className='text' to={`${entry.url}`}>
                            {entry.name}
                        </NavLink>
                    </div>
                )
            })}
        </div>
    );
};

export default NavigationTabs;