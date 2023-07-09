import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Medewerkers lijst</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Naam</td>
                                <td>Email</td>
                                <td>Telefoonnummer</td>
                                <td>Actie</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a className="btn btn-success">Edit</a>
                                            <a className="btn btn-danger">Remove</a>
                                            <a className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;