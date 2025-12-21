import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const SECTIONS = [
    { id: 'hero', label: 'Intro' },
    { id: 'corporate', label: 'Professional' },
    // { id: 'creative', label: 'Creative' },
    { id: 'connect', label: 'Connect' }
];

const Navigation: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null, // viewport
                threshold: 0.51 // Trigger when >50% visible
            }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6">
            {SECTIONS.map(({ id, label }) => (
                <div 
                    key={id}
                    className="group flex flex-row-reverse items-center gap-4 cursor-pointer"
                    onClick={() => scrollToSection(id)}
                >
                    {/* Dot */}
                    <div className="relative flex items-center justify-center w-4 h-4">
                        <motion.div 
                            className={clsx(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                activeSection === id ? "bg-white scale-125" : "bg-white/40 group-hover:bg-white/80"
                            )}
                            layoutId="activeDot"
                        />
                         {/* Ring effect for active */}
                         {activeSection === id && (
                             <motion.div 
                                className="absolute w-4 h-4 border border-white rounded-full"
                                layoutId="activeRing"
                                transition={{ duration: 0.3 }}
                             />
                         )}
                    </div>

                    {/* Label (Shows on hover or active) */}
                    <span className={clsx(
                        "text-sm font-medium tracking-wider transition-all duration-300",
                        activeSection === id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 group-hover:opacity-70 group-hover:translate-x-0"
                    )}>
                        {label}
                    </span>
                </div>
            ))}
        </nav>
    );
};

export default Navigation;
