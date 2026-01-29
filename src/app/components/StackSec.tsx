import Image from "next/image";
import { ICONS } from "../assets/images";

const skills = [
    { name: "Next.js", icon: ICONS.NEXT },
    { name: "React", icon: ICONS.REACT },
    { name: "TailwindCSS", icon: ICONS.TAILWIND },
    { name: "TypeScript", icon: ICONS.TS },
    { name: "JavaScript", icon: ICONS.JS },
    { name: "HTML5", icon: ICONS.HTML5 },
    { name: "CSS3", icon: ICONS.CSS3 },
];

const tools = [
    { name: "VS Code", icon: ICONS.VSCODE },
    { name: "Git", icon: ICONS.GIT },
    { name: "Figma", icon: ICONS.FIGMA },
    { name: "Framer", icon: ICONS.FRAMER },
    { name: "Illustrator", icon: ICONS.AI },
    { name: "Photoshop", icon: ICONS.PS },
];

export default function StackSec() {
    return (
        <section className="w-full min-h-max">
            <div className="w-full h-fit border-primary border-b border-t mb-20 grid grid-cols-[20%_35%_20%_1fr] items-center py-10">
                <div></div>
                <div className="w-full h-fit border-primary mt-10">
                    <div className="h-auto  text-primary gap-2 flex flex-col m-auto py-10">
                        <div className="flex ">
                            {/* <h3 className="text-5xl font-walkway mb-10 items-center mr-10">SKILLS</h3> */}
                            <div className="flex">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center w-24 group">
                                        <Image className="grayscale contrast-200 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110" src={skill.icon} alt={skill.name} width={72} height={72} />
                                        <p className="mt-4 opacity-0 group-hover:opacity-100">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {/* <h3 className="text-5xl font-walkway mb-10 items-center">TOOLS</h3> */}
                            <div className="flex">
                                {tools.map((tool) => (
                                    <div key={tool.name} className="flex flex-col items-center w-24 group">
                                        <Image className="grayscale contrast-200 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110" src={tool.icon} alt={tool.name} width={72} height={72} />
                                        <p className="mt-4 opacity-0 group-hover:opacity-100">{tool.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full left h-full flex flex-col justify-center py-10 text-primary text-right">
                    <h2 className="text-6xl font-bold mb-5">TECH STACK</h2>
                    <p className="text-lg uppercase">Flexible Developer</p>
                </div>
                <div></div>
            </div>
        </section>
    );
}