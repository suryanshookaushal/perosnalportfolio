import classes from './Conten.module.css'
import { Fragment } from "react"
import Header from './Header'
import MainBody from './MainBody'

const Content = (props)=>{
    return(
    <Fragment>
        <div className={classes.main}>
            <Header />
            <MainBody show={props.show}/>
        </div>
    </Fragment>
    )
}

export default Content