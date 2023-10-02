import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "../Components/TypingEffect";


const LandingPage = () => {

    return <div>
        {/* put an about me */}
        {/* large paragraph next to linked in pictureas a circle, maybe scale on hover */}
        <h1 className="title2">{useTypingEffect("About Me:", 100)}</h1>
        <div className="landing-cols">
            <div className="col1">
            <p className="landing-text">
                Hello all! My name is Jacob Young and I am a Computer Science and Computational Finance
                 and Risk Management Double Major studying at the University of Washington. Originally 
                 from the Bay Area, I aim to be the most versatile engineer I can, eager to learn new 
                 technologies and quick to apply them. I am currently looking for internship positions 
                 for Summer 2024. In my free time I like swimming, playing water polo, Nintendo games, 
                 reading, camping, hiking and hanging out with friends! Feel free to look around my site 
                 and contact me if you have any questions or interest.
            </p>
            <a href="https://www.linkedin.com/in/jacob-young-a08a21242/" className="ex-link" target="_blank"><img src="link.svg" className="image-link"></img></a>
            <a href="https://github.com/jyoung28" className="ex-link" target="_blank"><img src="github.svg" className="image-link1"></img></a>
            <button className="resume"><Link to="Jacob_young_resume.pdf" className="ex-link" target="_blank" download>Download My Resume &#x2913;</Link></button>
            </div>
            <img src="pic.png" className="landing-pic"></img>
        </div>
        {/* put useful links as a footer*/}
        
        {/* put my resume as a pdf download option*/}
        {/* Some pics Linked profile maybe and pic of mac and UW stadium*/}
    </div>
}

export default LandingPage