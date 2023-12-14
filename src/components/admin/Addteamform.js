import { Link } from "react-router-dom";
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function Addteamform() {
    return (
        <>
            <Navbar />
            <section className="dash">
                <div className="container">
                    <div className="row">
                        <Left />
                        <div className="col-md-9">
                            <h2>Add New Team Member</h2>
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-8">
                                        <form>
                                            <label>Full Name: </label>
                                            <input className="form-control" />
                                        </form>
                                    </div>
                                    <div className="col-md-4"></div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </>
    );
}

export default Addteamform;