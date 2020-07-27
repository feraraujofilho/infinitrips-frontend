import React, { Component } from 'react';
import Sky from 'react-sky';

import ParticlesBg from 'particles-bg'

// you can pass imported images to Sky
import myImage from "../images/airplan.png"

class AnimatedBackground extends Component {
  render() {
    return (
      <div>
        <ParticlesBg color="#4BA0B4" num={200} type="cobweb" bg={true} />
      </div>
    );
  }
}

export default AnimatedBackground;