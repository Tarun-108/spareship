import ComplaintCard from '../Components/ComplaintCard'
import NavBar from '../Components/StdNavBar'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { workOrders } from '../data/data'

const ServiceCenterPage = () => {
    let navigate = useNavigate();

    const handleOpenComplaintForm = () => {
        navigate("/service-center/complaint");
    }

    const handleOpenInventory = () => {
        navigate("/service-center/inventory");
    }

    return (
        <div className="App">
            <NavBar />
            <div className="">
                <div className="flex justify-between m-10">
                    <div className="text-3xl font-semibold">
                        Active Complaints
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
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                            onClick={handleOpenComplaintForm}
                        >
                            <span>Register Complaint</span>
                        </Button>
                    </div>
                </div>
                <div>
                    {workOrders.map((data) => {
                        return (
                            <ComplaintCard
                                key={data.id}
                                data={data}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ServiceCenterPage