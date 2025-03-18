import './index.scss';
import JSIcon from '../../assets/images/javascript-icon.png';
import CSSIcon from '../../assets/images/css-icon.png';
import HTMLIcon from '../../assets/images/html-icon.png';
import ReactIcon from '../../assets/images/react-icon.png';
import NodeIcon from '../../assets/images/node-icon.png';
import GitIcon from '../../assets/images/git-icon.png';
import AndroidIcon from '../../assets/images/android-icon.png';
import IOSIcon from '../../assets/images/ios-icon.png';
import JavaIcon from '../../assets/images/java-icon.png';
import PythonIcon from '../../assets/images/python-icon.png';
import TypescriptIcon from '../../assets/images/typescript-icon.png';
import SassIcon from '../../assets/images/sass-icon.png';
import Strings from '../../strings/Strings';
import SQLIcon from '../../assets/images/SQLIcon.png';
import muiIcon from '../../assets/images/muiIcon.png';
import mobXIcon from '../../assets/images/mobXIcon.png';

const Skills = () => {
    return (
        <div id='skills' className='skillsContainer'>
            <h1 className='skillsHeader globalFontColor'>{Strings.skillsHeader}</h1>
            <div className='languages'>
                <img src={JSIcon} className='logo' alt='javascript logo' />
                <img src={JavaIcon} className='logo' alt='Java logo' />
                <img src={PythonIcon} className='logo' alt='Python logo' />
                <img src={TypescriptIcon} className='logo' alt='Typescript logo' />
                <img src={HTMLIcon} className='logo' alt='HTML-5 logo' />
                <img src={CSSIcon} className='logo' alt='CSS-3 logo' />
                <img src={SassIcon} className='logo' alt='SASS logo' />
                <img src={SQLIcon} className='logo' alt='SQL logo' />
                <img src={muiIcon} className='logo' alt='MUI logo' />
                <img src={mobXIcon} className='logo' alt='MobX logo' />
            </div>
            <div className='misc'>
                <img src={ReactIcon} className='logo' alt='React logo' />
                <img src={NodeIcon} className='logo' alt='Node.js logo' />
                <img src={GitIcon} className='logo' alt='Git logo' />
            </div>
            <div className='mobile'>
                <img src={AndroidIcon} className='logo' alt='Android logo' />
                <img src={IOSIcon} className='logo' alt='iOS logo' />
            </div>
        </div>
    )
}

export default Skills;