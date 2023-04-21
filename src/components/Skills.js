import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <div class="text-align-left">
                        <div class="night-sky-background">
                        <h4>Name:     Sivaramakrishnan S</h4>
                      <h4>D.O.B:   <p>13th Sept 2003</p></h4>
                      <h4>Role: <p>Student</p></h4>
                  <h3>University:</h3>
                  <p>Sri Krishna College of Engineering and Technology</p>
                  <h3>Degree:</h3>
                  <p>B.E Electronics and communication Engineering</p>
                  <h3>Batch:</h3>
                  <p>2021-2025</p>
                  <h3>Hobbies</h3>
                  <p>Drawing, Reading Comics, Watching series& Anime</p>
                  <h3>Objective:</h3>
                  <p>To secure a challenging position in a reputable organization where I can utilize my skills, education, and experience to contribute to the success of the company and gain valuable experience in the field.</p>
                        </div>
                      
                  </div>  
                      
                    <h2>Skills</h2>
                        <p>"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.".<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>3D Modeling</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Leadership</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>App Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
