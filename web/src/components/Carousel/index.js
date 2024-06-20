import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image_1 from '../../assets/image_1.png';
import image_2 from '../../assets/image_3.jpeg';
import image_3 from '../../assets/image_4.jpeg';
import image_4 from '../../assets/file1.png';

export const Carousel_el = () => {
    const carouselStyle = {
        maxWidth: '500px', // Adjust the maxWidth to your desired size
        margin: '25px auto' // Center the carousel with auto margin
    };

    const imageStyle = {
        maxHeight: '300px', // Adjust the maxHeight to your desired size
        objectFit: 'cover' // Ensure images fit within the specified dimensions
    };

    return (
        <Carousel style={carouselStyle}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image_1}
                    alt="Third slide"
                    style={imageStyle}
                />
                <Carousel.Caption>
                    <h3>How are u, bud?</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image_4}
                    alt="First slide"
                    style={imageStyle}
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
                    style={imageStyle}
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
                    style={imageStyle}
                />
                <Carousel.Caption>
                    <h3>Happiness is achievable</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
