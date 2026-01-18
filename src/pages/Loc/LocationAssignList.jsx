import React, { useState, useEffect } from 'react';
import './LocationAssignList.css';

const LocationAssignList = () => {
    const [locationAssignments, setLocationAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace with your actual API call
        const fetchLocationAssignments = async () => {
            try {
                // const response = await fetch('/api/location-assignments');
                // const data = await response.json();
                // setLocationAssignments(data);
                setLocationAssignments([]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLocationAssignments();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="location-assign-list">
            <h2>Location Assignments</h2>
            <table className="assignment-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Location</th>
                        <th>Assignment</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {locationAssignments.length > 0 ? (
                        locationAssignments.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.location}</td>
                                <td>{item.assignment}</td>
                                <td>{item.status}</td>
                                <td>{item.date}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="no-data">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default LocationAssignList;