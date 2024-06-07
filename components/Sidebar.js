import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Kuka olen", to: "/#about", id: 2 },
  { name: "Portfolio", to: "/#portfolio", id: 3 },
  { name: "Ota yhteyttä", to: "/#contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
    y: -25,
    transition: 0.6,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: 0.6,
  },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`sidebar-container fixed right-0 top-0 grid w-full h-full z-20 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-1000 ease-in-out`}
    >
      <button
        className="absolute top-2 right-2 p-2 text-gray-300 hover:text-white"
        onClick={toggle}
      >
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul className="sidebar-nav leading-loose text-4xl flex justify-center items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.li key={id} variants={itemVariants}>
                    <a href={to} onClick={toggle}>
                      {name}
                    </a>
                  </motion.li>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </ul>
      <div className="flex justify-center items-end gap-5 pb-10 text-base">
        <a href="https://github.com/psivonen" target="_blank" className="flex items-center gap-1">
          Github <ArrowUpRightIcon className="h-5 w-5"/>
        </a>
        <a href="https://www.behance.net/petrasivonen" target="_blank" className="flex items-center gap-1">
          Bēhance <ArrowUpRightIcon className="h-5 w-5"/>
        </a>
        <a href="https://www.instagram.com/petrasivonen/" target="_blank" className="flex items-center gap-1">
          Instagram <ArrowUpRightIcon className="h-5 w-5"/>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
