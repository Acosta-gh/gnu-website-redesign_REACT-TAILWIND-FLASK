import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function Header() {
    const { t } = useTranslation();
    const [isOpen, setOpen] = useState(false);

    const navItems = t('headerMenu', { returnObjects: true });

    const langItems = [
        { label: 'En' },
        { label: 'Es' },
        { label: 'Fr' },
    ];

    const [lang, setLang] = useState(langItems[0].label); // Default: En

    const handleLanguageChange = (selectedLang) => {
        setLang(selectedLang);
        i18n.changeLanguage(selectedLang.toLowerCase());
    };

    return (
        <>
            <header className="fixed w-full top-0 left-0 z-50 flex flex-row items-center bg-[var(--primary-color)] md:justify-evenly">
                {/* Logo */}
                <div className="p-3 md:pl-[5%]">
                    <Link to="/">
                        <img
                            className="h-13 w-auto"
                            src="/gnu.png"
                            alt="GNU Logo"
                        />
                    </Link>
                </div>

                {/* Desktop <nav> */}
                <nav className="hidden md:block pr-[5%]">
                    <ul className="flex flex-row gap-3">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    className="block w-full text-white font-light hover:brightness-[80%] transition-all duration-300 ease-in-out"
                                >
                                    {t(item.label)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Language Menu */}
                <div>
                    <ul className="hidden md:flex flex-row gap-3">
                        {langItems.map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleLanguageChange(item.label)}
                                    className={`block cursor-pointer w-full text-white font-light hover:font-normal transition-all duration-300 ease-in-out ${lang === item.label ? 'font-medium' : ''}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger Menu */}
                <div className="absolute top-3 right-3 md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" color="#fff" />
                </div>
            </header>

            {/* Mobile <nav> */}
            <nav className={`fixed top-0 left-0 w-full z-40 drop-shadow-xs bg-[var(--primary-color)] overflow-hidden transition-max-height duration-300 md:hidden ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                <ul className="flex flex-col gap-3 pb-3 pt-3 pl-5">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link to={item.to} className="block w-full text-white">
                                {t(item.label)}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Language Menu */}
                    <div>
                        <ul className="md:hidden flex flex-row gap-7">
                            {langItems.map((item) => (
                                <li key={item.label}>
                                    <button
                                        onClick={() => handleLanguageChange(item.label)}
                                        className={`block underline w-full text-white font-light ${lang === item.label ? 'font-medium' : ''}`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default Header;
