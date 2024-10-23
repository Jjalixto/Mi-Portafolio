import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";

const About: FC = () => {
    return (
        <main className="font-sans min-h-screen px-4 md:px-[15%] lg:px-[28%] pt-20 dark:bg-slate-800">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 divide-double">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">Sobre Mi</h1>
                </div>
                <div className="items-start mb-4 space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                    <div className="flex flex-col items-center space-x-2 pt-8">
                        <img src="joel.png" className="rounded-full sm:w-56 h-56" />
                        <h3 className="pb-2 pt-4 text-xl font-bold leading-8 tracking-tight dark:text-white">Joel Jalixto</h3>
                        <div className="text-gray-500 dark:text-gray-400">Desarrollador Software</div>
                        <div className="text-gray-500 dark:text-gray-400 mt-2">(+51)957038961</div>
                        <div className="flex space-x-3 pt-6">
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:jjalixtoc@gmail.com">
                                <span className="sr-only">mail</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </a>
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/Jjalixto">
                                <span className="sr-only">github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                                    </path>
                                </svg></a><a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jjalixtoc"><span className="sr-only">linkedin</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a><a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="/#"><span className="sr-only">twitter</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg></a></div>
                    </div>
                    <div className="prose max-w-none text-gray-950 dark:text-gray-200 pb-8 pt-8 dark:prose-invert xl:col-span-2">
                        <p className="">
                            Soy estudiante autodidacta de Desarrollo de Software y técnico en administración de obras, con más de
                            1 año y medio de experiencia en desarrollo de sistemas. Me especializo en el backend utilizando Spring
                            Boot (Java), tengo conocimientos en Angular, Spring Boot WebFlux y microservicios. Además, manejo
                            frameworks como Laravel, Symfony, React y Next.js. Actualmente, trabajo en ADC donde implemento
                            nuevas funcionalidades y atiendo requerimientos técnicos, fortaleciendo mis habilidades tanto técnicas
                            como de comunicación.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 pb-8 pt-6 md:space-y-5 dark:text-white">
                    <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">Experiencia Laboral</h2>
                    <ul className="timeline timeline-vertical timeline-snap-icon timeline-compact">
                        <li className="flex">
                            {/* Contenedor del icono y línea vertical */}
                            <div className="flex flex-col items-center mr-2 ">
                                <FaCheckCircle className="text-xl " />
                                <div className="flex-grow border-l-2 border-black mt-1 dark:border-white"></div> {/* Línea vertical */}
                            </div>

                            {/* Contenedor del contenido */}
                            <div className="py-3 text-start w-full ">
                                <div className="text-sm font-black mb-1 ">Desarrollador de Software</div>
                                <time className="font-mono italic mb-2 block">Diciembre 2023 - Octubre 2024</time>
                                <div className="p-2  border border-black rounded-[1rem] dark:border-white">
                                    <div className="text-lg font-black">ADC Asia del Campo</div>
                                    <ul className="dark:text-gray-400 list-disc ml-5">
                                        <li>Desarrollé endpoints aplicando el patrón MVC, mejorando la modularidad y mantenibilidad del
                                            sistema.</li>
                                        <li>Configuré los entornos de desarrollo y producción, integrando Jenkins y GitHub para CI/CD,
                                            automatizando pruebas y despliegues con pipelines.</li>
                                        <li>Implementé el modelo de ramificación de Git Flow para gestionar eficientemente el control de
                                            versiones y estructurar el desarrollo de funcionalidades, correcciones y lanzamientos.</li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                    </ul>
                    <ul className="timeline timeline-vertical timeline-snap-icon timeline-compact">
                        <li className="flex">
                            {/* Contenedor del icono y línea vertical */}
                            <div className="flex flex-col items-center mr-2">
                                <FaCheckCircle className="text-xl" />
                                <div className="flex-grow border-l-2 border-black mt-1 dark:border-white"></div> {/* Línea vertical */}
                            </div>

                            {/* Contenedor del contenido */}
                            <div className="py-3 text-start w-full">
                                <div className="text-sm font-black mb-1">Practicante de desarrollo de software</div>
                                <time className="font-mono italic mb-2 block">Noviembre 2023 - Diciembre 2023</time>
                                <div className="p-2  border border-black rounded-[1rem] dark:border-white">
                                    <div className="text-lg font-black"> CCAPA Tecnologias de Informacion SAC</div>
                                    <ul className="dark:text-gray-400 list-disc ml-5">
                                        <li>Responsable de atender los requerimientos de los clientes, implementando el patrón de diseño MVC
                                            para asegurar una estructura organizada del código y facilitar su mantenimiento</li>
                                        <li>Desarrollé funcionalidades para exportar datos en formatos Excel y PDF.</li>
                                        <li>Utilicé Asana para la colaboración con mi equipo, facilitando la organización de tareas, seguimiento
                                            de proyectos y mejora en la comunicación del equipo.</li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                    </ul>
                    <ul className="timeline timeline-vertical timeline-snap-icon timeline-compact">
                        <li className="flex">
                            {/* Contenedor del icono y línea vertical */}
                            <div className="flex flex-col items-center mr-2">
                                <FaCheckCircle className="text-xl" />
                                <div className="flex-grow border-l-2 border-black mt-1 dark:border-white"></div> {/* Línea vertical */}
                            </div>

                            {/* Contenedor del contenido */}
                            <div className="py-3 text-start w-full">
                                <div className="text-sm font-black mb-1">Practicante de programación</div>
                                <time className="font-mono italic mb-2 block">Junio 2023 - Noviembre 2024</time>
                                <div className="p-2  border border-black rounded-[1rem] dark:border-white">
                                    <div className="text-lg font-black"> MACBERRI SAC</div>
                                    <ul className="dark:text-gray-400 list-disc ml-5">
                                        <li>Implementé la autenticación de usuarios mediante las APIs de Google y Facebook, facilitando un
                                            inicio de sesión rápido y seguro.
                                        </li>
                                        <li>Desarrollé operaciones CRUD aplicando el patrón de diseño MVC en PHP nativo e implementé
                                            peticiones AJAX para realizar interacciones asíncronas con el servidor, mejorando la experiencia del
                                            usuario y la fluidez de la aplicación.</li>
                                        <li>Realicé la maquetación de una página web completa utilizando HTML, CSS y JavaScript.</li>

                                    </ul>
                                </div>
                            </div>

                        </li>
                    </ul>
                    <ul className="timeline timeline-vertical timeline-snap-icon timeline-compact">
                        <li className="flex">
                            {/* Contenedor del icono y línea vertical */}
                            <div className="flex flex-col items-center mr-2">
                                <FaCheckCircle className="text-xl" />
                                <div className="flex-grow border-l-2 border-black mt-1 dark:border-white"></div> {/* Línea vertical */}
                            </div>

                            {/* Contenedor del contenido */}
                            <div className="py-3 text-start w-full">
                                <div className="text-sm font-black mb-1">Administración</div>
                                <time className="font-mono italic mb-2 block">Agosto 2021 - Junio 2023</time>
                                <div className="p-2  border border-black rounded-[1rem] dark:border-white">
                                    <div className="text-lg font-black">APR Diseño & Construcciones SAC</div>
                                    <ul className="dark:text-gray-400 list-disc ml-5">
                                        <li>Coordiné la cadena de suministro, gestionando inventarios y optimizando rutas de transporte para
                                            asegurar el flujo eficiente de materiales, herramientas y equipos.
                                        </li>
                                        <li>Gestioné la creación de planillas y el cálculo de impuestos tanto de la empresa como de los
                                            empleados. Encargado de preparar declaraciones fiscales mensuales y anuales y de retener y
                                            depositar impuestos según las regulaciones de SUNAT.
                                        </li>
                                        <li>Mantuve actualizada la información de los empleados y gestioné la compensación salarial,
                                            garantizando el cumplimiento de las normativas laborales.</li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>


            </div>
        </main>

    );
};

export default About;
