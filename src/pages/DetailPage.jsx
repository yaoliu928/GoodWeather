import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [forecast, setForecast] = useState([]);

  useEffect((

  ) => { }, [])
  return (
    <div>
      DetailPage{id}
      <div>
        <button>Remove</button>
        <Link to="/">Close</Link>
      </div>
    </div>
  );
}

export default DetailPage;