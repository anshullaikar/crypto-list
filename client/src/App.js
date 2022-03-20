import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";
import Table from "./table";
function App() {
    const [coinData, setCoinData] = useState({});
    const [pageLimit, setPageLimit] = useState(0);
    const [page, setPage] = useState(0);
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
                setPageLimit(data);
            },
        }
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="App-header">
            <Table data={coinData.data.coins} />
            {/* {console.log(coinData)} */}
        </div>
    );
}

export default App;
