import React from "react";

const Projects = () => {
    return (
        <div className="projects">
            <p><b>Projects</b></p>
            <a href='https://github.com/Team-MT-111/FlashCatch'><b>FlashCatch</b></a>
            <br></br>
            <em>Gamified Flashcard Study App</em>
            <br></br>
            <p className="desc">FlashCatch allows user to create, store, and review flashcards, as well as rewards users for studying through the implementation of a Pokemon themed Gacha mechanic.</p>
            <p>- -</p>
            <a href='https://github.com/TeamCatSnake1/frollic'><b>Frollic</b></a>
            <br></br>
            <em>App to help differently-abled users find businesses that offer various accomodations</em>
            <br></br>
            <p className="desc">Frollic allows users to search for, filter, and review businesses in order to make locating accessible venues as easy as possible.</p>

        </div>
    )
}

export default Projects