import React, { Component } from "react";

export class Slider extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://clicks.digital/wp-content/uploads/2020/07/E-Commerce-Development.jpg" class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src="https://innovationorigins.com/app/uploads/2020/09/Schermafbeelding-2020-09-06-om-13.34.15-1004x670.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn.monetizepros.com/wp-content/uploads/20201128204845/blogging-business-cms-265667-1.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}
