'use client'

import { useEffect, useState } from 'react';

const Data = ({ endpoint }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

    // Define an array of the columns you want to display
    const columnsToDisplay = ['prefLabel', 'notation', 'conversionMultiplier'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchData();
  }, [endpoint]);
  
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  // Extract the keys and values with custom header mapping
  const keyMapping = {
    prefLabel: 'Label',
    notation: 'Notation',
    // Add more mappings as needed
  };

  // List of characters to exclude
const excludedCharacters = ['#', '/', '@', '!'];

  const getNotationValues = (array) => {
    return array
      .filter(([key]) => key === 'notation')
      .map(([, value]) => value)
      .filter(value => !excludedCharacters.some(char => value.includes(char))) // Filter out values containing any excluded characters
      .join(', ');
  };

  // Extract desired values based on the columnsToDisplay array
  const extractValues = (array) => {
    const result = {};
    columnsToDisplay.forEach((key) => {
      if (key === 'notation') {
        result['Notation'] = getNotationValues(array);
      } else {
        const entry = array.find(([k]) => k === key);
        if (entry) {
          if (key === 'conversionMultiplier') {
            result[keyMapping[key] || key] = parseFloat(entry[1]).toExponential();
          } else {
            result[keyMapping[key] || key] = entry[1];
          }
        } else {
          result[key] = ''; // Ensure keys from columnsToDisplay always exist even if not found in data
        }
      }
    });
    return result;
  };

  // Prepare all rows data
  const rowsData = Object.entries(data).map(([, value]) => extractValues(value));

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columnsToDisplay.map((key, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {keyMapping[key] || key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsData.map((rowData, rowIndex) => (
            <tr key={rowIndex} className="bg-white">
              {columnsToDisplay.map((key, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 text-sm text-gray-900 border-t border-gray-200"
                >
                  {String(rowData[keyMapping[key] || key] || '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
