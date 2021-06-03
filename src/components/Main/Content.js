import classes from './Conten.module.css'
import { Fragment } from "react"
import Header from './Header'
import MainBody from './MainBody'

const Content = ()=>{
    return(
    <Fragment>
        <div className={classes.main}>
            <Header />
            <MainBody />
        </div>
    </Fragment>
    )
}

export default Content