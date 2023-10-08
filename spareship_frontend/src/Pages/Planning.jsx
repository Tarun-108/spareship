import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { workOrders } from "../data/data";
import NavBar from "../Components/StdNavBar";
import PlanningOrderCard from "../Components/PlanningOrderCard";
import { API_URL } from "../constants";


const Planning = () => {
    const [dispatchOrders, setDispatchOrders] = useState([])

    const fetchDispatchOrders = async () => {
        const resposne = await axios.get(`${API_URL}/planning_team/get_dispatches`);
        if (resposne.status !== 200) {
            alert("error");
        } else {
            setDispatchOrders(resposne.data)
        }
    }

    useEffect(() => {
        fetchDispatchOrders();
    }, [])

    return (
        <div className="App" >
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
                                {dispatchOrders.filter((dispatchOrder => dispatchOrder.status === "ALLOTTED")).map((dispatchOrder) => {
                                    return (
                                        <PlanningOrderCard
                                            key={dispatchOrder.dispatchId}
                                            data={dispatchOrder}
                                        />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        <TabPanel key={"unalloted"} value={"unalloted"}>
                            <div>
                                {dispatchOrders.filter((dispatchOrder => dispatchOrder.status !== "ALLOTTED")).map((dispatchOrder) => {
                                    return (
                                        <PlanningOrderCard
                                            key={dispatchOrder.id}
                                            data={dispatchOrder}
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