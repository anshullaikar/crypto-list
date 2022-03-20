import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";
import PaginatedTable from "./PaginatedTable";
function App() {
    const [coinData, setCoinData] = useState(null);
    const { isLoading, error, data } = useQuery(
        "repoData",
        () =>
            fetch("http://localhost:5000/testing").then((response) =>
                response.json()
            ),
        {
            refetchInterval: 2000,
            onSuccess: (data) => {
                setCoinData(data);
            },
        }
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="App-header">
            <PaginatedTable itemsPerPage={10} data={coinData.data.coins} />
            {/* {console.log(coinData)} */}
        </div>
    );
}

export default App;
