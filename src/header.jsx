import React from "react";

const Header = () => {

    return (
        <div className="header">
            <h3>John Wagner</h3>
            <p>jwagner988@gmail.com</p>
            <p className="desc">Experienced JavaScript engineer and open-source contributor. Currently developing full-stack applications with React, Node, Express, PostgreSQL, and MongoDB. </p>
            <ul>
                <li><a href='https://myresumestorage.s3.us-west-1.amazonaws.com/Resume.pdf' target='_blank' rel="noopener noreferrer">Resume</a></li>
                <li><a href='https://github.com/jwagner988'>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jwagner988">Linkedin</a></li>
            </ul>
            <hr></hr>
        </div>
    )
}


export default Header