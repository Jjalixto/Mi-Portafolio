import { FC } from "react";

const Home: FC = () => {
    return (
        <main className="py-48 text-center bg-[url('/noche.jpg')] dark:bg-[url('/public/dia.jpg')]">
            <h1 className="text-5xl font-bold mt-[3px] text-black dark:text-white">¡Bienvenido a Mi Portafolio!</h1>
            <p className="mt-4 text-lg text-black dark:text-white"> 
                Soy un desarrollador Full-Stack especializado en Java y React. Explora mis proyectos y habilidades.
            </p>
            <div className="mt-6">
                <a href="/about" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Conóceme más</a>
            </div>
        </main>
    );
};

export default Home;
