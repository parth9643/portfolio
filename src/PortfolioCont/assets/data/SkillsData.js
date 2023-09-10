import bootstrap from '../fonts/Skills/bootstrap.svg';
import c from '../fonts/Skills/c.svg';
import cplusplus from '../fonts/Skills/cplusplus.svg';
import figma from '../fonts/Skills/figma.svg';
import firebase from '../fonts/Skills/firebase.svg';
import git from '../fonts/Skills/git.svg';
import html from '../fonts/Skills/html.svg';
import javascript from '../fonts/Skills/javascript.svg';
import mongodb from '../fonts/Skills/mongoDB.svg';
import mysql from '../fonts/Skills/mysql.svg';
// import nextjs from '../fonts/Skills/nextJS.svg';
import react from '../fonts/Skills/react.svg';
import nodejs from '../fonts/Skills/download.png';
import css from '../fonts/Skills/css.svg';



export const SkillsData = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        default:
            break;
        case 'html':
            return html;
        case 'c':
            return c;
        case 'cplusplus':
            return cplusplus;
        case 'figma':
            return figma;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'bootstrap':
            return bootstrap;
        case 'javascript':
            return javascript;
        case 'mongodb':
            return mongodb;
        case 'mysql':
            return mysql;
        // case 'nextjs':
        //     return nextjs;
        case 'react':
            return react;
        case 'nodejs':
            return nodejs;
        case 'css':
            return css;

    }
}