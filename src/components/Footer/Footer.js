import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex text-white text-center py-4 mt-auto h-100 md:h-40 sm:h-auto items-center justify-center"
      data-testid="footer"
      style={{ backgroundColor: "#2F2E2E" }}
    >
      <img
        className="h-16 rounded"
        src="/images/donna-vino-logo-transparent.png"
        alt="Donna Vino Logo - Red background, white text saying Donna Vino"
      ></img>
      <div className="grid grid-cols-4 gap-4 ml-20 mr-20">
        <div className="p-2 text-start">
          <h4 className="pb-3 font-semibold footerHeading">Resources</h4>
          <p className="text-sm text-zinc-600 pb-1">Our Products</p>
          <p className="text-sm text-zinc-600 pb-1">Contact</p>
        </div>
        <div className="p-2 text-start">
          <h4 className="pb-3 font-semibold footerHeading">Company</h4>
          <a>
            <p className="text-sm text-zinc-600 pb-1">About Donna Vino</p>
          </a>
          <p className="text-sm text-zinc-600 pb-1">Know Our Team</p>
        </div>
        <div className="p-2 text-start">
          <h4 className="pb-3 font-semibold footerHeading">Quick Links</h4>
          <p className="text-sm text-zinc-600 pb-1">Wine Tastings</p>
          <p className="text-sm text-zinc-600 pb-1">To The Shop</p>
        </div>
        <div className="p-2">
          <h4 className="pb-3 font-semibold footerHeading">Follow Us On</h4>
          <div className="flex gap-4 ml-3 relative right-1">
            <a href="#" className="text-white">
              <img
                src="https://www.svgrepo.com/show/341809/facebook-f.svg"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
            <a href="#" className="text-white">
              <img
                src="https://www.svgrepo.com/show/378429/instagram-fill.svg"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
            <a href="#" className="text-white">
              <img
                src="https://www.svgrepo.com/show/25824/linked-in-logo-of-two-letters.svg"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
