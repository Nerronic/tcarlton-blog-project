import React from "react";
import Button from "react-bootstrap/Button";
import Headshot from "./headshot.jpg"; // Update the path accordingly


const About = () => {
  // User
  const user = {
    name: "Ty Carlton",
    imageSize: 300,
  };
  // Profile Image
  const userImage = (
    <img
      className="headshot"
      src={Headshot}
      alt={"Photo of " + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
        borderRadius: "50%",
      }}
    />
  );

  return (
    <div>
      <div className="image-container">
        {userImage}
        <div className="button">
          <Button variant="success">
            <a href="mailto:tyrellcarlton@gmail.com"> Say Hello here!</a>
          </Button>{" "}
        </div>
        <div className="text-container">
          <h1>{user.name}</h1>
          <p>
            
           <h1> Welcome to my new website.</h1>
            <div>
              <h1>I have been learning how to program for the past year now
              and I am excited to continue my journey.
              </h1>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;