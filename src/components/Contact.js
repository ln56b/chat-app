import React from 'react';
import './Contact.css';

function Contact (props) {
    return (
    <figure className = "Contact">
        <img className = "avatar" src = {props.image} alt = {props.name} />
        <figcaption>
            <blockquote className = "name"> 
            {props.name}
            </blockquote>
            <div className = "status">
                <cite className = {props.online? "status-online" : "status-offline"}>
                </cite>
                <cite className = "status-text">
                {props.online ? "online" : "offline"}
                </cite>

            </div>

        </figcaption>
    </figure>

    );

}

export default Contact;