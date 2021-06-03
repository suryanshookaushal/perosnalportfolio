import Typical from 'react-typical'

const Typewriter = ()=>{
    return(
        <div className="type">
            <Typical
            steps={['⚡ I am a Web Developer', 1000, '⚡ I am a 4 ⭐ coder on codechef.', 1000, '⚡ I am a AI & ML Enthusiast 💻', 1000, '⚡ I have experience in react ⚛️', 1000, '⚡ Have deep knowledge of Node.js ✨', 1000]}
            loop={Infinity}
            wrapper="p"
        />
      </div>
    )
}

export default Typewriter