import React, { useEffect,useContext, useState, createContext, useRef } from "react";
import { Link } from 'react-scroll';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import ThemeSwitcher from './ThemeSwitcher.jsx'
import { ThemeContext } from "../App.jsx";

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useContext(ThemeContext);


  function handleProjectsClick() {
    window.location.href = '#projects';
  }
  function handleHomeClick() {
    window.scrollTo(0, 0);
  }
  function handleAboutClick() {
    window.location.href = '#about';
  }
  function handleContactClick() {
    window.location.href = '#contact';
  }

    return (
      <div id="home" className={`sticky top-0 z-10 ${theme === 'dark' ? 'dark' : ''}  bg-white dark:bg-neutral-800/90 backdrop-blur-sm rounded-3xl`} >
        <header className="header">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <div className="flex lg:flex-1 ">
        <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
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
        <button onClick={handleHomeClick} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee ">
              Home
          </button>
          <button onClick={handleAboutClick} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee ">
              About
          </button>
          
          <button onClick={handleProjectsClick} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee">
              Projects
          </button>
          <button onClick={handleContactClick} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee">
              Contact
          </button>
          
        </PopoverGroup>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeSwitcher/>
        </div>

        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-zinc-900  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex  justify-end">
           
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="m-2 rounded-md p-2 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>                 

          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button onClick={handleHomeClick} className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee">
                    Home
                </button>
                <button onClick={handleAboutClick} className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee">
                    About
                </button>
                
                <button onClick={handleProjectsClick} className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee">
                    Projects
                </button>
                <button onClick={handleContactClick} className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-zinc-800 font-abeezee">
                    Contact
                </button>
               
              </div>
              <div className="py-6">
             <ThemeSwitcher/>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </div>
    );
  }

export default Home