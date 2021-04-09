import React from "react";
import "./Home.css";
function Home() {
  return (
    <section id="hero" class="d-flex align-items-center justify-content-center">
      <div class="container" data-aos="fade-up">
        <div
          class="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div class="col-xl-6 col-lg-8">
            <h1>
              datatyp<span>.</span>
            </h1>
            <h2>Code Online in your Browser.</h2>
            <h2>No setup required.</h2>
          </div>
        </div>

        <div
          class="row mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          <div class="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
            <div class="icon-box">
              <i class="ri-paint-brush-line"></i>
              <h3>
                <a href="../Compiler">Compiler</a>
              </h3>
            </div>
          </div>
          <div class="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="ri-calendar-todo-line"></i>
              <h3>
                <a href="../ChatBot">Chat Bot</a>
              </h3>
            </div>
          </div>
          <div class="col-xl-2 col-md-4 col-6 ">
            <div class="icon-box">
              <i class="ri-bar-chart-box-line"></i>
              <h3>
                <a href="../Editor">HTML/CSS/JS Editor</a>
              </h3>
            </div>
          </div>
          <div class="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
            <div class="icon-box">
              <i class="ri-database-2-line"></i>
              <h3>
                <a href="../Terminal">Linux Shell</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
