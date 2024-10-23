import { FC } from "react";
import { SiNextdotjs, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";

const Projects: FC = () => {
    return (
        <main className="container mx-auto pt-20 pb-5">
            <section>
                <h2 className="text-3xl p-1 flex justify-center font-semibold font-mono dark:text-white">Mis Proyectos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 lg:p-3">
                        <div className="">
                            <div className="p-3 bg-black"></div>
                        </div>
                        <div className="px-3 pt-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Desafio de Oracle One</h3>
                            </div>
                            <div className="divide-y-2 divide-yellow-500 dark:divide-slate-500">
                                <p className="py-1 px-1 text-justify">Un encriptador basico donde se cambian las vocales por otras letras.</p>
                            </div>
                            <div className="py-1 flex justify-between px-1">
                                <p>Fronted:</p>
                                <p>React</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 lg:p-3">
                        <div className="">
                            <img className="rounded-lg" src="../../public/proyecto-intranet.png" />
                        </div>
                        <div className="px-3 pt-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Intranet Elim - Kodytec</h3>
                            </div>
                            <div className="divide-y-2 divide-yellow-500 dark:divide-slate-500">
                                <p className="py-1 px-1 text-justify">La primera intranet echa para que puedan visualizar pagos y notas echa para profesores y alumnos.</p>
                            </div>
                            <div className="border border-x-black mx-1"></div>
                            <div className="py-1 px-1 items-center">
                                <div className="flex justify-between">
                                    <p>Fronted:</p>
                                    <p>Next</p>
                                </div>
                                <div className="border border-x-black"></div>
                                <div className="flex justify-between">
                                    <p>Backend:</p>
                                    <p>Python</p>
                                </div>
                                <div className="border border-x-black"></div>
                                <div className="flex justify-around m-2">
                                    <SiPython className="w-7 h-7" title="Python" color="#306998" />
                                    <SiTypescript className="w-7 h-7" title="TypeScript" color="#3178C6" />
                                    <SiTailwindcss className="w-7 h-7" title="Tailwind CSS" color="#38B2AC" />
                                    <SiNextdotjs className="w-7 h-7" title="Next.js" color="#000000" />
                                </div>
                                <div className="flex flex-col justify-between gap-1 pt-1">
                                    <button className="bg-blue-500 rounded-lg font-semibold text-white">
                                        <a href="https://kodytec.onrender.com/login">
                                            Ver Demo
                                        </a>
                                    </button>
                                    <button className="bg-blue-500 rounded-lg font-semibold text-white">Fronted</button>
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 lg:p-3">
                        <div className="">
                            <div className="p-3 bg-black"></div>
                        </div>
                        <div className="px-3 pt-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Desafio de Oracle One</h3>
                            </div>
                            <div className="divide-y-2 divide-yellow-500 dark:divide-slate-500">
                                <p className="py-1 px-1 text-justify">Un encriptador basico donde se cambian las vocales por otras letras.</p>
                            </div>
                            <div className="py-1 flex justify-between px-1">
                                <p>Fronted:</p>
                                <p>React</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 lg:p-3">
                        <div className="">
                            <div className="p-3 bg-black"></div>
                        </div>
                        <div className="px-3 pt-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Desafio de Oracle One</h3>
                            </div>
                            <div className="divide-y-2 divide-yellow-500 dark:divide-slate-500">
                                <p className="py-1 px-1 text-justify">Un encriptador basico donde se cambian las vocales por otras letras.</p>
                            </div>
                            <div className="py-1 flex justify-between px-1">
                                <p>Fronted:</p>
                                <p>React</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 lg:p-3">
                        <div className="">
                            <div className="p-3 bg-black"></div>
                        </div>
                        <div className="px-3 pt-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Desafio de Oracle One</h3>
                            </div>
                            <div className="divide-y-2 divide-yellow-500 dark:divide-slate-500">
                                <p className="py-1 px-1 text-justify">Un encriptador basico donde se cambian las vocales por otras letras.</p>
                            </div>
                            <div className="py-1 flex justify-between px-1">
                                <p>Fronted:</p>
                                <p>React</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow p-2 lg:p-3">
                        <div className="">
                            <div className="p-3 bg-black"></div>
                        </div>
                        <div className="px-3 pt-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Desafio de Oracle One</h3>
                            </div>
                            <div className="divide-y-2 divide-yellow-500 dark:divide-slate-500">
                                <p className="py-1 px-1 text-justify">Un encriptador basico donde se cambian las vocales por otras letras.</p>
                            </div>
                            <div className="py-1 flex justify-between px-1">
                                <p>Fronted:</p>
                                <p>React</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;