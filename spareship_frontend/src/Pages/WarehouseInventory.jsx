import ListWithBadge from "../Components/ListWithBadge"
import NavBar from "../Components/StdNavBar"
import { mockAllProducts } from "../data/data";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const WarehouseInventory = () => {
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
                    </TabsBody>
                </Tabs>
            </div>
        </div >
    )
}

export default WarehouseInventory