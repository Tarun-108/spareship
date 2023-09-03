import PlanningOrderCard from "../Components/PlanningOrderCard";
import NavBar from "../Components/StdNavBar";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const Planning = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="m-10">
                <Tabs value="html" >
                    <TabsHeader className="border">
                        <Tab key={"alloted"} value={"alloted"}>
                            Alloted Orders
                        </Tab>
                        <Tab key={"unalloted"} value={"unalloted"}>
                            Unalloted Orders
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel key={"alloted"} value={"alloted"}>
                            <div>
                                <PlanningOrderCard />
                            </div>
                        </TabPanel>
                        <TabPanel key={"unalloted"} value={"unalloted"}>
                            <div>
                                <PlanningOrderCard />
                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

export default Planning;