import Left from "./common/Left";
import Navbar from "./common/Navbar";

function AboutMngt() {
    return (
        <>
            <Navbar />
            <section className="dash">
                <div className="container">
                    <div className="row">
                        <Left />
                        <div className="col-md-8"> 
                        <h2>About Management</h2>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Mission</th>
                                    <th>Mission Image</th>
                                    <th>Vission</th>
                                    <th>Vission Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>Our mission is to provide the best possible service to our clients. We aim at creating a platform where customers</p></td>
                                    <td>Mission image</td>
                                    <td><p>Our Vission is to provide our clients with the best possible service, by combining the highest quality of work and</p></td>
                                    <td>Vission image</td>

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

export default AboutMngt;