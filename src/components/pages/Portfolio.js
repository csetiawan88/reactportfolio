// Import React and necessary images and styles
import React from "react";
import "../../styles/Portfolio.css";
import travelgem from "../../images/travelgem.jpg";
import moviesearch from "../../images/moviesearch.jpg";
import TechBlog from "../../images/TechBlog.jpg";
import WeatherDashboard from "../../images/WeatherDashboard.jpg";
import CodingQuiz from "../../images/CodingQuiz.jpg";
import workdayscheduler from "../../images/workdayscheduler.jpg";
import githublogo from "../../images/github-mark-white.png";

// Define a functional React component called Portfolio
export default function Portfolio() {
  return (
    <div class="portfolio">
      <h1>Portfolio</h1>

      <div class="portfolio-flex-wrap">
        {/* Portfolio item 1: Travel Gem Explorer */}
        <div class="flex-wrap-item">
          <figure class="container">
            <img src={travelgem} alt="Travel Gem Explorer" class="image"></img>
            <div class="middle">
              <div class="text text-success">
                {/* Link to the project and GitHub repository */}
                <a
                  class="text"
                  href="https://travelgem-explorer-6412c66d7631.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Travel Gem Explorer
                </a>
                <a
                  href="https://github.com/csetiawan88/travel-gem-explorer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githublogo}
                    alt="github logo"
                    class="github-icon"
                  ></img>
                </a>
              </div>
            </div>
          </figure>
        </div>

        {/* Portfolio item 2: Movie Search */}
        <div class="flex-wrap-item">
          <figure class="container">
            <img src={moviesearch} alt="Movie Search" class="image"></img>
            <div class="middle">
              <div class="text">
                {/* Link to the project and GitHub repository */}
                <a
                  class="text"
                  href="https://csetiawan88.github.io/moviesearch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Movie Search
                </a>
                <a
                  href="https://github.com/csetiawan88/moviesearch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githublogo}
                    alt="github logo"
                    class="github-icon"
                  ></img>
                </a>
              </div>
            </div>
          </figure>
        </div>

        {/* Portfolio item 3: Weather Dashboard */}
        <div class="flex-wrap-item">
          <figure class="container">
            <img
              src={WeatherDashboard}
              alt="Weather Dashboard"
              class="image"
            ></img>
            <div class="middle">
              <div class="text">
                {/* Link to the project and GitHub repository */}
                <a
                  class="text"
                  href="https://csetiawan88.github.io/weatherdashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather Dashboard
                </a>
                <a
                  href="https://github.com/csetiawan88/weatherdashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githublogo}
                    alt="github logo"
                    class="github-icon"
                  ></img>
                </a>
              </div>
            </div>
          </figure>
        </div>

        {/* Portfolio item 4: Code Quiz */}
        <div class="flex-wrap-item">
          <figure class="container">
            <img src={CodingQuiz} alt="Coding Quiz" class="image"></img>
            <div class="middle">
              <div class="text">
                {/* Link to the project and GitHub repository */}
                <a
                  class="text"
                  href="https://csetiawan88.github.io/quiz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Quiz
                </a>
                <a
                  href="https://github.com/csetiawan88/quiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githublogo}
                    alt="github logo"
                    class="github-icon"
                  ></img>
                </a>
              </div>
            </div>
          </figure>
        </div>

        {/* Portfolio item 5: Tech Blog */}
        <div class="flex-wrap-item">
          <figure class="container">
            <img src={TechBlog} alt="Tech Blog" class="image"></img>
            <div class="middle">
              <div class="text">
                {/* Link to the project and GitHub repository */}
                <a
                  class="text"
                  href="https://techblog888-e00900e4a40b.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MVC - Tech Blog
                </a>
                <a
                  href="https://github.com/csetiawan88/techblog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githublogo}
                    alt="github logo"
                    class="github-icon"
                  ></img>
                </a>
              </div>
            </div>
          </figure>
        </div>

        {/* Portfolio item 6: Work Day Scheduler */}
        <div class="flex-wrap-item">
          <figure class="container">
            <img
              src={workdayscheduler}
              alt="Work Day Scheduler"
              class="image"
            ></img>
            <div class="middle">
              <div class="text">
                {/* Link to the project and GitHub repository */}
                <a
                  class="text"
                  href="https://csetiawan88.github.io/workdayscheduler/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Work Day Scheduler
                </a>
                <a
                  href="https://github.com/csetiawan88/workdayscheduler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={githublogo}
                    alt="github logo"
                    class="github-icon"
                  ></img>
                </a>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
