import React, {Component} from 'react';

class Gif extends Component {
    render() {
        const image = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
        return (
            <img src={image}  className = "gif"/>
        );
    }
}

export default Gif;