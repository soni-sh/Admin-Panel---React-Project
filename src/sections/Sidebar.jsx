import React, { useEffect, useState } from 'react';
import { MdDashboard, MdOutlineMessage, MdLogout } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
    expanded: { width: "240px" },
    nonExpanded: { width: "70px" },
};

const navItems = [
    { name: "Dashboard", icon: MdDashboard },
    { name: "Analytics", icon: SiSimpleanalytics },
    { name: "Message", icon: MdOutlineMessage },
    { name: "Tools", icon: LiaToolsSolid },
    { name: "Settings", icon: IoSettingsSharp },
];

const Sidebar = () => {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(window.innerWidth > 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.section
            animate={isExpanded ? "expanded" : "nonExpanded"}
            variants={variants}
            className={`bg-gray-950 h-screen flex flex-col justify-between items-center transition-all duration-300`}
        >
            {/* Logo + Nav */}
            <div className="flex flex-col justify-center items-center w-full gap-8 p-4">
                {/* Logo */}
                {isExpanded ? (
                    <h1 className="text-red-600 font-bold text-3xl md:text-4xl">
                        DEBUG <span className="italic text-yellow-500">Entity</span>
                    </h1>
                ) : (
                    <h1 className="text-red-600 font-bold text-3xl">
                        D<span className="italic text-yellow-500">E</span>
                    </h1>
                )}

                {/* Navigation */}
                <div className="flex flex-col gap-5 w-full mt-5">
                    {navItems.map((item, index) => (
                        <div
                            key={item.name}
                            className={`flex items-center gap-4 cursor-pointer rounded-xl transition-all
                                ${activeNavIndex === index ? 'bg-yellow-500 text-black' : 'text-white'}
                                ${isExpanded ? 'px-4 py-2' : 'px-6 py-2 justify-center'}
                            `}
                            onClick={() => setActiveNavIndex(index)}
                        >
                            <div className="bg-yellow-300 text-black p-2 rounded-full">
                                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            {isExpanded && <span className="text-lg">{item.name}</span>}
                        </div>
                    ))}
                </div>
            </div>

          {/* Toggle Button */}
<div
    onClick={() => setIsExpanded(!isExpanded)}
    className={`bg-yellow-500 text-black p-2 rounded-full cursor-pointer mb-6 
        self-end transition-all duration-300
        ${isExpanded ? 'mr-4' : 'mr-2'}
    `}
>
    <FaArrowRight
        className={`transition-transform duration-300 ${!isExpanded ? 'rotate-180' : ''}`}
    />
</div>



            {/* Logout */}
            <div className="w-full px-4 mb-8">
                <div className="border-t border-slate-700 mb-3"></div>
                <div className="flex items-center gap-3 cursor-pointer text-white">
                    <MdLogout className="w-6 h-6" />
                    {isExpanded && <span className="text-lg">Logout</span>}
                </div>
            </div>
        </motion.section>
    );
};

export default Sidebar;
