import React, {
  useEffect,
  useContext,
  useState,
  createContext,
  useRef,
} from "react";
import { Link } from "react-scroll";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { ThemeContext } from "../App.jsx";
import { motion } from "framer-motion";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  function handleProjectsClick() {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    window.location.href = "#projects";
  }
  function handleHomeClick() {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    window.scrollTo(0, 0);
  }
  function handleAboutClick() {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    window.location.href = "#about";
  }
  function handleContactClick() {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    window.location.href = "#contact";
  }

  return (
    <div
      id="home"
      className={`sticky top-4 z-10 ${
        theme === "dark" ? "dark" : ""
      }  bg-gray-100/70 dark:bg-neutral-800/70 backdrop-blur-sm rounded-3xl`}
    >
      <header className="header">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        >
          <div className="flex lg:flex-1 ">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=violet&shade=500 dark:https://tailwindui.com/plus/img/logos/mark.svg?color=violet&shade=600"
              className="h-8 w-auto"
            />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-16">
            <motion.button
              onClick={handleHomeClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-800 font-abeezee "
            >
              Home
            </motion.button>
            <motion.button
              onClick={handleAboutClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-800 font-abeezee "
            >
              About
            </motion.button>

            <motion.button
              onClick={handleProjectsClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-800 font-abeezee "
            >
              Projects
            </motion.button>
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-zinc-800 font-abeezee "
            >
              Contact
            </motion.button>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ThemeSwitcher />
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-zinc-900  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex  justify-end">
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="m-2 rounded-md p-2 text-gray-700 dark:text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </motion.button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-8 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 px-6">
                  <motion.button
                    onClick={handleHomeClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee"
                  >
                    Home
                  </motion.button>
                  <motion.button
                    onClick={handleAboutClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee"
                  >
                    About
                  </motion.button>

                  <motion.button
                    onClick={handleProjectsClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee"
                  >
                    Projects
                  </motion.button>
                  <motion.button
                    onClick={handleContactClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee"
                  >
                    Contact
                  </motion.button>
                </div>
                <div className="py-6 px-6">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
