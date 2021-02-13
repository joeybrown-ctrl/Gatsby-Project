import React from 'react';

import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div>
            <h1>
                This is the contact page!
            </h1>
            <h3><strong>Phone:</strong> 206 687-479</h3>
            <h3><strong>Email:</strong> gjoey.brown@gmail.com</h3>
            <h3><strong>Github:</strong> <a target="_blank" rel="noreferrer" href="https://github.com/joeybrown-ctrl/">joeybrown-ctrl</a></h3>
            <h3><strong>LinkedIn:</strong> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/george-joseph-brown/">George Joseph Brown</a></h3>
            <Footer />
        </div>
    )
}

export default ContactPage;