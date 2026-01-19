import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Report() {
    const [selectedReport, setSelectedReport] = useState(null);
    const candidates = useSelector((state) => state.db.candidates || []);

    const hireReports = candidates.filter((candidate) => candidate.hired);

    return (
        <div className="report-container" style={{ padding: '20px' }}>
            <h1>Welcome to Reports</h1>
            <p>Select a candidate hire report to view details</p>

            <div className="report-selector">
                <label htmlFor="candidate-select">Choose a Candidate: </label>
                <select
                    id="candidate-select"
                    value={selectedReport || ''}
                    onChange={(e) => setSelectedReport(e.target.value)}
                >
                    <option value="">-- Select a Candidate --</option>
                    {hireReports.map((candidate) => (
                        <option key={candidate.id} value={candidate.id}>
                            {candidate.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedReport && (
                <div className="report-details" style={{ marginTop: '20px' }}>
                    {hireReports
                        .filter((c) => c.id === selectedReport)
                        .map((candidate) => (
                            <div key={candidate.id}>
                                <h2>{candidate.name}</h2>
                                <p><strong>Position:</strong> {candidate.position}</p>
                                <p><strong>Hire Date:</strong> {candidate.hireDate}</p>
                                <p><strong>Status:</strong> {candidate.status}</p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}