import ComplaintCard from '../Components/ComplaintCard'
import NavBar from '../Components/StdNavBar'
import axios from 'axios'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../constants'
import { useEffect, useState } from 'react'

const ServiceCenterPage = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [workOrders, setWorkOrders] = useState([]);

    const handleOpenComplaintForm = () => {
        navigate("/service-center/complaint");
    }

    const handleOpenInventory = () => {
        navigate("/service-center/inventory");
    }

    const fetchWorkOrders = async () => {
        const response = await axios.get(`${API_URL}/service_center/get_work_orders`, { params: { email: email } })
        if (response.status !== 200) {
            alert("error!")
        } else {
            setWorkOrders(response.data)
        }
    }

    useEffect(() => {
        fetchWorkOrders()
    }, [])


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
                    {workOrders.map((order) => {
                        return (
                            <ComplaintCard
                                key={order.workOrderId}
                                data={order}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ServiceCenterPage