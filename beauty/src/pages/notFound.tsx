import { Link } from "react-router-dom"

function NotFound(){
    return(
        <div>
            <p>This page does not exist!</p>
            <Link to='/' className='hover:underline'>Go Home</Link>
        </div>
    )
}
export default NotFound