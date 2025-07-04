import { CiLocationOn, CiMail, CiMap, CiPhone } from "react-icons/ci";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-backgroundLight dark:bg-backgroundDark text-primary dark:text-textLight">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-accent mb-8">
          Me contacter
        </h2>

        <p className="text-center text-sm md:text-base mb-10">
          Une idée de projet ? Une mission freelance ? Ou simplement discuter tech ? N’hésite pas à me contacter 👇
        </p>
        <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          <a href="mailto:cabrelprowo@gmail.com" className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300">
            <CiMail className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">  
             Email
            </span>
            <span className="text-sm text-secondary dark:text-accent">  
             cabrelprowo@gmail.com
            </span>
          </a>  
          <a href="tel:263 382 8170" className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300">
            <CiPhone className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">  
             Appelez-moi
            </span>
            <span className="text-sm text-secondary dark:text-accent">  
            +1 (263) 382 8170
            </span>
          </a>  
          <div className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300">
            <CiLocationOn className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">  
             Rencontrez-moi
            </span>
            <span className="text-sm text-secondary dark:text-accent">  
            Montréal, Canada
            </span>
          </div> 
          <a href="/" className="flex flex-col items-center gap-2 hover:scale-105 transition duration-300">
            <CiMap className="h-12 w-12 text-secondary dark:text-accent" />
            <span className="text-sm text-secondary dark:text-accent">  
             Site web
            </span>
            <span className="text-sm text-secondary dark:text-accent">  
            francel-prowo.com
            </span>
          </a>
        </div>
        <hr />
        <div className="text-center text-base md:text-3xl my-10 text-secondary dark:text-accent">
          Laissez un message
        </div>
        {/* Formulaire */}
        <form
          action="https://formspree.io/f/ton-code-formspree"
          method="POST"
          className="flex flex-col gap-6 bg-white dark:bg-[#1f2937] p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>

          <button
            type="submit"
            className="bg-primary dark:bg-secondary text-white py-3 px-6 rounded-full hover:scale-105 transition w-fit self-center"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}