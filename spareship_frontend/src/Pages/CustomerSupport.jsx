import NavBar from "../Components/StdNavBar"
import CustomerSupportCard from "../Components/CustomerSupportCard"
import { workOrders } from "../data/data"

const CustomerSupport = () => {
    return (
        <div className="App">
            <NavBar />
            <div>
                <div className="m-10">
                    <div className="text-3xl font-semibold">
                        Orders
                    </div>
                </div>
            </div>
            <div>
                {workOrders.map((data) => {
                    return (
                        <CustomerSupportCard
                            key={data.id}
                            data={data}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default CustomerSupport