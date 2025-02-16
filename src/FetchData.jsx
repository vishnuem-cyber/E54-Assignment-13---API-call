import React, { useState, useEffect } from "react";

const FetchData = ({ dataType }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setItems([]); 

    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/${dataType}`)
        .then(response => response.json())
        .then(data => {
          setItems(data.results || []);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 2000);  // Delay of 2 seconds

  }, [dataType]);

  return (
    <div>
      <h2>Selected Data Type: {dataType}</h2>
      {loading ? (
        <p style={{ color: "white", fontSize: "18px" }}>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} style={{ fontSize: "16px", margin: "5px 0" }}>
              {item.id} - {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
