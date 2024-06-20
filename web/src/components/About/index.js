import React from "react";
import { Header } from '../Header/index';
import { Fragment } from "react";
import raniery from '../../assets/raniery.jpg';
import aj from '../../assets/aj.jpeg';
import joao from '../../assets/joao.jpeg';

const About = () => {
    const containerStyle = {
        maxWidth: "1200px", // Adjust this to your desired max width
        margin: "0 auto", // Center the container
        textAlign: "center",
        padding: "20px"
    };

    const imageStyle = {
        width: "100%", // Ensure the image takes up the full width of the container
        height: "300px", // Fixed height for uniformity
        objectFit: "cover", // Ensure the image covers the container
        borderRadius: "10px" // Add some border radius for a smoother look
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "50px"
    };

    const itemStyle = {
        textAlign: "center",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        background: "#fff"
    };

    return (
        <div>
            <Header />
            <div style={containerStyle}>
                <Fragment>
                    <div style={gridStyle}>
                        <div style={itemStyle}>
                            <img src={aj} style={imageStyle} alt="AJ Azipurua" />
                            <h3>AJ Azipurua</h3>
                            <p>CS Major</p>
                        </div>
                        <div style={itemStyle}>
                            <img src={joao} style={imageStyle} alt="João Pinheiro" />
                            <h3>João Pinheiro</h3>
                            <p>Math Major</p>
                        </div>
                        <div style={itemStyle}>
                            <img src={raniery} style={imageStyle} alt="Raniery Mendes" />
                            <h3>Raniery Mendes</h3>
                            <p>CS Grad</p>
                        </div>
                    </div>
                </Fragment>
            </div>
        </div>
    );
}

export default About;
