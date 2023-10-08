import { useState, useEffect } from "react"
import NavBar from "../Components/StdNavBar"
import { Typography } from "@mui/material";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { API_URL } from "../constants";

const WarehouseInventory = () => {
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await axios.get(`${API_URL}/warehouse/inventory`, { params: { email: email } })
        if (response.status !== 200) {
            alert("error!")
        } else {
            setItems(response.data)
        }
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return (
        <div className="App">
            <NavBar />
            <div className="m-10">
                <Typography variant="h4" className="pb-10" color="blue-gray">
                    Inventory Items
                </Typography>
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
            </div>
        </div >
    )
}

export default WarehouseInventory