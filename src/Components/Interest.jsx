import { useState, useEffect } from "react";
import Card from "./Card";

const Interest = () => {
  const [storedData, setStoredData] = useState([]);
  useEffect(() => {
    const savedData = localStorage.getItem("formDataArray");
    if (savedData) {
      setStoredData(JSON.parse(savedData));
    }
  }, []);
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex items-center justify-center py-2">
          <p className="text-2xl tracking-wider uppercase font-semibold">
            Added Users Data
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {storedData.length > 0 ? (
            <ul>
              {storedData.map((data, index) => (
                <Card data={data} key={index} />
              ))}
            </ul>
          ) : (
            <p>No data found in localStorage</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Interest;
