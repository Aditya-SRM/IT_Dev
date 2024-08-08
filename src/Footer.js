import React from 'react';
import './Main.css';


function Footer() {
    return (
<footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-3 text-center mb-8">
            <br/>
            <br/>
            <br/>
            <h2 className="text-5xl text-white mb-4">Join our team.</h2>
            <h2 className="text-xl text-white mb-4">Realize your potential.</h2>
            
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-transform duration-300 ease-in-out">
  Explore IT_Support Careers
</button>

            <br/><br/><br/>
            <hr className="custom-hr" />
          </div>
          
          <div className="col-span-1 lg:col-span-3 text-center mb-8">
            <h1 className="text-xl text-white flex justify-start pl-4 mb-4">SOCIAL</h1>
            <h2 className="text-5xl text-white flex justify-start pl-4 mb-4">Follow us for the latest updates</h2>
            <br/>
            <br/>
            <div className="flex justify-center space-x-6">
              <a href="#facebook" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook"></i> <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-4 h-4 inline-block mr-2"/>Facebook
              </a>
              
              <a href="#twitter" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i><img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" className="w-4 h-4 inline-block mr-2"/> 
                Twitter
                
              </a>
              <a href="#youtube" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-youtube"></i>  <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="w-4 h-4 inline-block mr-2"/> 
                YouTube
              </a>
              <a href="#instagram" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>   <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-4 h-4 inline-block mr-2"/> 
                Instagram
              </a>
              <a href="#linkedin" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin"></i>   <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-4 h-4 inline-block mr-2"/> 
                LinkedIn
              </a>
             
            </div>
            <hr className="custom-hr" />
          </div>
          
          <div>
  <h2 className="text-lg text-white mb-4 pl-4">Industries</h2>
  <ul className="space-y-4 pl-4">
    <li><a href="#banking" className="hover:text-white transition-colors duration-300">Banking</a></li>
    <li><a href="#capital-markets" className="hover:text-white transition-colors duration-300">Capital Markets</a></li>
    <li><a href="#consumer-goods" className="hover:text-white transition-colors duration-300">Consumer Goods and Distribution</a></li>
    <li><a href="#communications" className="hover:text-white transition-colors duration-300">Communications, Media and Information Services</a></li>
    <li><a href="#energy" className="hover:text-white transition-colors duration-300">Energy, Resources and Utilities</a></li>
    <li><a href="#healthcare" className="hover:text-white transition-colors duration-300">Healthcare</a></li>
    <li><a href="#high-tech" className="hover:text-white transition-colors duration-300">High Tech</a></li>
    <li><a href="#insurance" className="hover:text-white transition-colors duration-300">Insurance</a></li>
    <li><a href="#life-sciences" className="hover:text-white transition-colors duration-300">Life Sciences</a></li>
    <li><a href="#manufacturing" className="hover:text-white transition-colors duration-300">Manufacturing</a></li>
    <li><a href="#public-services" className="hover:text-white transition-colors duration-300">Public Services</a></li>
    <li><a href="#retail" className="hover:text-white transition-colors duration-300">Retail</a></li>
    <li><a href="#travel" className="hover:text-white transition-colors duration-300">Travel, Transportation and Hospitality</a></li>
  </ul>
</div>

          <div>
            <h2 className="text-lg text-white mb-4">Insights</h2>
            <ul className="space-y-4">
              <li><a href="#tcs-thought-leadership" className="hover:text-white transition-colors duration-300">TCS Thought Leadership</a></li>
              <li><a href="#customer-stories" className="hover:text-white transition-colors duration-300">Customer Stories</a></li>
              <li><a href="#white-papers" className="hover:text-white transition-colors duration-300">White Papers</a></li>
              <li><a href="#webinars" className="hover:text-white transition-colors duration-300">Webinars</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors duration-300">Resources</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-white mb-4">About TCS</h2>
            <ul className="space-y-4">
              <li><a href="#about-us" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#investor-relations" className="hover:text-white transition-colors duration-300">Investor Relations</a></li>
              <li><a href="#corporate-social-responsibility" className="hover:text-white transition-colors duration-300">Corporate Social Responsibility</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#corporate-security" className="hover:text-white transition-colors duration-300">Corporate Security</a></li>
              <li><a href="#location" className="hover:text-white transition-colors duration-300">TCS Worldwide</a></li>
            </ul>
          </div>
        </div>
      </footer>
       );
    }
      
      export default Footer;