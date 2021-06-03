import classes from './header.module.css'
import { Fragment } from "react"


const Header = ()=>{
    return(
        <Fragment>
            <div className={classes.header}>
                <div className={classes.name}>
                    <h1>Suryanshoo.k()</h1>
                </div>     
                <div className={classes.sections}>
                    <span className={classes.about}>About</span>
                    <span className={classes.skills}>Skills</span>
                    <span className={classes.projects}>Project</span>
                    <span className={classes.resume}>Resume</span>
                </div>           
            </div>
        </Fragment>
    )
}

export default Header