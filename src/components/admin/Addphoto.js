import Left from "./common/Left";
import Navbar from "./common/Navbar";

function Addphoto() {
    return (
        <>
        <Navbar />
        <section className="dash">
            <div className="container"> 
            <div className="row">
                <Left/>
                <div className="col-md-8">
                    <h2> Add New Photo</h2>
                    <form>
                        <label> Photo</label>
                        <input type="file" className="form-control"/>
                        <button type="submit" className="btn btn-success form-control mt-3"> Add</button>
                    </form>
                     </div>

            </div>

            </div>
        </section>

        </> 
     );
}

export default Addphoto;