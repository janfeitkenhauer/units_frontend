'use client';

import { useState, useEffect } from "react";

const DataConverter = ({ setTableData, columns }) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/unit.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log(data)
                // Populate setTableData
                const conversionData = Object.keys(data).map(key => {
                    const entry = data[key];
                    const row = {};
                  
                    // Populate the IRI column with the current key
                    row['IRI'] = key;

                    columns.slice(1).forEach(column => { // Start from index 1 to skip IRI
                        // Set the value, if it exists, otherwise set it to null or an appropriate default value
                        row[column] = entry[column] !== undefined ? entry[column] : null;
                    });
                
                    return row;
                });
                
                setTableData(conversionData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [setTableData]); // Make sure to include setTableData in the dependency array

    if (error) return <div>Error: {error}</div>;
};

export default DataConverter;
