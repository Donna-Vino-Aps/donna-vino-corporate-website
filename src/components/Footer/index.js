import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex bg-gray-800 text-white text-center py-4 mt-auto h-80"
      data-testid="footer"
    >
      <img
        className="h-16"
        src="https://thehub-io.imgix.net/files/s3/20241209183833-4571ce47897c5631412b3cd584fbd674.jpg?fit=crop&w=300&h=300&auto=format&q=60"
        alt="Donna Vino Logo"
      ></img>
      <div className="grid grid-cols-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </footer>
  );
};
export default Footer;
