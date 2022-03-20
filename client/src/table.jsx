function Table({ data, setSettings }) {
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ width: "75px" }}>Currency Rank</th>
                    <th style={{ width: "400px" }}>Currency Name</th>
                    <th style={{ width: "75px" }}>Currency Symbol</th>
                    <th>Currency Price</th>
                    <th>Currency Price Change</th>
                </tr>
                <tr>
                    <th style={{ width: "75px" }}>
                        <button
                            onClick={(event) =>
                                setSettings({ type: "asc", value: "rank" })
                            }
                        >
                            Asc.
                        </button>{" "}
                        <button
                            onClick={(event) =>
                                setSettings({ type: "desc", value: "rank" })
                            }
                        >
                            Desc.
                        </button>
                    </th>
                    <th style={{ width: "400px" }}></th>
                    <th style={{ width: "75px" }}></th>
                    <th>
                        <button
                            onClick={(event) =>
                                setSettings({ type: "asc", value: "price" })
                            }
                        >
                            Asc.
                        </button>{" "}
                        <button
                            onClick={(event) =>
                                setSettings({ type: "desc", value: "price" })
                            }
                        >
                            Desc.
                        </button>
                    </th>
                    <th>
                        <button
                            onClick={(event) =>
                                setSettings({ type: "asc", value: "change" })
                            }
                        >
                            Asc.
                        </button>{" "}
                        <button
                            onClick={(event) =>
                                setSettings({ type: "desc", value: "change" })
                            }
                        >
                            Desc.
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.map((elem, index) => {
                        return (
                            <tr key={index}>
                                <td data-column="Currency Rank">{elem.rank}</td>
                                <td data-column="Currency Name">{elem.name}</td>
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
    );
}

export default Table;
