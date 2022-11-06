import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import image_1 from '../../assets/image_1.png'
import image_2 from '../../assets/image_3.jpeg'
import image_3 from '../../assets/image_4.jpeg'



export const Carousel_el = () =>{


    return (

        <Carousel  style={{margin: "25px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Logging your thoughts and feelings can help you with depression</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Feel safe to be you!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Happiness is achievable</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )

}