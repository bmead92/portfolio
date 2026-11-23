import './index.scss';
import { profile } from '../../content';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../Icons';

const Contact = () => (
    <>
        <section id="contact" className="section">
            <div className="container">
                <div className="contactCard">
                    <span className="sectionEyebrow">Contact</span>
                    <h2 className="sectionTitle">Let's work together</h2>
                    <p>
                        I'm interested in full-stack and AI-focused engineering roles. If you're hiring or have a
                        project in mind, I'd love to hear from you.
                    </p>
                    <div className="contactActions">
                        <a className="btn btnPrimary" href={`mailto:${profile.email}`}>
                            <MailIcon /> {profile.email}
                        </a>
                        <a className="btn btnGhost" href={profile.linkedin} target="_blank" rel="noreferrer">
                            <LinkedInIcon /> LinkedIn
                        </a>
                        <a className="btn btnGhost" href={profile.github} target="_blank" rel="noreferrer">
                            <GitHubIcon /> GitHub
                        </a>
                        <a className="btn btnGhost" href={profile.resume} target="_blank" rel="noreferrer">
                            <DownloadIcon /> Résumé
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <footer className="siteFooter">
            <div className="container footerInner">
                <span>© {new Date().getFullYear()} {profile.name}</span>
                <span>Built with React, TypeScript and SASS</span>
            </div>
        </footer>
    </>
);

export default Contact;
