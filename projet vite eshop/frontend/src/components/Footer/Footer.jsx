import React from 'react';
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pd-20 pt-5">
                    {/* Détails */}
                    <div className='py-8 px-4'>
                        <a href="#" 
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Eshop
                        </a>
                        <p className='text-gray-600 lg:pr-24 pt-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Aut et quae, at incidunt debitis rerum harum.
                            Necessitatibus sed ipsum commodi.
                        </p>
                        <p className='text-gray-500 mt-4'>
                            Made with ❤️ by Ange Christian
                        </p>
                        <a href="https://github.com/crimi5361"
                            target="_blank"
                            className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                            Visit my GitHub
                        </a>
                    </div>
                    {/* Liens du pied de page */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left md-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/*second col links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left md-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Footer Socials */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                     <div>
                       <div className="flex items-center gap-3">
                         <FaLocationArrow />
                        <p>Abidjan, Côte d'Ivoire</p>
                        </div>
                     <div className='flex items-center gap-3'>
                         <FaMobileAlt />
                    <p>+225 0160756069</p>
                </div>
            </div>
        </div>

                    </div>
                </div>
            </div>
        
    );
};

export default Footer;
