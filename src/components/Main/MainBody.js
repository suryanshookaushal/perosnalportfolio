import classes from './MainBody.module.css'
import { Fragment } from 'react'
import secondimg from '../../img/first.svg'
import Typewriter from './Typewriter'


const MainBody = ()=>{
    return(
        <Fragment>
        <div className={classes.main}>
            <div className={classes.first}>
                <div className={classes.about}>
                    <span><img src="https://i.pinimg.com/originals/00/4b/17/004b173f6e3d6843df10114e087f30a8.gif" width="50" height="50" alt="gif"/></span>
                    <span className={classes.hi}>Hi there!</span>
                    <span class={classes.wave}>👋</span>
                    <p>I am<span className={classes.suryanshoo}> SURYANSHOO!!</span></p>
                    <Typewriter />
                </div>

            </div>
            <div className={classes.second}>
                <img className={classes.coding} src={secondimg} alt="coding guy"></img>
            </div>
        </div>
        </Fragment>
    )
}

export default MainBody