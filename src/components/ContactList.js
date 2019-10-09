import React from 'react';
import './Contact.css';
import Contact from './Contact.js';

const contacts = [
    { name: 'Margie Mccoy', image: 'https://randomuser.me/api/portraits/women/45.jpg', online : true },
    { name: 'Corey Wright', image: 'https://randomuser.me/api/portraits/men/83.jpg', online : false },
    { name: 'Charlotte Williams', image: 'https://randomuser.me/api/portraits/women/92.jpg', online  : true},
    { name: 'Shannon Shaw', image: 'https://randomuser.me/api/portraits/women/76.jpg', online : false},
    { name: 'Lance Henry', image: 'https://randomuser.me/api/portraits/men/18.jpg', online : true }
];

const ContactList = () => (
    <div>
        {contacts.map(item => (
            <Contact
                name={item.name} image={item.image} online={item.online}
            />
        )
        )}
    </div>
)






export default ContactList;