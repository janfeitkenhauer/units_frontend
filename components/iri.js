// Iri Component
'use client'

const Iri = ({ iri }) => {
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(iri).then(() => {
      alert('IRI copied to clipboard!');
    }, (err) => {
      console.error('Error copying text: ', err);
    });
  };

  return (
    <div>
      {/* Display the extracted IRI */}
      <div className="mb-4">
        <button
          onClick={copyToClipboard}
          className="ml-2 p-1 bg-gray-100 text-sm text-gray-800 rounded"
        >
          {iri}{' '}📋
        </button>
      </div>
    </div>
  );
};

export default Iri;
