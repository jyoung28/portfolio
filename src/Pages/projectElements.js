import useTypingEffect from "../Components/TypingEffect";
let posts = [
    {
        title: "Spotify Rank Game(Typescript, React, Express, Firebase Cloud Firestore, Google Cloud App Engine)",
        description:  "Over Summer 2023 I created a full-stack daily challenge revolving around guessing how 5 random trending songs rank in popularity. This project involved interacting with the Spotify API every 24 hours using cron scheduling, creating a Typescript-React front-end for the user to interact with, writing my own Express API to handle site security and API calls, and using Firebase Cloud FireStore to store user information. I used Chart.JS to visualize all user data and Firebase to authenticate users. Deployment was the trickiest part of this project, which took many attempts on different platforms until eventually hosting the API on Google Cloud App Engine, and using Netlify to host the front-end. Feel free to try it for yourself!",
        image: "spotify.png",
        link: "https://sage-quokka-22cb76.netlify.app/",
        linkText: "Check it out!",
        imgClass : "post-image"

    },
    {
        title: "PDF Search Tool(OpenAI API, LlamaIndex, Flask, Python)",
        description: " At the UC Berkely AI/LLM 2023 Hackathon, all participants were given OpenAI API tokens for our projects. After attending a workshop lead the by the CEO, I decided to use the LlamaIndex framework to customize the input to GPT-3.5 and allow pdf files to be inserted to allow for contextual search, and summarization. I built the tool using the python web development framework Flask and learned a lot about artificial intelligne and LLMs just by attending workshops, working on my project, and playing with the API.",
        image: "pdf.jpeg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7076292317627764736/",
        linkText:"LinkedIn Post",
        imgClass:"pdfimg"

    },
    {
        title: "React Drafting Tool (TypeScript, React, Express)",
        description: "The final project for my software engineering class(CSE 331), was to create a tool where designated users could login and draft from a inputted list of items. Users also had the ability to create their own drafts, setting the allowed users and draft items. The project was a trial by fire where I learned many of the nuances of react through endless debugging, but at the end I came out of the class confident in my knowledge and proficiency in React.",
        imgClass : "post-image"
    },
    {
        title: "Guardian Security(Node.js, HTML, CSS, AWS)",
        description: "During Dubhacks '22, my team decided to take on the T-Mobile Track, where T-Mobile engineers provided a IoT kit for our project to be based off of. We decided harness the multiple sensors and create a child monitoring device that uploaded the data to AWS and then to our node.js front-end, which allowed users to monitor the conditions their child was in. I led front-end design and sed the google maps API to present our data while under a 24 hour time crunch. After presenting the project T-Mobile executives we won Second Place for T-Mobile's Most marketable Hack",
        image: "guardian.jpg",
        imgClass : "post-image"
    },
    {
        title: "C Memory Management Tool",
        imgClass : "post-image",
        description: "As part of the coursework for my class CSE 374, Intermmediate Prgramming Concepts, I was tasked with writing from scratch my own memory allocating and freeing tool in C (recreating malloc and free from scratch). The project was very conceptual and very cohesive, especially for someone who had learned to code 6 months prior. However the cahllenge was invigorating and I was able to complete the project.",
    },

    {
        title: "Java Meal Planner(Java)",
        description: "After taking CSE 142, I wanted to code a tool I would use in my everyday life, and so I create Java program that asked for my dining hall balance and calculated how much I would need to spend to have $0 in my account of the last day of the quarter. This program was very simple and beginner, but helped instill a love for the coding and how practical its applications could be.",
        imgClass : "post-image",
    },
];

export default posts;