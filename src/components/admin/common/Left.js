import { Link } from "react-router-dom";

function Left() {
    return ( 
<>
<div className="col-md-3"> 
<Link  to='/team'> <button className="btn btn-book btn-info mb-5"> Team Management</button></Link>
<Link  to='/photo'> <button className="btn btn-book btn-info mt-5"> Photo Management</button></Link>




</div>



</>
        );
}

export default Left;