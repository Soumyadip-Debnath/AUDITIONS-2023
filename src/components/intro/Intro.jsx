import React from "react"
import "./intro.scss"

export default function Intro() {


    return (
        <div className="intro">

            <div className="intro-left">
                <div className="left-container">
                    <div className="heading">

                        <span className="title"><h2>INDIAN SOCIETY FOR TECHNICAL EDUCATION</h2></span>

                        <br />
                        <p>The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System operating in association with All India Council for Technical Education (AICTE) and other International Projects.</p>
                    </div>
                </div>

            </div>
            <div className="intro-right">
                <div className="imgContainer">
                    <img src="assets/collage-removed-bg.png" alt="" />
                </div>
            </div>
        </div>
    )
}
