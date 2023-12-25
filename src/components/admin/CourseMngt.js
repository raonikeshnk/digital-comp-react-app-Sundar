import { Link } from "react-router-dom";
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function CourseMngt() {
    return (
        <>
        <Navbar />
        <section className="dash">
            <div className="container"> 
            <div className="row">
                <Left/>
                <div className="col-md-8">
                   <h2> Course Management</h2> 
                  <Link to='/addcourse'><button className="btn btn-info form-control"> Add New Course Here!!</button></Link> 
                    <table className="table table-cover">
                        <thead>
                        <tr>
                            <th>S.No</th>
                            <th> Course Name</th>
                            <th> Course Img</th>
                            <th> Course Desc</th>
                            <th> Course MDesc </th>
                            <th> Course Duration</th>
                            <th> Course Category</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>                            
                    
                     </div>

            </div>

            </div>
        </section>

        </> 
     );
}

export default CourseMngt;