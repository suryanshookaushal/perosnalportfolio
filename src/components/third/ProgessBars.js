import classes from "./ProgressBars.module.css"
import Bounce from 'react-reveal/Bounce';


const ProgressBars = ()=>{
    return(
        <Bounce left cascade>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>C</p>
                    <p>Intermediate</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "70%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>C++</p>
                    <p>Advanced</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "90%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>HTML</p>
                    <p>Intermediate</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "65%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>CSS</p>
                    <p>Intermediate</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "75%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>Javascript</p>
                    <p>Intermediate</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "72%"}}></div>
                </div>
            </div>
        </Bounce>
    )
}

const ProgressSecond = ()=>{
    return(
        <Bounce right cascade>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>Node.js</p>
                    <p>Expert</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "90%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>Express</p>
                    <p>Advanced</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "80%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>MongoDB</p>
                    <p>Intermediate</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "50%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>React</p>
                    <p>Intermediate</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "70%"}}></div>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.header}>
                    <p>Data Structures</p>
                    <p>Advanced</p>
                </div>
                <div className={classes.bars}>
                    <div className={classes.fill} style={{width: "78%"}}></div>
                </div>
            </div>
        </Bounce>
    )
}


export{ 
    ProgressBars,
    ProgressSecond
}
