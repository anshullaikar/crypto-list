import "./App.css";
import { useQuery } from "react-query";
import {useState} from "react"
function App() {
    const [coinData, setCoinData] = useState({});
    const { isLoading, error, data } = useQuery(
        "repoData",
        () =>
            fetch("http://localhost:5000/data").then((response) =>
                response.json()
            ),
        {
            refetchInterval: 2000,
            onSuccess: setCoinData,
        }
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="App-header">
            <div></div>
            {console.log(coinData)}
        </div>
    );
}

export default App;
