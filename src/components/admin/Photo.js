import { Link } from "react-router-dom";
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function Admindash() {
    return (
        <>
        <Navbar />
        <section className="dash">
            <div className="container"> 
            <div className="row">
                <Left/>
                <div className="col-md-8">
                    <h2> Photo Management</h2>
                 <Link to='/addphoto'><button className="btn btn-success form-control"> Add New Photo</button></Link>   
                </div>

            </div>

            </div>
        </section>

        </> 
     );
}

export default Admindash;