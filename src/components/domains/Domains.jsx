import React from "react"
import "./domains.scss"
import CodeIcon from '@mui/icons-material/Code';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BrushIcon from '@mui/icons-material/Brush';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Domains() {
    return (
        <div className="domains">
            <div className="domains-heading">
                <h2>We are looking for</h2>
            </div>
            <div className="domains-content">
                <div className="card">
                    <CodeIcon className="icon" />
                    <h4>Web Developer</h4>
                </div>
                <div className="card">
                    <BorderColorIcon className="icon" />
                    <h4>Content Writer</h4>
                </div>
                <div className="card">
                    <BrushIcon className="icon" />
                    <h4>Graphic Designer</h4>
                </div>
                <div className="card">
                    <EventAvailableIcon className="icon" />
                    <h4>Event Manager</h4>
                </div>
                <div className="card">
                    <LinkedInIcon className="icon" />
                    <h4>Social Media Manager</h4>
                </div>
            </div>
            <div className="register-btn">
                <button type="button" className="button">Join Us</button>
            </div>
        </div>
    )
}
