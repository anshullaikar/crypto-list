import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";
import PaginatedTable from "./PaginatedTable";
function App() {
    const [coinData, setCoinData] = useState(null);
    const [searchValue, setSearchValue] = useState("");
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

    let handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="App-header">
            <h1 style={{ color: "white" }}>Top CryptoCurrency List</h1>
            <input
                value={searchValue}
                onChange={handleChange}
                type="text"
                name="search"
                id="search-bar"
            />
            {console.log(searchValue == "", coinData.data.coins[0].name.includes(searchValue))}
            {console.log(coinData.data.coins.filter((elem) => {
                        return (
                            elem.name.includes(searchValue) ||
                            elem.symbol.includes(searchValue)
                        );
                    }))}
            {searchValue == "" ? (
                <PaginatedTable itemsPerPage={10} data={coinData.data.coins} />
            ) : (
                <PaginatedTable
                    itemsPerPage={10}
                    data={coinData.data.coins.filter((elem) => {
                        return (
                            elem.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                            elem.symbol.toLowerCase().includes(searchValue.toLowerCase())
                        );
                    })}
                />
            )}

            {/* {console.log(coinData)} */}
        </div>
    );
}

export default App;
