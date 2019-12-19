import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID a1e2c3dbc042941beb0a37e8ef03858abc0e6a7a8780b905c9890c509b9b8670"
    }
});
