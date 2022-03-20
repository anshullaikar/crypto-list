import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";
import PaginatedTable from "./PaginatedTable";
function App() {
    const [settings, setSettings] = useState(null); 
    const [coinData, setCoinData] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const { isLoading, error, data } = useQuery(
        "repoData",
        () =>
            fetch("http://localhost:5000/data").then((response) =>
                response.json()
            ),
        {
            refetchInterval: 2000,
            onSuccess: (data) => {
                let dataToSet = data.data.coins;
                if (settings) {
                    if (settings.type == "asc") {
                        setCoinData(
                            dataToSet.sort(function (a, b) {
                                return a[settings.value] - b[settings.value];
                            })
                        );
                    } else if (settings.type == "desc") {
                        setCoinData(
                            dataToSet.sort(function (a, b) {
                                return b[settings.value] - a[settings.value];
                            })
                        );
                    }
                } else setCoinData(dataToSet);
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
            {searchValue === "" ? (
                <PaginatedTable
                    itemsPerPage={10}
                    data={coinData}
                    setSettings={setSettings}
                />
            ) : (
                <PaginatedTable
                    itemsPerPage={10}
                    data={coinData.filter((elem) => {
                        return (
                            elem.name
                                .toLowerCase()
                                .includes(searchValue.toLowerCase()) ||
                            elem.symbol
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        );
                    })}
                    setSettings={setSettings}
                />
            )}

            {/* {console.log(coinData)} */}
        </div>
    );
}

export default App;
