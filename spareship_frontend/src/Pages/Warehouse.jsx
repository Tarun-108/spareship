import NavBar from "../Components/StdNavBar";
import WarehouseCard from "../Components/WarehouseCard";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

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
                <WarehouseCard />
            </div>
        </div>
    )
}

export default Warehouse;

