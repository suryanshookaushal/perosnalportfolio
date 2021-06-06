import classes from './progress.module.css'
import Zoom from 'react-reveal/Zoom';
import {ProgressBars,  ProgressSecond} from './ProgessBars'

const Progress = ()=>{
    return(
        <div className={classes.progress}>
                <div className={classes.heading}>
                    <Zoom left cascade>
                        <h1>Technical Skills</h1>
                    </Zoom>
                </div>
                <div className={classes.section}>
                    <div className={classes.one}>
                        <ProgressBars />
                    </div>
                    <div className={classes.two}>
                        <ProgressSecond />
                    </div>
                </div>
        </div>
    )
}

export default Progress