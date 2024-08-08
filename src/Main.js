import React from 'react';
import './Main.css';
import ServicesSection from './ServicesSection';
import ImageCarousel from './ImageCarousel';
import Cards from './Cards';
 import Details from './Details';
 import Footer from './Footer';
 import IndustryList from './IndustryList'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-500 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black p-4 drop-shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="favicon-32x32xl.png" alt="Logo" className="w-8 h-8 logo-spin" />
            <a href="/" className="text-white text-2xl font-bold">IT_Support</a>
            
            <div className="hidden md:flex space-x-4 ml-8 ps-5">
              <a href="/What_we_do" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                What we do
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="/Who_are_we" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                Who are we
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="/Insight" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                Insight
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="/Careers" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="/Newsroom" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                Newsroom
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="/Investor" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                Investor
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="/Contact_us" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                Contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="/Worldwide" className="relative group text-white hover:text-gray-400 transition-colors duration-300">
                Worldwide
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            
          <div>
            
<form class="max-w-md mx-auto s">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

          </div>
          </div>
        </div>
      </nav>
      <div>
        <ImageCarousel />
      </div>
      <div>
        <ServicesSection />
      </div>
      <div>
       <IndustryList/>
       </div>
      <div>
        <Cards />
      </div>
      <div>
        <Details/>
      </div>
      <Footer/>
      </div>
       
  );
};

export default Home;




























