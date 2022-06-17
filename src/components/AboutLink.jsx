import {Link} from 'react-router-dom'

function AboutLink (){

    return (
        <div className="about-link">
            <Link to='/about'>
                <h1>ABOUT</h1>
            </Link>
        </div>
    )
}

export default AboutLink