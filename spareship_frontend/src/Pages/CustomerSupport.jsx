import { useState, useEffect } from "react";
import NavBar from "../Components/StdNavBar"
import axios from "axios";
import CustomerSupportCard from "../Components/CustomerSupportCard"
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { API_URL } from "../constants";


const SearchBar = ({ setSearchQuery }) => (
    <form>
        <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
                setSearchQuery(e.target.value);
            }}
            label=""
            variant="outlined"
            placeholder="Search..."
            size="small"
        />
        <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "black" }} />
        </IconButton>
    </form>
);

const CustomerSupport = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [workOrders, setWorkOrders] = useState([]);
    const [filteredWorkOrders, setFilteredWorkOrders] = useState([]);

    useEffect(() => {
        if (!searchQuery) {
            setFilteredWorkOrders(workOrders)
        } else {
            setFilteredWorkOrders(workOrders.filter((order) => order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || order.customerContact.includes(searchQuery)))
        }
    }, [searchQuery, workOrders])

    const fetchWorkOrders = async () => {
        const response = await axios.get(`${API_URL}/customer_support/get_work_orders`)
        if (response.status !== 200) {
            alert("error!")
        } else {
            setWorkOrders(response.data)
        }
    }

    useEffect(() => {
        fetchWorkOrders();
    }, [])

    return (
        <div className="App">
            <NavBar />
            <div>
                <div className="m-10 flex justify-between">
                    <div className="text-3xl font-semibold">
                        Orders
                    </div>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
            </div>
            <div>
                {filteredWorkOrders.map((order) => {
                    return (
                        <CustomerSupportCard
                            key={order.workOrderId}
                            data={order}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default CustomerSupport