import { Link } from "react-router-dom";

function Left() {
    return ( 
<>
<div className="col-md-4"> 
<Link  to='/team'> <button className="btn btn-info form-control"> Team Management</button></Link>



</div>

</>
        );
}

export default Left;