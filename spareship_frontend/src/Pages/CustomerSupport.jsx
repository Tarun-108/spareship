import NavBar from "../Components/StdNavBar"
import CustomerSupportCard from "../Components/CustomerSupportCard"

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
                <CustomerSupportCard />
            </div>
        </div>
    )
}

export default CustomerSupport