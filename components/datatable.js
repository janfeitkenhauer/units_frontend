'use client'

import DataConverter from "./dataconverter";
import React, { useState, useEffect } from 'react';

const DataTable = () => {
    const [tableData, setTableData] = useState([]);
    const [iconStates, setIconStates] = useState({}); // State to track the icon display state for each button

    const columns = ['IRI', 'prefLabel', 'notation', 'conversionMultiplier'];

    const handleClick = (rowIndex, buttonType, text, event) => {
        event.stopPropagation();

        // Copy the text to the clipboard
        navigator.clipboard.writeText(text).then(() => {
            setIconStates((prev) => ({
                ...prev,
                [`${rowIndex}_${buttonType}`]: false // Change the state for this specific button
            }));

            setTimeout(() => {
                setIconStates((prev) => ({
                    ...prev,
                    [`${rowIndex}_${buttonType}`]: true // Reset the state for this specific button
                }));
            }, 800);
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };

    useEffect(() => {
        // Initialize iconStates for all data rows to true (show the first icon)
        const initialIconStates = {};
        tableData.forEach((_, index) => {
            initialIconStates[`${index}_iri`] = true; // State for IRI button
            initialIconStates[`${index}_conversion`] = true; // State for conversionMultiplier button
        });
        setIconStates(initialIconStates);
    }, [tableData]);

    const recalculateFactor = (clickedRowMultiplier) => {
        const recalculatedData = tableData.map(row => ({
            ...row,
            conversionMultiplier: (row.conversionMultiplier * 1e+0) / clickedRowMultiplier
        }));

        setTableData(recalculatedData);
    };

    return (
        <div className="container mx-auto">
            <DataConverter setTableData={setTableData} columns={columns}/>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded border-collapse">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th 
                                    key={column}
                                    className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length > 0 ? (
                            tableData.map((row, index) => (
                                <tr 
                                    key={index} 
                                    className={`hover:bg-green-200 ${Number(row.conversionMultiplier) === 1e+0 ? 'bg-green-100' : ''}`}
                                    onClick={() => recalculateFactor(Number(row.conversionMultiplier))}
                                >
                                    {columns.map((column) => (
                                        <td 
                                            key={column}
                                            className="px-4 py-2 border-b text-sm text-gray-700"
                                        >
                                            {column === "IRI" ? (
                                                <div className="flex justify-between items-center">
                                                    {row[column]}
                                                    <button 
                                                        onClick={(event) => handleClick(index, 'iri', row[column], event)}
                                                        className="ml-1 hover:bg-black/20 p-1 rounded-md"
                                                        title="Copy"
                                                    >
                                                        {iconStates[`${index}_iri`] ? (
                                                            <svg
                                                                fill="none"
                                                                height="24"
                                                                shapeRendering="geometricPrecision"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.5"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                aria-hidden="true"
                                                                className="w-5 h-5"
                                                            >
                                                                <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                fill="none"
                                                                height="24"
                                                                shapeRendering="geometricPrecision"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.5"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                aria-hidden="true"
                                                                className="w-5 h-5"
                                                            >
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                            ) : column === "conversionMultiplier" ? (
                                                <div className="flex justify-between items-center">
                                                    {Number(row[column]).toExponential()}
                                                    <button 
                                                        onClick={(event) => handleClick(index, 'conversion', row[column], event)}
                                                        className="ml-1 hover:bg-black/20 p-1 rounded-md"
                                                        title="Copy"
                                                    >
                                                        {iconStates[`${index}_conversion`] ? (
                                                            <svg
                                                                fill="none"
                                                                height="24"
                                                                shapeRendering="geometricPrecision"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.5"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                aria-hidden="true"
                                                                className="w-5 h-5"
                                                            >
                                                                <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                fill="none"
                                                                height="24"
                                                                shapeRendering="geometricPrecision"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.5"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                aria-hidden="true"
                                                                className="w-5 h-5"
                                                            >
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                            ) : Array.isArray(row[column])
                                                ? row[column].join(', ')
                                                : row[column]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td 
                                    colSpan={columns.length}
                                    className="px-4 py-2 text-center text-sm text-gray-500"
                                >
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
