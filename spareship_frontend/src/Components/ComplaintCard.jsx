import { useState } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardBody, CardFooter, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { API_URL } from "../constants";

const columns = [
    { field: 'item', headerName: 'Item', width: 340 },
    { field: 'category', headerName: 'Category', width: 250 },
    { field: 'availability', headerName: 'Availability', width: 160 }
]

const ComplaintCard = ({ data }) => {
    const cardData = data;
    const [open, setOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState(
        cardData.workOrderSpareParts.map(sparePartData => {
            if (sparePartData.requirementStatus !== "REQUIRED") {
                return sparePartData.sparePart.skuId
            }
            return;
        }));
    const [rows, setRows] = useState(cardData.workOrderSpareParts.map(sparePartData => {
        return {
            id: sparePartData.sparePart.skuId,
            item: sparePartData.sparePart.description,
            category: sparePartData.sparePart.category,
            availability: sparePartData.available ? "Available" : "Not Available",
        }
    }));

    const handleSparePartsChange = (selectedIds) => {
        setSelectedIds(selectedIds);
    }

    const handleOpen = () => setOpen(!open);

    const updateWorkOrder = async () => {
        const payload = {
            serviceCenterId: localStorage.getItem("user"),
            workOrderId: cardData.workOrderId,
            skuIds: selectedIds,
        }
        const response = await axios.post(`${API_URL}/service_center/update_work_order`, payload)
        if (response.status !== 200) {
            alert("error!");
        } else {
            setOpen(!open)
            alert("success!");
        }

    }

    return (
        <div>
            <Card className="m-10">
                <CardBody>
                    <div className="flex justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {cardData.customerName},&nbsp;<span className="font-light">{`Complaint#${cardData.workOrderId}`}</span>
                        </Typography>
                        <Typography>
                            {cardData.status}
                        </Typography>
                    </div>
                    <Typography>
                        {cardData.product.productName}
                    </Typography>
                    <Typography>
                        {cardData.description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={handleOpen}>View More</Button>
                </CardFooter>
            </Card>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    <div>
                        <Typography variant="h5" color="blue-gray" className="">
                            {cardData.customerName},&nbsp;<span className="font-light">{`Complaint#${cardData.workOrderId}`}</span>
                        </Typography>
                        <Typography>
                            {cardData.customerContact}
                        </Typography>
                    </div>
                </DialogHeader>
                <DialogBody divider>
                    <Typography>
                        Status: {cardData.status}
                    </Typography>
                    <Typography>
                        Product: {cardData.product.productName}
                    </Typography>
                    <Typography className="mb-4">
                        Description: {cardData.description}
                    </Typography>
                    <hr />
                    <Typography className="text-2xl font-bold my-3">
                        Requirements
                    </Typography>
                    <DataGrid {...selectedIds} rows={rows} columns={columns} checkboxSelection onRowSelectionModelChange={handleSparePartsChange} hideFooter isRowSelectable={(params) => !params.row.availability} />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={updateWorkOrder}>
                        <span>Update</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default ComplaintCard;