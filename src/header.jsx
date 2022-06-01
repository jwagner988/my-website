import React from "react";

const Header = () => {

    return (
        <div className="header">
            <h3>John Wagner Header Zone</h3>
            <p>jwagner988@gmail.com</p>
            <p>I'm a full-stack software engineer who's most recent work was as a core contributor to and Open-source product called SeeQR.  blah blah blah</p>
            <ul>
                {/* <li><a>Resume</a></li> */}
                <li><a href='https://github.com/jwagner988'>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jwagner988">Linkedin</a></li>
            </ul>
        </div>
    )
}


export default Header