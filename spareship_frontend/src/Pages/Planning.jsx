import PlanningOrderCard from "../Components/PlanningOrderCard";
import NavBar from "../Components/StdNavBar";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { workOrders } from "../data/data";

const Planning = () => {

    return (
        <div className="App">
            <NavBar />
            <div className="m-10">
                <Tabs value="html">
                    <TabsHeader className="border">
                        <Tab key={"unalloted"} value={"unalloted"}>
                            Unalloted Orders
                        </Tab>
                        <Tab key={"alloted"} value={"alloted"}>
                            Alloted Orders
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel key={"alloted"} value={"alloted"}>
                            <div>
                                {workOrders.filter((workOrder => workOrder.status === "ALLOTTED")).map((workOrder) => {
                                    return (
                                        <PlanningOrderCard
                                            key={workOrder.id}
                                            data={workOrder}
                                        />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        <TabPanel key={"unalloted"} value={"unalloted"}>
                            <div>
                                {workOrders.filter((workOrder => workOrder.status !== "ALLOTTED")).map((workOrder) => {
                                    return (
                                        <PlanningOrderCard
                                            key={workOrder.id}
                                            data={workOrder}
                                        />
                                    )
                                })}
                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

export default Planning;