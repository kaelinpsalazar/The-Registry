import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer className="w-100 mt-auto p-2 bg-dark text-light">
          <div className="container text-center mb-1">
            <h4>
              Made with{" "}
              <span
                className="emoji"
                role="img"
                aria-label="heart"
                aria-hidden="false"
              >
                ❤️
              </span>{" "}
              by the fine folks at soup-du-jour.
            </h4>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
