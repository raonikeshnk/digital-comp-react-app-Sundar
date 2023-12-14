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
                <div className="col-md-8"> </div>

            </div>

            </div>
        </section>

        </> 
     );
}

export default Admindash;