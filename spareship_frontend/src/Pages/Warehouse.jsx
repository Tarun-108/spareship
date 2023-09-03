import NavBar from "../Components/StdNavBar";
import WarehouseCard from "../Components/WarehouseCard";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { dispatchOrders } from "../data/data";

const Warehouse = () => {
    let navigate = useNavigate();

    const handleOpenInventory = () => {
        navigate("/warehouse/inventory");
    }

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
                {dispatchOrders.map((data) => {
                    return (
                        <WarehouseCard
                            key={data.id}
                            data={data}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Warehouse;

