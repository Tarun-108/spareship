import { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import NavBar from "../Components/StdNavBar"
import DispatchOrderCard from "../Components/DispatchOrderCard";
import { dispatchOrders } from "../data/data";
import { API_URL } from "../constants";


const ServiceCenterInventoryPage = () => {
    const [serviceCenterId, setServiceCenterId] = useState(localStorage.getItem("user"));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [items, setItems] = useState([]);
    const [dispatchOrders, setDispatchOrders] = useState([]);

    const fetchItems = async () => {
        const response = await axios.get(`${API_URL}/service_center/inventory`, { params: { email: email } })
        if (response.status !== 200) {
            alert("error!")
        } else {
            setItems(response.data)
        }
    }

    const fetchDispatchOrders = async () => {
        const response = await axios.get(`${API_URL}/service_center/get_dispatches`, { params: { serviceCenterId: serviceCenterId } });
        if (response.status !== 200) {
            alert("error")
        } else {
            setDispatchOrders(response.data)
        }
    }

    useEffect(() => {
        fetchItems();
        fetchDispatchOrders()
    }, [])

    return (
        <div className="App">
            <NavBar />
            <div className="m-10">
                <Tabs value="html" >
                    <TabsHeader className="border">
                        <Tab key={"items"} value={"items"}>
                            Inventory Items
                        </Tab>
                        <Tab key={"dispatchOrders"} value={"dispatchOrders"}>
                            Dispatch Orders
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel key={"items"} value={"items"}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Item</TableCell>
                                            <TableCell align="right">Category</TableCell>
                                            <TableCell align="right">Quantity</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {items.map((item) => (
                                            <TableRow
                                                key={item.skuId}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.description}
                                                </TableCell>
                                                <TableCell align="right">{item.category}</TableCell>
                                                <TableCell align="right">{item.quantity}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel key={"dispatchOrders"} value={"dispatchOrders"}>
                            {dispatchOrders.map((dispatchOrder) => {
                                return (
                                    <DispatchOrderCard
                                        key={dispatchOrder.dispatchId}
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