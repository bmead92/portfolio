import { useEffect, useState } from 'react';
import './index.scss';
import { navLinks, profile } from '../../content';
import { MenuIcon } from '../Icons';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <header className={`siteHeader${scrolled ? ' isScrolled' : ''}${open ? ' isOpen' : ''}`}>
            <div className="container headerInner">
                <a href="#top" className="brand" onClick={close}>
                    <span className="brandMark" aria-hidden="true">BM</span>
                    <span className="brandName">{profile.name}</span>
                </a>

                <nav className="headerNav" aria-label="Primary">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={close}>
                            {link.label}
                        </a>
                    ))}
                    <a
                        className="btn btnGhost btnSmall headerResume"
                        href={profile.resume}
                        target="_blank"
                        rel="noreferrer"
                        onClick={close}
                    >
                        Résumé
                    </a>
                </nav>

                <button
                    type="button"
                    className="menuToggle"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen((o) => !o)}
                >
                    <MenuIcon open={open} />
                </button>
            </div>
        </header>
    );
};

export default Header;
