import { Link } from "react-router-dom";
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function Team() {
    return (
        <>
        <Navbar />
        <section className="dash">
            <div className="container"> 
            <div className="row">
                <Left/>
                <div className="col-md-9">
                    <h2>Team Management</h2>
                <Link to='/addteam' > <button  className="form-control btn btn-success"> add new team member</button></Link> 
                    
                    
                    </div>

            </div>

            </div>
        </section>

        </> 
     );
}

export default Team;