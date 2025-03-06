import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Footer } from "@/components/ui/footer-section";
 
import Logo_img from '../Pictures/logo.png';
import Pic1 from '../Pictures/Pic_1.jpeg';
import Pic2 from '../Pictures/Pic_2.jpg';
import Pic3 from '../Pictures/Pic_3.jpg';
import Pic4 from '../Pictures/Pic_4.jpeg';
import Pic5 from '../Pictures/Pic_5.jpeg';

import BG1 from "../Pictures/BG_1.jpg";
import BG2 from "../Pictures/BG_2.jpg";
import BG3 from "../Pictures/BG_3.jpg";
import BG4 from "../Pictures/BG_4.jpg";
import BG5 from "../Pictures/BG_5.jpg";

import BackgroundImage from "../Pictures/BG_10.jpg"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function marketing () {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

      const images = [
        BG1,
        BG2,
        BG3,
        BG4,
        BG5,
      ];  

    return(
        <div className="bg-gray-100 min-h-screen">
            <nav class="bg-white w-full z-20">
                <div class=" flex items-center justify-between  p-4">
                    <a href="h" class="flex items-center space-x-3">
                        <img src={Logo_img} class="h-10" alt="Logo" />
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Get started</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#features" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Features</a>
                            </li>
                            <li>
                                <a href="#faq" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">FAQ</a>
                            </li>
                            <li>
                                <a href="#contact" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <AuroraBackground className="h-full w-full">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="relative flex flex-col gap-4 w-full px-4 md:px-10"
                >
                    <section className="flex flex-col md:flex-row text-center md:text-left items-center justify-center p-6 md:p-10 gap-10 md:gap-16">
                        <div className="md:w-[50%] lg:w-[40%">
                            <h1 className="text-[clamp(28px,4vw,50px)] font-bold font-f1">Say Goodbye <span role="img" aria-label="wave">👋</span> to <br /> Grammar Mistakes!</h1>
                            <p className="mt-4 text-gray-200 text-[clamp(10px,4vw,20px)]">
                                Struggling with Sinhala grammar? Our advanced AI-powered tool helps you identify mistakes, 
                                understand corrections, and improve your writing effortlessly.
                            </p>
                        </div>
                        <div className="flex justify-center md:w-[50%] lg:w-[40%] p-4">
                            <Carousel
                                plugins={[plugin.current]}
                                onMouseEnter={plugin.current.stop}
                                onMouseLeave={plugin.current.reset}
                                
                            >
                                <CarouselContent>
                                    {images.map((image, index) => (
                                        <CarouselItem key={index}  className="flex justify-center">
                                            <div>
                                                <Card>
                                                    <CardContent className="flex items-center justify-center w-full h-full">
                                                        <img
                                                            src={image}
                                                            alt={`Slide ${index + 1}`}
                                                            className="max-w-full h-auto object-cover"
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </section>
                </motion.div>
            </AuroraBackground>
        
        <section id="features" className="p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold font-f2">Correcting Grammatical Errors</h2>
                <p className="mt-2 text-gray-600">
                    Automatically detects and corrects grammatical mistakes in Sinhala text. Highlights errors and provides suggestions for improvement.
                </p>
                <img src={Pic2} alt="Correction" className="mt-4 ml- w-32 " />
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold font-f2">Suggest Similar Words</h2>
                <p className="mt-2 text-gray-600">
                    Provides alternative words with similar meanings to enhance vocabulary. Helps refine writing by suggesting more suitable words.
                </p>
                <img src={Pic3} alt="Suggestion" className="mt-4 w-32" />
            </div>
        </section>
        <section className="p-12">
            <h2 className="text-4xl font-bold text-purple-600 text-center">How It Works?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-10 ml-20 mr-20 ">
                <div className="justify-items-center ">
                    <h3 className="font-semibold justify-start">1. Enter your text</h3>
                    <p>Type or paste your Sinhala text into the input box.</p>
                    <img src={Pic4} alt="Step 1" className="mt-4 max-w-90 rounded-lg border-4 border-gray-400" />
                </div >
                <div className="justify-items-center ">     
                    <h3 className="font-semibold">2. AI checks your writing</h3>
                    <p>Our tool analyzes grammatical errors and suggests a correct version.</p>
                    <img src={Pic1} alt="Step 2" className="mt-4 max-w-90 rounded-lg border-4 border-gray-400" />
                </div>
                <div className="justify-items-center ">
                    <h3 className="font-semibold">3. Get similar word suggestions</h3>
                    <p>For highlighted words, we provide alternative word choices to refine your writing.</p>
                    <img src={Pic5} alt="Step 3" className="mt-4 max-w-90 rounded-lg border-4 border-gray-400" />
                </div>
                <div className="justify-items-center ">
                    <h3 className="font-semibold">4. Copy or Download</h3>
                    <p>Copy the improved text or download it for later use.</p>
                    <div className="text-center mt-20">
                        <div className="bg-purple-500 text-white w-60 py-2 rounded-lg text-lg hover:bg-purple-600">Get started</div>
                    </div>
                </div>
            </div>
            
        </section>
        <section id="faq" className="p-12 bg-blue-100">
            <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-6 max-w-2xl mx-auto">
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">What is this tool and how does it work?</summary>
                    <p className="text-gray-600 mt-2 ml-10">Vyakarana is an AI powered Sinhala grammar checker and word suggestion tool. 
                        It detects grammar mistakes, provides corrections, and offers alternative word suggestions. Simply paste, type or 
                        upload your text and Vyakarana will analyze it to help improve your Sinhala writing.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Is this tool free to use?</summary>
                    <p className="text-gray-600 mt-2 ml-10">Yes, Vyakarana offers free grammar checking and word suggestions. 
                        However, we may introduce premium features in the future for advanced corrections and additional functionalities.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Do I need to create an account to use this?</summary>
                    <p className="text-gray-600 mt-2 ml-10">No, you can use Vyakarana without creating an account. However, signing up may unlock additional features, such as saving corrections and giving feedback.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Is my data secure and private?</summary>
                    <p className="text-gray-600 mt-2 ml-10">Yes, Vyakarana prioritizes user privacy and data security. We do not store or share any text that users input into the tool. All processing happens securely, 
                        and we follow strict data protection policies to ensure your information remains private.</p>
                </details>
            </div>
        </section>
        <Footer />
    </div>
    );
}

export default marketing;