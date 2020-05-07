import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="mt-5">

                <ul className="list-group">
                   
                    <li className="list-group-item text-info">
                        <Link className="nav-link " to="/create/property">
                            Add Property
                        </Link>
                    </li>


                    <li className="list-group-item text-info">
                        <Link className="nav-link " to="/admin/properties">
                            Manage Properties
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mt-4 mb-5">
                <h3 className="card-header">Admin Prifile</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Dashboard"
            description={`Welcome ${name}!`}
            className="container-fluid"
        >
            <div className="container row mt-4">
                <div className="col-md-4">{adminLinks()}</div>
                <div className="col-md-8 ">{adminInfo()}</div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;