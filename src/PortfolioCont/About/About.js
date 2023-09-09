import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='About'>
      <h1 className='About-text'>About Me</h1>
      <div className='About-Container'>
        <div className='About-pic-Container'>
          <img src='https://lh3.googleusercontent.com/a/ACg8ocKIsrbaFdpyE46MoAqw8nr2aqJckZ-T3m_rEsU0KEjDAL7y9i3ENLSC43dELWeM6DvnyC2K6NGbpyAGe85j4eQNGqmC=s389-c-no' alt='Profile Pic' />
        </div>

        <div className='text-Container'>
          <p>I'm a dedicated full-stack developer with a deep passion for crafting stunning & highly functional websites  and I'm always eager to seize fresh opportunities for learning and personal growth.</p>
          <p>"I'm currently pursuing my B.Tech in Information Technology at Maharaja Agrasen Institute Of Technology (MAIT) in Delhi, where I'm in my third year of study</p>
          <p>Outside the realm of coding, you'll often find me engrossed in captivating web series or indulging in the mesmerizing world of anime.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
