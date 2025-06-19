// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaDiscord, FaEnvelope, FaHackerrank,
} from 'react-icons/fa';
import { SiCodeforces, SiLeetcode, SiGeeksforgeeks, SiCodio, SiHeadlessui } from 'react-icons/si';

const links = [
  { icon: <FaGithub />, url: 'https://github.com/your-username', color: 'text-white', name: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/your-username', color: 'text-blue-500', name: 'LinkedIn' },
  { icon: <SiLeetcode />, url: 'https://leetcode.com/your-username', color: 'text-orange-400', name: 'LeetCode' },
  { icon: <FaEnvelope />, url: 'mailto:yourmail@gmail.com', color: 'text-red-500', name: 'Gmail' },
  { icon: <FaDiscord />, url: 'https://discordapp.com/users/your-id', color: 'text-indigo-400', name: 'Discord' },
  { icon: <SiCodeforces />, url: 'https://codeforces.com/profile/your-username', color: 'text-blue-300', name: 'Codeforces' },
  { icon: <SiGeeksforgeeks />, url: 'https://auth.geeksforgeeks.org/user/your-username', color: 'text-green-500', name: 'GFG' },
  { icon: <FaHackerrank />, url: 'https://www.hackerrank.com/your-username', color: 'text-green-600', name: 'HackerRank' },
  { icon: <SiCodio />, url: 'https://codolio.com/your-username', color: 'text-pink-400', name: 'Codolio' },
  { icon: <SiHeadlessui />, url: 'https://headstarter.com/your-username', color: 'text-purple-400', name: 'Headstarter' },
];

export const  ContactSection = () => {
  return (
    <section className="bg-black py-10">
      <h2 className="text-white text-3xl font-bold text-center mb-8">Let's Connect</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center px-6">
        {links.map(({ icon, url, color, name }, idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center transition-transform duration-300 hover:scale-110`}
          >
            <div className={`text-4xl ${color}`}>{icon}</div>
            <span className="text-white text-sm mt-2">{name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
