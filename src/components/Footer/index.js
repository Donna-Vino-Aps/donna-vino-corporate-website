import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex bg-gray-900 text-white text-center py-4 mt-auto h-100 md:h-40 sm:h-auto items-center justify-center"
      data-testid="footer"
    >
      <img
        className="h-16 rounded"
        src="https://thehub-io.imgix.net/files/s3/20241209183833-4571ce47897c5631412b3cd584fbd674.jpg?fit=crop&w=300&h=300&auto=format&q=60"
        alt="Donna Vino Logo - Red background, white text saying Donna Vino"
      ></img>
      <div className="grid grid-cols-4 gap-4 ml-20 mr-20">
        <div className="p-2">
          <h3 className="pb-3">Resources</h3>
          <p className="text-sm text-zinc-700">Saas Development</p>
          <p className="text-sm text-zinc-700">Our Products</p>
          <p className="text-sm text-zinc-700">Our Products</p>
          <p className="text-sm text-zinc-700">User Strategy</p>
        </div>
        <div className="p-2">
          <h3 className="pb-3">Company</h3>
          <p className="text-sm text-zinc-700">About Donna Vino</p>
          <p className="text-sm text-zinc-700">Contact</p>
          <p className="text-sm text-zinc-700">Success History</p>
          <p className="text-sm text-zinc-700">Setting & Privacy</p>
        </div>
        <div className="p-2">
          <h3 className="pb-3">Quick Links</h3>
          <p className="text-sm text-zinc-700">Premium Support</p>
          <p className="text-sm text-zinc-700">Our services</p>
          <p className="text-sm text-zinc-700">Know Our Team</p>
          <p className="text-sm text-zinc-700">Download App</p>
        </div>
        <div className="p-2">
          <h3 className="pb-3">Follow Us On</h3>
          <div className="flex gap-4 ml-3">
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
