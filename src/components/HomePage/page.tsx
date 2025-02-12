import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#175d69] to-[#330c43] text-white">
    
    <header className="fixed top-0 left-0 w-full bg-transparent z-10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <h2 className="text-2xl font-bold">
          <a  href="https://github.com/rovshanalizada7" target="blank">RovshanAlizada</a>
        </h2>

        
        <ul className="hidden md:flex space-x-6">
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[#47b2e4] transition">
                {item}
              </a>
            </li>
          ))}
        </ul>

       
        <div className="hidden md:flex space-x-6">
          <a href="/auth/login" className="hover:text-[#47b2e4]">Sign In</a>
          <a href="/auth/register" className="border border-white px-4 py-2 rounded-md hover:bg-[#47b2e4] transition">Sign Up</a>
        </div>

     
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          <IoMdMenu />
        </button>
      </nav>

   
      {isOpen && (
        <ul className="absolute left-0 top-[60px] w-full bg-[#175d69] flex flex-col items-center space-y-4 p-6">
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-[#47b2e4] transition">
                {item}
              </a>
            </li>
          ))}
          <div className="flex flex-col space-y-3">
            <a href="/auth/login" className="hover:text-[#47b2e4]">Sign In</a>
            <a href='/auth/register' className="border border-white px-4 py-2 rounded-md hover:bg-[#47b2e4] transition">Sign Up</a>
          </div>
        </ul>
      )}
    </header>

    
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-16">
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Frontend Development</h2>
        <p className="text-gray-300 mb-6">
          Join us in the exciting world of programming and turn your ideas into reality. Unlock the world of endless possibilities - 
          learn to code and shape the digital future with us.
        </p>
        <div className="space-x-4">
          <a href="#" className="bg-[#47b2e4] px-6 py-3 rounded-md font-semibold">Join Now</a>
          <a href="#" className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-[#47b2e4] transition">
            Learn More
          </a>
        </div>
      </div>

      
      <div className="w-full md:w-1/2">
        <img
          src="https://w7.pngwing.com/pngs/51/881/png-transparent-programmer-source-code-computer-computer-computer-program-computer-programming.png"
          alt="hero image"
          className="w-full"
        />
      </div>
    </section>
  </div>
  );
};
