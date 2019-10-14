import React from 'react';
import './Contact.css';

class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            online : false,
        };
    }
    render() {
        return (
        <figure className = "Contact">
            <img className = "avatar" src = {this.props.image} alt = {this.props.name} />
            <figcaption>
                <blockquote className = "name"> 
                {this.props.name}
                </blockquote>
                <div className = "status"
                onClick = {event => {
                    const newStatus = !this.state.online;
                    this.setState({online: newStatus});
                }}
                >
                    <cite 
                    className = {this.state.online? "status-online" : "status-offline"}
                    
                    >
                    </cite>
                    <cite 
                    className = "status-text"
                    >
                    {this.state.online ? "online" : "offline"}
                    </cite>
                </div>
            </figcaption>
        </figure>
        );
    }
}

export default Contact;