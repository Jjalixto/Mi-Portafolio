import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export const Header: FC = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.querySelector("html")?.classList.toggle("dark", theme === "dark");
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-white dark:bg-slate-800 shadow-md fixed w-full top-0 z-50 transition-colors duration-300">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Joel</div>
                {/* Botón de cambio de tema para movil */}
                <button onClick={handleChangeTheme} className="md:hidden md:block ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-all ease-in-out duration-300">
                    {theme === "light" ? (
                        <MoonIcon className="w-6 h-6 text-yellow-500" />
                    ) : (
                        <SunIcon className="w-6 h-6 text-blue-400" />
                    )}
                </button>
                {/* Botón de menú para móvil */}
                <button onClick={toggleMenu} className="md:hidden p-2 rounded-md">
                    <Bars3Icon className="w-6 h-6 text-blue-600" />
                </button>
                
                {/* Menú para escritorio */}
                <ul className={`flex space-x-6 md:flex hidden dark:text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-500 transition-colors')}>Inicio</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-500 transition-colors')}>Sobre Mí</NavLink>
                    <NavLink to="/skills" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-500 transition-colors')}>Mis Habilidades</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-500 transition-colors')}>Mis Proyectos</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-500 transition-colors')}>Contacto</NavLink>
                </ul>
                {/* Botón de cambio de tema para escritorio */}
                <button onClick={handleChangeTheme} className="hidden md:block ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                    {theme === "light" ? (
                        <MoonIcon className="w-6 h-6 text-yellow-500" />
                    ) : (
                        <SunIcon className="w-6 h-6 text-blue-400" />
                    )}
                </button>
            </nav>
            {/* Menú móvil */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-800 shadow-md ">
                    <ul className="flex flex-col space-y-2 p-4 text-end">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-300 transition-colors')}>Inicio</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-300 transition-colors')}>Sobre Mí</NavLink>
                        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-300 transition-colors')}>Mis Habilidades</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-300 transition-colors')}>Mis Proyectos</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-blue-300' : 'hover:text-gray-600 dark:hover:text-gray-300 transition-colors')}>Contacto</NavLink>
                    </ul>
                </div>
            )}
        </header>
    );
};
