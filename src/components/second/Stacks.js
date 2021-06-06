import classes from './Stacks.module.css'
import SoftwareSkills from '../SocialMedia/SoftwareSkills'
import Slide from 'react-reveal/Slide';
import Feeling from '../UI/Feeling'

const Stacks = ()=>{
    return (
        <div className={classes.second}>
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
                <Slide right>
                    <Feeling />
                </Slide>
                </div>
            </div>
        </div>
    )
}

export default Stacks