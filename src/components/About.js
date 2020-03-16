import React from "react";
import "../static/styling/about.css";
import StarRatings from "react-star-ratings";

const About = () => {
  const skills = {
    languages: [
      {
        name: "Java",
        score: 4
      },
      {
        name: "JavaScript",
        score: 3.5
      },
      {
        name: "Python",
        score: 4.5
      }
    ],
    technologies: [
      {
        name: "ReactJS",
        score: 4
      },
      {
        name: "Redux",
        score: 4
      },
      {
        name: "HTML5",
        score: 4.5
      },
      {
        name: "CSS3",
        score: 4.5
      },
      {
        name: "NodeJS",
        score: 4
      },

      {
        name: "MongoDB",
        score: 3.5
      },
      {
        name: "NoSQL",
        score: 3
      }
    ]
  };
  console.log(skills);
  return (
    <div className="container">
      <div className="about-me">
        <p>
          Hello! My name is Angelo Solitario. I am a recent graduate of Computer
          Science from San Francisco State University. I enjoy programming and
          gaining new things during my free time.
        </p>
      </div>

      <div className="row">
        <div className="col education">
          <h1>Education</h1>
          {/*This will be the education part */}
          <h4>San Francisco State University</h4>
          <p className="tab">
            Bachelor of Science in Computer Science{" "}
            <span className="date">Aug 2017 - Dec 2019</span>
          </p>

          <h4>Skyline College</h4>
          <p className="tab">
            Transfer Program <span className="date">Aug 2014 - May 2017</span>
          </p>
        </div>

        <div className="col skills">
          <h1>Skills</h1>

          <h5>Languages</h5>
          <ul>
            {skills.languages.map(lang => (
              <>
                <li>
                  {lang.name}
                  <span className="tab">
                    <StarRatings
                      rating={lang.score}
                      starRatedColor="red"
                      starDimension="20px"
                      starSpacing="5px"
                    />
                  </span>
                </li>
              </>
            ))}
          </ul>
          <br />
          <h5>Technologies</h5>
          <ul>
            {skills.technologies.map(tech => (
              <>
                <li>
                  {tech.name}
                  <span className="tab">
                    <StarRatings
                      rating={tech.score}
                      starRatedColor="blue"
                      starDimension="20px"
                      starSpacing="5px"
                    />
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
