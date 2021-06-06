import { Fragment } from "react"
import githubimg from '../../img/github-icon.svg'
import javascriptimg from '../../img/javascript.svg'
import cplus from '../../img/c-plusplus.svg'
import react from '../../img/react.svg'
import html from '../../img/html-5.svg'
import css from '../../img/css-3.svg'
import git from '../../img/git-icon.svg'
import node from '../../img/nodejs.svg'
import mongod from '../../img/mongodb.svg'
import sql from '../../img/mysql.svg'
import next from '../../img/nestjs.svg'
import python from '../../img/python.svg'
import dj from '../../img/django.svg'
import boot from '../../img/bootstrap.svg'
import c from '../../img/c.svg'

import classes from './SoftwareSkills.module.css'


const SoftwareSkills = ()=>{
    return(
        <Fragment>
            <h1>Technology I have used 🔥</h1>
            <div className={classes.list}>
                <span><img src={githubimg} className={classes.img} alt="github"></img></span>
                <span><img src={javascriptimg} className={classes.img} alt="github"></img></span>
                <span><img src={cplus} className={classes.img} alt="github"></img></span>
                <span><img src={react} className={classes.img} alt="github"></img></span>
                <span><img src={dj} className={classes.img} alt="github"></img></span>
            </div>
            <div className={classes.list}>
                <span><img src={html} className={classes.img} alt="github"></img></span>
                <span><img src={css} className={classes.img} alt="github"></img></span>
                <span><img src={git} className={classes.img} alt="github"></img></span>
                <span><img src={node} className={classes.img} alt="github"></img></span>
                <span><img src={boot} className={classes.img} alt="github"></img></span>
            </div>
            <div className={classes.list}>
                <span><img src={mongod} className={classes.img} alt="github"></img></span>
                <span><img src={sql} className={classes.img} alt="github"></img></span>
                <span><img src={python} className={classes.img} alt="github"></img></span>
                <span><img src={next} className={classes.img} alt="github"></img></span>
                <span><img src={c} className={classes.img} alt="github"></img></span>
            </div>
        </Fragment>
    )
}

export default SoftwareSkills