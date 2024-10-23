import { FC } from "react";

const Contact: FC = () => {
    return (
        <main className="container mx-auto pt-20 flex flex-col md:flex-row items-center justify-center min-h-screen">
            {/* Video */}
            <div className="mb-8 md:mb-0 md:mr-8 w-full max-w-lg hidden md:block">
                <video className="w-full h-64 rounded-md shadow-lg" autoPlay muted loop>
                    <source src="/programador.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
            </div>

            {/* Formulario de contacto */}
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-4">Contacto</h1>
                <form className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8">
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Nombre:</label>
                        <input type="text" id="name" className="w-full border border-gray-300 rounded p-2 dark:bg-gray-700 dark:text-white" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" className="w-full border border-gray-300 rounded p-2 dark:bg-gray-700 dark:text-white" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">Mensaje:</label>
                        <textarea id="message" className="w-full border border-gray-300 rounded p-2 dark:bg-gray-700 dark:text-white" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition-colors">Enviar</button>
                </form>
            </div>
        </main>
    );
};

export default Contact;