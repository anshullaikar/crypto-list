import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";
function App() {
    const [coinData, setCoinData] = useState({});
    const { isLoading, error, data } = useQuery(
        "repoData",
        () =>
            fetch("http://localhost:5000/testing").then((response) =>
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
            <table>
                <thead>
                    <tr>
                        <th>Currency Rank</th>
                        <th>Currency Name</th>
                        <th>Currency Symbol</th>
                        <th>Currency Price</th>
                        <th>Currency Price Change</th>
                    </tr>
                </thead>
                <tbody>
                    {coinData.data.coins &&
                        coinData.data.coins.map((elem, index) => {
                            return (
                                <tr key ={index}>
                                    <td data-column="Currency Rank">
                                        {elem.rank}
                                    </td>
                                    <td data-column="Currency Name">
                                        {elem.name}
                                    </td>
                                    <td data-column="Currency Symbol">
                                        {elem.symbol}
                                    </td>
                                    <td data-column="Currency Price">
                                        {elem.price}
                                    </td>
                                    <td data-column="Currency Price Change">
                                        {elem.change}%
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {/* {console.log(coinData)} */}
        </div>
    );
}

export default App;
