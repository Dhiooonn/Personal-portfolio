import Image from "next/image";
import Icons from "@/app/components/icons"; // icons

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white">
        <nav className=" flex justify-between items-center bg-white px-16 py-7">
          <h1 className="text-teal-500 text-3xl font-bold font-fredoka">
            Dhion Nur Damanhuri
          </h1>
          <ul className="flex items-center gap-x-8">
            <li>
              <a
                href="#home"
                className="font-fredoka font-bold text-teal-500 hover:text-white hover:bg-teal-500 py-2 px-4 hover:rounded-xl"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-fredoka font-bold text-teal-500 hover:text-teal-500"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="font-fredoka font-bold text-teal-500 hover:text-teal-500"
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-fredoka font-bold text-teal-500 hover:text-teal-500"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section w-full px-16 flex justify-center items-center h-screen">
        <div className="text-center text-teal-500">
          <h1 className="text-9xl font-bold font-fredoka">
            DHION NUR DAMANHURI
          </h1>
          <p className="text-4xl font-poppins">
            UI/UX DESIGNER & FRONTEND DEVELOPER
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="aboutMe text-teal-500 h-screen flex items-center">
        <div className="w-full px-16 flex justify-between">
          <h2 className="w-1/5 text-5xl font-bold font-fredoka">About Me.</h2>
          <div className="content w-3/5 flex flex-col gap-y-6 text-3xl font-poppins">
            <p>
              Hi! I’m a UI/UX Designer and Frontend Developer who’s passionate
              about crafting seamless digital experiences. I blend creativity
              and logic to design user-centered interfaces, then bring them to
              life through clean, responsive code.
            </p>
            <p>
              With a strong eye for detail and a love for solving problems, I
              enjoy turning complex ideas into simple, intuitive designs.
              Whether it’s wireframing in Figma or coding in React, I always aim
              to create products that are not only beautiful, but also
              meaningful. Let’s create something impactful together.
            </p>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="works text-teal-500 flex flex-col gap-y-14 py-80">
        {/* content deskrision */}
        <div className="content px-16 flex justify-between">
          <h2 className="w-2/5 text-5xl font-bold font-fredoka">
            Recent Works.
          </h2>
          <p className="w-3/5 text-3xl font-poppins">
            A selection of my recent projects — combining intuitive design with
            clean, responsive code.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="projectShowcase px-16">
          <div className="grid grid-cols-3 gap-6">
            {/* Left */}
            <div className="col-span-2">
              <div className="w-full h-[754px] bg-red-400 bg-[url('/images/Mockup.webp')] bg-cover bg-center rounded-2xl"></div>
            </div>
            {/* Right */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[365px] bg-red-400 bg-[url('/images/Mockup.webp')] bg-cover bg-center rounded-2xl"></div>
              <div className="w-full h-[365px] bg-red-400 bg-[url('/images/Mockup.webp')] bg-cover bg-center rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 px-16 py-24 flex flex-col gap-y-16">
        <div className="content-footer flex flex-col gap-y-12 w-6xl">
          <h2 className="font-bold font-white text-5xl w-[750px] font-fredoka text-white">
            Interested in working together? Let’s connect
          </h2>
          <p className="text-3xl font-light font-poppins text-white">
            I’m open to freelance opportunities, collaborations, or just a
            friendly chat about design and development. Whether you have a
            project in mind or just want to say hi, feel free to reach out — I’d
            love to hear from you.
          </p>
          <h2 className="font-bold font-white text-5xl font-fredoka text-white">
            diondaman51@gmail.com
          </h2>
        </div>

        <div className="social-icons">
          <Icons />
        </div>
      </footer>
    </main>
  );
}
