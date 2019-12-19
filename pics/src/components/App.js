import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
                params: { query: term },
                headers: {
                    Authorization:
                        "Client-ID a1e2c3dbc042941beb0a37e8ef03858abc0e6a7a8780b905c9890c509b9b8670"
                }
            }
        );

        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
