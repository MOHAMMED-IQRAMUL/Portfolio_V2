// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaDiscord, FaEnvelope, FaHackerrank,
} from 'react-icons/fa';
import { SiCodeforces, SiLeetcode, SiGeeksforgeeks, SiCodio, SiHeadlessui } from 'react-icons/si';

const links = [
  { icon: <FaGithub />, url: 'https://github.com/mohammed-iqramul', name: 'GitHub', gradient: 'from-[#6e45e2] to-[#88d3ce]' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/mohammed-iqramul', name: 'LinkedIn', gradient: 'from-[#0e76a8] to-[#00a0dc]' },
  { icon: <SiLeetcode />, url: 'https://leetcode.com/mohammed-iqramul', name: 'LeetCode', gradient: 'from-[#ffa116] to-[#f2c94c]' },
  { icon: <FaEnvelope />, url: 'mailto:mohdiqramul2468@gmail.com', name: 'Gmail', gradient: 'from-[#ea4335] to-[#fb8c00]' },
  { icon: <FaDiscord />, url: 'https://discord.com/users/1218169520032710708', name: 'Discord', gradient: 'from-[#5865F2] to-[#7289DA]' },
  { icon: <SiCodeforces />, url: 'https://codeforces.com/profile/mohammed-iqramul', name: 'Codeforces', gradient: 'from-[#1f8acb] to-[#6aa0f5]' },
  { icon: <SiGeeksforgeeks />, url: 'https://www.geeksforgeeks.org/user/rapp7o1o', name: 'GFG', gradient: 'from-[#00a651] to-[#2ecc71]' },
  { icon: <FaHackerrank />, url: 'https://www.hackerrank.com/mohammed_iqramul', name: 'HackerRank', gradient: 'from-[#2ec866] to-[#16a34a]' },
  { icon: <SiCodio />, url: 'https://codolio.com/profile/mohammed-iqramul', name: 'Codolio', gradient: 'from-[#ec4899] to-[#f472b6]' },
  { icon: <SiHeadlessui />, url: 'https://app.headstarter.co/profile/mohammed-iqramul', name: 'Headstarter', gradient: 'from-[#8b5cf6] to-[#a78bfa]' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 20 },
  },
};

export const ContactSection = () => {
  return (
    <section className="bg-transparent py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-8">Let's Connect</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center"
        >
          {links.map(({ icon, url, name, gradient }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              variants={item}
              whileHover={{ y: -4, scale: 1.03, rotate: -0.5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center bg-white/5 hover:bg-white/10 rounded-xl px-4 py-5 w-full max-w-[180px] border border-white/10 transition-colors"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${gradient} grid place-items-center shadow-inner ring-1 ring-white/10 transition-shadow group-hover:ring-white/20`}>
                <div className="text-white text-3xl md:text-4xl drop-shadow-md">
                  {icon}
                </div>
              </div>
              <span className="text-white/90 text-sm mt-3 group-hover:text-white transition-colors">{name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
