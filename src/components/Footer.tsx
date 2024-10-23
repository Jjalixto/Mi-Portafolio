import { FC } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer : FC = () => {
    return (
        <footer className="flex flex-col shadow-md md:flex-row items-center justify-between py-2 px-14 text-black dark:bg-gray-800 dark:text-white">
            {/* Sección de Iconos */}
            <div className="flex items-center gap-4 mb-2 md:mb-3 mt-1">
                <a
                    href="https://www.linkedin.com/in/jjalixtoc" // Reemplaza con tu enlace de LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-amber-300 transition-all hover:text-lg hover:bg-amber-100 dark:bg-sky-500 dark:hover:bg-sky-400 z-50 cursor-pointer"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://github.com/Jjalixto" // Reemplaza con tu enlace de GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-amber-300 transition-all hover:text-lg hover:bg-amber-100 dark:bg-sky-500 dark:hover:bg-sky-400 z-50 cursor-pointer"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
                <a
                    href="https://wa.me/957038961" // Reemplaza con tu enlace de WhatsApp
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-amber-300 transition-all hover:text-lg hover:bg-amber-100 dark:bg-sky-500 dark:hover:bg-sky-400 z-50 cursor-pointer"
                >
                    <FaWhatsapp className="w-6 h-6" />
                </a>
            </div>

            {/* Texto de derechos reservados */}
            <div>
                <p className="font-normal md:font-bold">© 2024 <span className="font-bold">Joel Jalixto</span>. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
