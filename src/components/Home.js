import React from "react";

function Home() {
  return (
    <section id="IEEEWeek" style={{ backgroundColor: "#000" }}>
      <div
        className="heading-ieee"
        style={{ color: "white", paddingTop: "0.5rem" }}
      >
        <h1 style={{ textAlign: "center" }}>College Event Week</h1>
      </div>

      <div
        id="carouselExampleIndicators1"
        class="carousel slide"
        // data-ride="carousel"
        data-interval="3000"
        style={{ width: "70vw", margin: "auto" }}
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators1"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100 car-img"
              src={require("../assets/img/IMG_7418.jpg").default}
              alt="First slide"
            />
            <div
              class="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                padding: "10px",
                display: "inline",
              }}
            >
              <h4 style={{ marginTop: "0px" }}>
                October 1, 2019 - Mathematics of Machine Learning
              </h4>
              <p>
                Conducted by the renowned Python and Django trainer Mr. Rishabh
                Raj, this workshop guided the students into the promising field
                of Machine Learning and Statistics. It was an interactive as
                well as informative session which helped many students take
                their first steps into the realms of Artificial Intelligence.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 car-img"
              src={require("../assets/img/marvel.jpeg").default}
              alt="Second slide"
            />
            <div
              class="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                padding: "10px",
                display: "inline",
              }}
            >
              <h4 style={{ marginTop: "0px" }}>
                October 2, 2019 - Avengers Quiz
              </h4>
              <p>
                One of the two non technical events conducted during the IEEE
                Week, this quiz saw participation of over 70 teams and 150
                participants. The teams were very enthusiastic and the event was
                very lively as well as successful.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 car-img"
              src={require("../assets/img/jamboree2.jpg").default}
              alt="Third slide"
            />
            <div
              class="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                padding: "10px",
                display: "inline",
              }}
            >
              <h4 style={{ marginTop: "0px" }}>
                October 3, 2019 - Jamboree: The Cultural Fest
              </h4>
              <p>
                The second non technical event that was organized to celebrate
                the IEEE week. The audience witnessed breathtaking performances
                from some of the most talented artists of our college.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 car-img"
              src={require("../assets/img/IMG_7241.jpg").default}
              alt="Fourth slide"
            />
            <div
              class="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                padding: "10px",
                display: "inline",
              }}
            >
              <h4 style={{ marginTop: "0px" }}>
                October 4, 2019 - Data Structures and Algorithms Workshop
              </h4>
              <p>
                The final event of the IEEE Week in association with Coding
                Blocks. The participants were given hands on training and coding
                tips to counter some of the most common and tricky questions
                needed to crack the interviews.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators1"
          role="button"
          data-slide="prev"
          style={{ left: "-12vw" }}
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              filter: "brightness(0.5) sepia(1) hue-rotate(140deg) saturate(6)",
              padding: "20px",
            }}
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators1"
          role="button"
          data-slide="next"
          style={{ right: "-12vw" }}
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              filter: "brightness(0.5) sepia(1) hue-rotate(140deg) saturate(6)",
              padding: "20px",
            }}
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Home;
