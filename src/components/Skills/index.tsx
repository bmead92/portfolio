import './index.css';
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

const Skills = () => {
    return (
        <div className='skillsContainer'>
            <h1 className='text'>LANGUAGES, FRAMEWORKS, AND TOOLS</h1>
            <div className='skills'>
                <img src={ReactIcon} className='logo' alt='React logo' />
                <img src={NodeIcon} className='logo' alt='Node.js logo' />
                <img src={JSIcon} className='logo' alt='javascript logo' />
                <img src={JavaIcon} className='logo' alt='Java logo' />
                <img src={PythonIcon} className='logo' alt='Python logo' />
                <img src={TypescriptIcon} className='logo' alt='Typescript logo' />
                <img src={HTMLIcon} className='logo' alt='HTML-5 logo' />
                <img src={CSSIcon} className='logo' alt='CSS-3 logo' />
                <img src={GitIcon} className='logo' alt='Git logo' />
                <img src={AndroidIcon} className='logo' alt='Android logo' />
                <img src={IOSIcon} className='logo' alt='iOS logo' />
            </div>
        </div>
    )
}

export default Skills;