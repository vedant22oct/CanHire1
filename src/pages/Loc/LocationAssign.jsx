import React, { Fragment,  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './LocationAssign.css';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function LocationAssign() {

    const locList = useSelector((state) => state.db.locations);
    const canList = useSelector((state) => state.db.candidates);

    const dispatch = useDispatch();
    const [isLocAssigned, setIsLocAssigned] = useState(false);
   
    const [selectedLocation, setSelectedLocation] = useState('');

    //      const [locations, setLocations] = useState([
    //         { id: 1, name: 'New York', code: 'NY' },
    //         { id: 2, name: 'Los Angeles', code: 'LA' },
    //         { id: 3, name: 'Chicago', code: 'CH' },
    //         { id: 4, name: 'Houston', code: 'HO' },
    //         { id: 5, name: 'Phoenix', code: 'PH' },
    //     ]);

    const handleSelectLocation = (locationId) => {
        setSelectedLocation(locationId);
        console.log('select Location:');
    };

    const handleSubmit = () => {
        console.log('submit Location:');
        dispatch({
            type: 'dbData/addLocaionAssignment',
            payload: {
                "assignment_id": `LA${Math.floor(Math.random() * 1000)}`,
                "candidate_id": 'CAND001',
                "location_id": selectedLocation,
                "start_date": new Date().toISOString().split('T')[0]
            }
        });
        setIsLocAssigned(true);

    };

    if (isLocAssigned) {
        return (
            <Fragment>
                <h1 className="page-title">Location Assignment</h1>
                <div>
                    <h2>Your location has been assigned successfully!</h2>
                </div>
            </Fragment>
        );
    }   else {  

        
    return (
        <Fragment>
            <Container>
                <div className="page-title">
                    <h1>candidate Location Assignment </h1>
                    <h2>Candidate: {canList[0]?.name} </h2>
                </div>
                <div className="location-assign-container">
                    <h1>Location Assignment</h1>
                    <div className="location-list">
                        {locList.map((location) => (
                            <div key={location.location_id} className="location-card">
                                <input
                                    type="radio"
                                    id={`location-${location.location_id}`}
                                    name="location"
                                    value={location.location_id}
                                    checked={selectedLocation === location.location_id}
                                    onChange={() => handleSelectLocation(location.location_id)}
                                />
                                <label htmlFor={`location-${location.location_id}`}>
                                    <span className="location-name">{location.city}</span>
                                    <span className="location-code">{location.dbc}</span>
                                    <label className="location-id">-{location.location_id}</label>
                                </label>

                            </div>

                        ))}
                    </div>
                    <button onClick={handleSubmit} className="submit-btn">
                        Assign Location
                    </button>
                </div>

                <div>
                    <h1>Location List style</h1>
                    <div className="divider" />
                    <div className="location-list">
                        {locList.map((location) => (
                            <div>
                                <Form>
                                    <Form.Check type="switch" id="custom-radio" name="custom-radio" >
                                        <span className="location-name">{location.city}</span>
                                        <span className="location-code">{location.dbc}</span>
                                        <label className="location-id">-{location.location_id}</label>
                                    </Form.Check>
                                </Form>
                            </div>
                        ))}</div>
                </div>
                <div classname="location-details">
                    <h2>Selected Location Details:</h2>
                    {selectedLocation ? (
                        <div>
                            <p>Location ID: {selectedLocation}</p>
                            <p>City: {locList.find(loc => loc.location_id === selectedLocation)?.city}</p>
                            <p>BDC: {locList.find(loc => loc.location_id === selectedLocation)?.bdc}</p>
                        </div>
                    ) : (
                        <p>No location selected.</p>
                    )}
                </div>
            </Container >
        </Fragment >
    );
    }

}