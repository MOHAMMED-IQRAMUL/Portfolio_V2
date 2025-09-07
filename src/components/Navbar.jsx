import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/useThemeStore.js';
import { Menu, X } from 'lucide-react';
import { getTheme } from '../utils/getTheme.js';
import { scrollToId } from '../constant/functions.js';

const Navbar = () => {
    const { theme, setTheme } = useThemeStore();
    const [Date_Time, set_Date_Time] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { label: 'About Me', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };
            const formattedDate = date.toLocaleDateString('en-US', options);
            set_Date_Time(formattedDate);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="w-full px-4 md:px-6 py-3 flex flex-wrap justify-between items-center bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 sticky top-0 z-50 font-mono">
            <div className="flex gap-2 items-center">
                <div className="bg-red-600 w-4 h-4 rounded-full cursor-pointer ring-1 ring-white/20" onClick={() => setTheme('red')} />
                <div className="bg-orange-400 w-4 h-4 rounded-full cursor-pointer ring-1 ring-white/20" onClick={() => setTheme('orange')} />
                <div className="bg-green-600 w-4 h-4 rounded-full cursor-pointer ring-1 ring-white/20" onClick={() => setTheme('green')} />
                <div className="bg-white w-4 h-4 rounded-full cursor-pointer ring-1 ring-white/20" onClick={() => setTheme('white')} />
            </div>

            {/* Admin + Time */}
            <div className="hidden md:flex flex-col text-white text-[10px] md:text-xs">
                <p>Admin: MOHAMMED IQRAMUL</p>
                <p>Time: {Date_Time}</p>
            </div>

            <div className="md:hidden flex text-white text-xs ">
                <p>Admin: MOHAMMED IQRAMUL</p>
            </div>


            <div className="md:hidden text-white">
                {menuOpen ? (
                    <X size={24} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
                ) : (
                    <Menu size={24} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
                )}
            </div>


            <div className={`hidden md:flex gap-3 md:gap-5 ${getTheme(theme)}`}>
                {menuItems.map(({ label, id }) => (
                    <div
                        key={id}
                        onClick={() => scrollToId(id)}
                        className="cursor-pointer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className={`border px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm ${getTheme(theme)}`}
                        >
                            {label}
                        </motion.div>
                    </div>
                ))}
            </div>

            {menuOpen && (
                <div className="w-full mt-4 flex flex-col gap-2 md:hidden text-white">
                    <div className="text-xs">
                        <p>Time: {Date_Time}</p>
                    </div>
                    {menuItems.map(({ label, id }) => (
                        <div
                            key={id}
                            onClick={() => scrollToId(id)}
                            className="cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className={`border p-2 rounded-lg bg-white/5 backdrop-blur-sm ${getTheme(theme)}`}
                            >
                                {label}
                            </motion.div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
