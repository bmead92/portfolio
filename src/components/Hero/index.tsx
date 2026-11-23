import './index.scss';
import { profile, stats } from '../../content';
import { DownloadIcon, GitHubIcon, LinkedInIcon, PinIcon } from '../Icons';

const Hero = () => (
    <section id="top" className="hero">
        <div className="container">
            <p className="heroMeta">
                <PinIcon className="heroMetaIcon" />
                {profile.location} <span className="dot">·</span> U.S. Army Veteran
            </p>
            <h1 className="heroTitle">
                {profile.name}
                <span className="heroRole">{profile.title}</span>
            </h1>
            <p className="heroTagline">{profile.tagline}</p>

            <div className="heroActions">
                <a className="btn btnPrimary" href="#projects">
                    View my work
                </a>
                <a className="btn btnGhost" href={profile.resume} target="_blank" rel="noreferrer">
                    <DownloadIcon /> Résumé
                </a>
                <div className="heroSocial">
                    <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <GitHubIcon />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>

            <dl className="stats">
                {stats.map((s) => (
                    <div className="stat" key={s.label}>
                        <dt>{s.label}</dt>
                        <dd>{s.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </section>
);

export default Hero;
