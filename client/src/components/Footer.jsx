import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-slate-500 text-white">
        <div className="container grid grid-cols-4">
          <div className="text-center">
            <h1 className="font-bold text-xl">About</h1>
            <p>Civil engineer from NIT Durgapur</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-xl">Links</h1>
            <ul>
                <li>
                <span>&#8594;</span>
                <a href="/">Home</a>
                    </li><br/>
                     <li>
                <span>&#8594;</span>
                <a href="/about">About</a>
                    </li><br/>
                     <li>
                <span>&#8594;</span>
                <a href="/service">Services</a>
                    </li><br/>
            </ul>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-xl">Services</h1>
            <ul>
                <li>
                <span>&#8594;</span>
                <a href="#">JEE</a>
                    </li><br/>
                     <li>
                <span>&#8594;</span>
                <a href="#">Engineering Courses</a>
                    </li><br/>
                     <li>
                <span>&#8594;</span>
                <a href="#">Engineering Lifestyle</a>
                    </li><br/>
                
                
            </ul>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-xl">Have you any questions?</h1>
            <address>
                <div>
                    <p>
                    <i className="bi bi-geo-alt-fill mr-1"></i>
                    Samastipur,Bihar,India
                    </p>
                </div>
                <div>
                <i className="bi bi-telephone mr-1"></i>
                  <a href="tel:+918084833584">+91 8084833584</a>
                </div>
                <div>
                <i className="bi bi-envelope mr-1"></i>
                  <a href="mailto:abhishekvilladin@gmail.com">abhishekvilladin@gmail.com</a>
                </div>
            </address>
          </div>
        </div>
        <div className="text-center h-16 mt-5 text-xl">
          Welcome to our Website
        </div>
      </footer>
    </>
  );
};
export default Footer;
