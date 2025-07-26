import Image from "next/image";
import Icons from "@/app/components/icons"; // icons
import Navbar from "@/app/components/Navbar"; // Navbar
import Butterfly from "@/app/components/customerService";

export default function Home() {
  return (
    <main>
      {/* Kupu-Kupu */}
      <Navbar />
      <Butterfly />
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section w-full px-4 sm:px-8 md:px-16 flex justify-center items-center h-screen"
      >
        <div className="text-center text-teal-500">
          <h1 className="text-6xl lg:text-7xl xl:text-9xl font-bold font-fredoka">
            DHION NUR DAMANHURI
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-poppins">
            UI/UX DESIGNER & FRONTEND DEVELOPER
          </p>
        </div>
      </section>
      {/* About Me Section */}
      <section
        id="about"
        className="#aboutMe text-teal-500 min-h-screen flex items-center py-16"
      >
        <div className="w-full px-4 md:px-16 flex flex-col md:flex-row md:justify-between gap-8">
          <h2 className="text-3xl lg:text-5xl font-bold font-fredoka md:w-1/5 text-center md:text-left">
            About Me.
          </h2>
          <div className="content flex flex-col gap-y-6 text-center lg:text-start text-lg md:text-2xl lg:text-3xl font-poppins md:w-3/5">
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
      <section
        id="work"
        className="text-teal-500 flex flex-col gap-y-14 my-50 px-4 lg:px-16"
      >
        {/* content deskrision */}
        <div className="content flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <h2 className="lg:w-2/5 text-3xl lg:text-5xl font-bold font-fredoka md:w-1/5 text-center md:text-left">
            Recent Works.
          </h2>
          <p className="lg:w-3/5 text-lg text-center lg:text-start md:text-2xl lg:text-3xl font-poppins">
            A selection of my recent projects combining intuitive design with
            clean, responsive code.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="projectShowcase">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6">
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
      <footer
        id="contact"
        className="bg-gray-800 px-4 lg:px-16 py-24 flex flex-col gap-y-12 lg:gap-y-16"
      >
        <div className="content-footer flex flex-col gap-y-8 lg:gap-y-12 lg:w-6xl">
          <h2 className="font-fredoka font-bold font-white text-2xl lg:text-5xl lg:w-[750px]">
            Interested in working together? Let’s connect
          </h2>
          <p className="text-lg lg:text-3xl font-light font-poppins">
            I’m open to freelance opportunities, collaborations, or just a
            friendly chat about design and development. Whether you have a
            project in mind or just want to say hi, feel free to reach out — I’d
            love to hear from you.
          </p>
          <h2 className="font-fredoka font-bold font-white text-2xl lg:text-5xl">
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
