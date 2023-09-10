import React from 'react';
import Marquee from "react-fast-marquee";

import './Skill.css'

import {dataSkills1 } from '../assets/data/dataSkills1'
import { SkillsData } from '../assets/data/SkillsData'

function Skills() {


    return (
        <div className="skills">
            <div className="skillsHeader">
                <h2 >Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {dataSkills1.map((skill, id) => (
                            <div className="skill--box" key={id} >
                                <img src={SkillsData(skill)} alt={skill} className='skillImg' />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills