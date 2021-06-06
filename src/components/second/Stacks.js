import classes from './Stacks.module.css'
import SoftwareSkills from '../SocialMedia/SoftwareSkills'
import Slide from 'react-reveal/Slide';

const Stacks = ()=>{
    return (
        <div className={classes.second} data-position="left" data-offset="60" >
            <div className={classes.heading}>
                <h1>Here's is what I do</h1>
            </div>
            <div className={classes.sections}>
                <Slide left>
                    <div className={classes.tech}>
                        <SoftwareSkills />
                    </div>
                </Slide>
                
                <div className={classes.para}>

                </div>
            </div>
        </div>
    )
}

export default Stacks