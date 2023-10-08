import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";


const WarehouseCard = ({ data }) => {

    const handleDispatch = async () => {
        const response = await axios.get(`${API_URL}/warehouse/update_dispatch`, {
            params: { dispatchId: data.dispatchId }
        })
        if (response.status !== 200) {
            alert("error")
        } else {
            alert("success");
            window.location.reload();
        }
    }

    return (
        <div>
            <Card className="m-10">
                <CardBody>
                    <div className="flex justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            <span className="font-light">{`Dispatch#${data.dispatchId}`}</span>
                        </Typography>
                        <Typography>
                            {data.status}
                        </Typography>
                    </div>
                    <Typography>
                        Service Center: {`${data.serviceCenter?.addressStr}, ${data.serviceCenter?.pinCode} (${data.serviceCenter?.zone})`}
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
                    <Button onClick={handleDispatch}>Dispatch</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default WarehouseCard;