import { Link } from "react-router-dom";

function Left() {
    return ( 
<>
<div className="col-md-3"> 
<Link  to='/team'> <button className="btn btn-info form-control p-3"> Team Management</button></Link>
<Link  to='/gallerymngt'> <button className="btn btn-info form-control p-3"> Gallery Management</button></Link>
<Link  to='/aboutmngt'> <button className="btn btn-info form-control p-3"> About Management</button></Link>


</div>



</>
        );
}

export default Left;