import {Link} from 'react-router-dom'
import Card from '../components/shared/card'

function About (){

    return(
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>React app for leaving reviews</p>
                <Link to='/'>Back to Home</Link>
            </div>
        </Card>
    )
}

export default About