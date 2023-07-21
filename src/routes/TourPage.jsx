import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function TourPage() {
  const { id } = useParams();

  const getData = async (destination) => {
    const res = await fetch(
      `../../resources/api/dataDetails/${destination}.json`
    );
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(id);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>tourPage {id}</div>;
}
