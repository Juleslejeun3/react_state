import React, { Component } from 'react'
import image from './image.jpg'

class Proflle extends Component {
    state = { fullName: 'Mamadou Camara', bio: 'je suis étudint à GoMyCode', image:{image}, profession: 'Developpeur Web' }
    render() {
        return (
            <div>
            <h1>Nom: {this.state.fullName}</h1>
            <h1>Bio: {this.state.bio}</h1>
            <h1>Profession: {this.state.profession}</h1>
            <div>
            <img src={image} alt="image_tech" width={500} />
            </div>
            </div>
        );
    }
}

export default Proflle;