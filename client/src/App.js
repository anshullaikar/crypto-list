import "./App.css";
import { useQuery } from "react-query";

function App() {
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("http://localhost:5000/express_backend").then((response) =>
            response.json()
        )
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="App-header">
            <div></div>
            {console.log(data)}
        </div>
    );
}

export default App;
