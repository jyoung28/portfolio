import React, { useEffect, useState } from "react";
import posts from "./projectElements";
import { useTypingEffect } from "../Components/TypingEffect";
import "./project-styles.css"
import { ReactComponent as WorkIcon } from "./work.svg";

const Projects = () => {
    

    // make this a button like the other page
    const handleLink = (link, index, text) => {
        if (link) {
            // have buttons same color as titl
            console.log(index)
            return <div>
                <br></br>
                <a href={link} className={"post-button" + index%3} target="_blank">{text}</a>
                <br></br>
                </div>
        } else {
            return <></>
        }
    }


    return (
    <div className="container">
        <h1 className="title">
            {useTypingEffect("Personal Projects", 100)}
            </h1>
        <ul>
        {posts.map((element, index) => (
            <div className="project-post">
                <h2 className={"post"+index%3}>{element.title}</h2>
                <div className="post-content">
                    <span className="post-text">{element.description}</span>
                    <br></br>
                    {handleLink(element.link, index, element.linkText)}
                    <img className={element.imgClass} src={element.image}></img>
                    <br></br>
                    </div>
            </div>
        ))}
        </ul>
    </div>)

}

export default Projects