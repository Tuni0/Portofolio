import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


function Contact() {

  function handleGithub() {
    window.open("https://github.com/Tuni0")
  }

  function handleLinkedIn() {
    window.open("https://www.linkedin.com/in/wiktor-mazepa-812199338/")
  }
    return (
      <div id="contact" className="flex justify-end">
         <button
            type="button"
            onClick={() => handleGithub()}
            className="-m-2.5  p-2.5 text-gray-700 mr-4 "
          >
            <BsGithub className="text-4xl text-gray-900 dark:text-white" />
        </button>
        <button
            type="button"
            onClick={() => handleLinkedIn()}
            className="-m-2.5  p-2.5 text-gray-700 "
          >
        <BsLinkedin className="text-4xl text-gray-900 dark:text-white" />
        </button>
      </div>
    );
}

export default Contact