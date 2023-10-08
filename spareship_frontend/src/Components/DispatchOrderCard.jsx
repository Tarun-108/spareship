import axios from "axios";
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { API_URL } from "../constants";



const DispatchOrderCard = ({ data }) => {

    const handleReceive = async () => {
        const response = await axios.get(`${API_URL}/service_center/update_dispatch`, {
            params: {
                serviceCenterId: localStorage.getItem("user"),
                dispatchId: data.dispatchId,
            }
        })
        if (response.status !== 200) {
            alert("error")
        } else {
            alert("success");
        }
    }

    return (
        <div>
            <Card className="m-10">
                <CardBody>
                    <div className="flex justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            <span className="font-light">{`Order#${data.dispatchId}`}</span>
                        </Typography>
                        <Typography>
                            {data.status}
                        </Typography>
                    </div>
                    <Typography>
                        Warehouse: {`${data.warehouse?.addressStr}, ${data.warehouse?.pinCode} (${data.warehouse?.zone})`}
                    </Typography>
                    <TableContainer component={Paper} className="mt-5">
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    key={data.sparePart.skuId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {data.sparePart.description}
                                    </TableCell>
                                    <TableCell align="right">{data.sparePart.category}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={handleReceive}>Receive</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default DispatchOrderCard;