import React from "react";
import bb1 from "../../assets/img/ppt1.jpg";
import bb2 from "../../assets/img/ppt2.jpg";
import bb3 from "../../assets/img/ppt3.jpg";


const HomePage = () => {
  return (
    <div>
      <div class="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="80">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="item active">
              <img
                src={bb1}
                alt="bimg"
                style={{ width: "110%", height: "420px" }}
              />
            </div>

            <div class="item">
              <img
                src={bb2}
                alt="bimg"
                style={{ width: "110%", height: "420px" }}
              />
            </div>

            <div class="item">
              <img
                src={bb3}
                alt="bimg"
                style={{ width: "110%", height: "420px" }}
              />
            </div>
          </div>
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
