import { useState, useEffect } from "react";

const DataFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const searchData = async () => {
      const data = await fetch(url);
      const dataJson = await data.json();
      setData(dataJson[0]);
    };
    searchData();
  }, []);
  return data;
};
export default DataFetch;
