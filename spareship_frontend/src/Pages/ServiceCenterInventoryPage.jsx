import ListWithBadge from "../Components/ListWithBadge"
import NavBar from "../Components/StdNavBar"
import DispatchOrderCard from "../Components/DispatchOrderCard";
import { dispatchOrders, mockAllProducts } from "../data/data";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const ServiceCenterInventoryPage = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="m-10">
                <Tabs value="html" >
                    <TabsHeader className="border">
                        <Tab key={"products"} value={"products"}>
                            Products
                        </Tab>
                        <Tab key={"spareParts"} value={"spareParts"}>
                            Spare Parts
                        </Tab>
                        <Tab key={"dispatchOrders"} value={"dispatchOrders"}>
                            Dispatch Orders
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel key={"products"} value={"products"}>
                            <div>
                                <ListWithBadge data={mockAllProducts} />
                            </div>
                        </TabPanel>
                        <TabPanel key={"spareParts"} value={"spareParts"}>
                            <div>
                                <ListWithBadge data={mockAllProducts[1].spare_parts} />
                            </div>
                        </TabPanel>
                        <TabPanel key={"dispatchOrders"} value={"dispatchOrders"}>
                            {dispatchOrders.map((dispatchOrder) => {
                                return (
                                    <DispatchOrderCard
                                        key={dispatchOrder.id}
                                        data={dispatchOrder}
                                    />
                                )
                            })}
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div >
    )
}

export default ServiceCenterInventoryPage