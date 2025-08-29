import Navbar from "@/app/components/Navbar"; // Navbar
import Footer from "@/app/components/Footer"; // Footer
import Butterfly from "@/app/components/customerService"; // customer service
import FadeInWhenVisible from "./components/Animasi/FadeInWhenVisible"; // animasi fadeIn
import AutoScrollSkillAnimation from "@/app/components/Skill"; // animasi icon sroll skill
import ButtonLihatSelengkapnya from "./components/BtnLihatSelengkapnya"; // button lihat selengkapnya

export default function Home() {
  return (
    <main>
      <Navbar />
      <Butterfly />
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section w-full px-4 sm:px-8 md:px-16 flex justify-center items-center h-screen"
      >
        <FadeInWhenVisible>
          <div className="text-center text-teal-500">
            <h1 className="text-6xl lg:text-7xl xl:text-9xl font-bold font-fredoka">
              DHION NUR DAMANHURI
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-poppins">
              UI/UX DESIGNER & FRONTEND DEVELOPER
            </p>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="#aboutMe text-teal-500 min-h-screen flex items-center py-16"
      >
        <FadeInWhenVisible>
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
                Whether it’s wireframing in Figma or coding in React, I always
                aim to create products that are not only beautiful, but also
                meaningful. Let’s create something impactful together.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Skill Section */}
      <section id="skill" className="flex flex-col gap-y-14 py-10">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold font-fredoka lg:text-5xl text-center text-teal-500">
            Skill
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <AutoScrollSkillAnimation />
        </FadeInWhenVisible>
      </section>

      {/* Works Section */}
      <section
        id="work"
        className="text-teal-500 flex flex-col gap-y-14 my-50 px-4 lg:px-16"
      >
        {/* content deskrision */}
        <FadeInWhenVisible>
          <div className="content flex flex-col lg:flex-row lg:justify-between items-center gap-8">
            <h2 className="lg:w-2/5 text-3xl lg:text-5xl font-bold font-fredoka md:w-1/5 text-center md:text-left">
              Recent Works.
            </h2>
            <p className="lg:w-3/5 text-lg text-center lg:text-start md:text-2xl lg:text-3xl font-poppins">
              A selection of my recent projects combining intuitive design with
              clean, responsive code.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          {/* Project Showcase */}
          <div className="projectShowcase">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6">

              {/* Left */}
              <div className="col-span-2">
                <div className="relative group w-full h-[754px] bg-[url('/images/Mockup.webp')] bg-cover bg-center rounded-2xl overflow-hidden shadow-lg">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/80 via-teal-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-2xl"></div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white 
                    translate-y-6 opacity-0 
                    group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-500 ease-in-out">
                    <h3 className="text-5xl font-bold font-poppins">Dia Check</h3>
                    <p className="text-base mt-2 text-gray-200 font-poppins">
                      Dia Check is a health monitoring application designed to help users track their health conditions conveniently. The app features an interactive interface, is easy to understand, and provides a comfortable user experience.
                    </p>
                  </div>
                </div>
              </div>


              {/* Right */}
              <div className="flex flex-col gap-6">
                {/* Project 1 */}
                <div className="relative group w-full h-[365px] bg-[url('/images/Furniture.webp')] bg-cover bg-center rounded-2xl overflow-hidden">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white 
                      translate-y-6 opacity-0 
                      group-hover:translate-y-0 group-hover:opacity-100 
                      transition-all duration-500 ease-in-out">
                      <h3 className="text-5xl font-bold font-poppins">Furniture</h3>
                      <p className="text-base mt-2 text-gray-200 font-poppins">
                        Furniture is a UI/UX project with a modern minimalist concept that showcases furniture catalogs, exclusive collections, and interior design showcases. The design is responsive, clean, and easy to use to provide a comfortable shopping experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="relative group w-full h-[365px] bg-[url('/images/NFT.webp')] bg-cover bg-center rounded-2xl overflow-hidden">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white 
                      translate-y-6 opacity-0 
                      group-hover:translate-y-0 group-hover:opacity-100 
                      transition-all duration-500 ease-in-out">
                      <h3 className="text-5xl font-bold font-poppins">NFT Web 3</h3>
                      <p className="text-base mt-2 text-gray-200 font-poppins">
                        NebulaNFT is a Web3 frontend project with a modern and responsive design to showcase and explore exclusive NFT collections. The website features an interactive interface, including artist, activity, and news pages, making it suitable as a digital asset showcase platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ButtonLihatSelengkapnya />
        </FadeInWhenVisible>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
