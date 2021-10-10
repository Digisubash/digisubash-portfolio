import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area">
      <section id="copyright" className="p-3 odd copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 p-3 text-center text-lg-left">
              <p>© 2021 digisubash.</p>
            </div>
            <div className="col-12 col-md-6 p-3 text-center text-lg-right">
              <p>
                Developed by{" "}
                <a href="https://vinocrazy.com/" target="_blank">
                  Vino Crazy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
