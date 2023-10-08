import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/StdNavBar";
import WarehouseCard from "../Components/WarehouseCard";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { dispatchOrders } from "../data/data";
import { API_URL } from "../constants";

const Warehouse = () => {
    let navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    const handleOpenInventory = () => {
        navigate("/warehouse/inventory");
    }

    const fetchOrders = async () => {
        const response = await axios.get(`${API_URL}/warehouse/get_dispatches`, { params: { warehouseId: localStorage.getItem("user") } });
        if (response.status !== 200) {
            alert("error")
        } else {
            setOrders(response.data)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="App">
            <NavBar />
            <div className="flex justify-between m-10">
                <div className="text-3xl font-semibold">
                    Orders
                </div>
                <div className='flex gap-5'>
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block"
                        onClick={handleOpenInventory}
                    >
                        <span>Inventory</span>
                    </Button>
                </div>
            </div>
            <div>
                {orders.map((order) => {
                    return (
                        <WarehouseCard
                            key={order.dispatchId}
                            data={order}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Warehouse;

