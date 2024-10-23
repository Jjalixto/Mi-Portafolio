import { FC } from "react";
import { FaJava, FaLinux } from "react-icons/fa";
import { SiAngular, SiBootstrap, SiCodeigniter, SiCss3, SiDocker, SiGit, SiGithubactions, SiHtml5, SiJavascript, SiJenkins, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiReact, SiRedis, SiSpring, SiSymfony, SiTailwindcss, SiTypescript } from "react-icons/si";

const Skills: FC = () => {
    return (
        <main className="container mx-auto pt-20 dark:bg-slate-800">
            <h1 className="text-3xl font-bold text-center dark:text-white mb-2">Mis Habilidades</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 items-center lg:grid-cols-2 gap-10 mb-[26px] dark:text-white">
                <div className="p-8 border rounded-lg flex flex-col items-center">
                    <p className="mt-2 font-mono text-2xl">Frontend</p>
                    <div className="grid grid-cols-5 gap-4">
                        {/* Frontend */}
                        <SiHtml5 className="w-8 h-8" title="HTML5" color="#E34F26" />
                        <SiCss3 className="w-8 h-8" title="CSS3" color="#1572B6" />
                        <SiJavascript className="w-8 h-8" title="JavaScript" color="#F7DF1E" />
                        <SiTypescript className="w-8 h-8" title="TypeScript" color="#3178C6" />
                        <SiReact className="w-8 h-8" title="React" color="#61DAFB" />
                        <SiNextdotjs className="w-8 h-8" title="Next.js" color="#000000" />
                        <SiTailwindcss className="w-8 h-8" title="Tailwind CSS" color="#38B2AC" />
                        <SiBootstrap className="w-8 h-8" title="Bootstrap" color="#7952B3" />
                        <SiAngular className="w-8 h-8" title="Angular" color="#DD0031" />
                    </div>
                </div>
                <div className="p-8 border rounded-lg flex flex-col items-center">
                    <p className="font-mono text-2xl">Backend</p>
                    <div className="grid grid-cols-3 gap-4 mb-2">
                        {/* Backend */}
                        <FaJava className="w-8 h-8" title="Java" color="#007396" />
                        <SiSpring className="w-8 h-8" title="Spring" color="#6DB33F" />
                        <SiLaravel className="w-8 h-8" title="Laravel" color="#FF2D20" />
                        <SiPhp className="w-8 h-8" title="PHP" color="#777BB4" />
                        <SiSymfony className="w-8 h-8" title="Symfony" color="#000000" />
                        <SiCodeigniter className="w-8 h-8" title="CodeIgniter" color="#EE4323" />
                    </div>
                </div>

                <div className="p-4 border rounded-lg flex flex-col items-center">
                    <p className="mt-2 font-mono text-2xl">Databases</p>
                    {/* Databases */}
                    <div className="grid grid-cols-3 gap-4">
                        <SiMysql className="w-8 h-8" title="MySQL" color="#4479A1" />
                        <SiPostgresql className="w-8 h-8" title="PostgreSQL" color="#336791" />
                        <SiMongodb className="w-8 h-8" title="MongoDB" color="#47A248" />
                        <SiRedis className="w-8 h-8" title="Redis" color="#DC382D" />
                    </div>
                </div>

                <div className="p-4 border rounded-lg flex flex-col items-center">
                    <p className="mt-2 font-mono text-2xl">DevOps & Tools</p>
                    <div className="grid grid-cols-3 gap-4">
                        {/* DevOps & Tools */}
                        <SiDocker className="w-8 h-8" title="Docker" color="#2496ED" />
                        <SiJenkins className="w-8 h-8" title="Jenkins" color="#D24939" />
                        <SiGit className="w-8 h-8" title="Git" color="#F05032" />
                        <SiGithubactions className="w-8 h-8" title="GitHub Actions" color="#2088FF" />
                        <FaLinux className="w-8 h-8" title="Linux" color="#FCC624" />
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Skills;