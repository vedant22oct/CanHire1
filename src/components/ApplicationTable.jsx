import { AgGridReact } from 'ag-grid-react';
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux';

function ApplicationTable() {
    // Row Data: The data to be displayed.
    const applications = useSelector(store => store.db.applications)
    const [rowData, setRowData] = useState(applications || []);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "application_id", headerName: 'Application Id' },
        { field: "candidate_id", headerName: 'Candidate Id' },
        { field: "job_id", headerName: 'Job Id' },
        { field: "applied_on", headerName: 'Applied On' },
        { field: "status", headerName: 'Status' }
    ]);

    // default column definetin 
    const defaultColDef = useMemo(() => {
        return {
            filter: true,
        };
    }, []);

    return (
        <div style={{ height: 500 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                loading={false}
                defaultColDef={defaultColDef}
            />
        </div>
    )
}

export default ApplicationTable