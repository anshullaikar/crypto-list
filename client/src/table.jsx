function Table({data}) {
    return (<table>
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
            {data &&
                data.map((elem, index) => {
                    return (
                        <tr key={index}>
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
    </table>);
}

export default Table;