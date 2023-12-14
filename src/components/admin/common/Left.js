import { Link } from "react-router-dom";

function Left() {
    return ( 
<>
<div className="col-md-3"> 
<Link  to='/team'> <button className="btn btn-book btn-info"> Team Management</button></Link>



</div>

</>
        );
}

export default Left;