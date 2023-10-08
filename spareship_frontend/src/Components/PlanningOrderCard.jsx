import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardFooter, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, List, ListItem, ListItemSuffix } from "@material-tailwind/react";
import Select from 'react-select'
import { API_URL } from "../constants";



const PlanningOrderCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [warehouses, setWarehouses] = useState([])
    const [options, setOptions] = useState([])
    const [selectedWarehouse, setSelectedWarehouse] = useState(null)
    const handleOpen = () => setOpen(!open);
    const cardData = data

    const fetchWarehouses = async () => {
        const response = await axios.get(`${API_URL}/planning_team/get_warehouses`, {
            params: { dispatchId: cardData.dispatchId }
        });
        if (response.status !== 200) {
            alert("error")
        } else {
            const arr = [];
            response.data.forEach((warehouse) => {
                arr.push({ value: warehouse.warehouseId, label: `${warehouse.addressStr}(${warehouse.zone})` })
            })
            setOptions(arr)
            setWarehouses(response.data)
        }
    }

    useEffect(() => {
        fetchWarehouses();
    }, [])

    const handleAllot = async () => {
        const response = await axios.get(`${API_URL}/planning_team/set_warehouse`, {
            params: {
                dispatchId: cardData.dispatchId,
                warehouseId: selectedWarehouse
            }
        });
        if (response.status !== 200) {
            alert("error")
        } else {
            alert("Alloted!")
            window.location.reload();
        }
    }

    return (
        <div>
            <Card className="m-10">
                <CardBody>
                    <div className="flex justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {cardData.sparePart.description},&nbsp;<span className="font-light">{`Dispatch#${cardData.dispatchId}`}</span>
                        </Typography>
                        <Typography>
                            {cardData.status}
                        </Typography>
                    </div>
                    <Typography>
                        {cardData.sparePart.category}
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
                            {cardData.sparePart.description},&nbsp;<span className="font-light">{`Dispatch#${cardData.dispatchId}`}</span>
                        </Typography>
                    </div>
                </DialogHeader>
                <DialogBody divider>
                    <Typography>
                        Status: {cardData.status}
                    </Typography>
                    <Typography className="mb-4">
                        Service Center: {`${cardData.serviceCenter.addressStr}, ${cardData.serviceCenter.pinCode} (${cardData.serviceCenter.zone}) `}
                    </Typography>
                    <hr />
                    <Typography className="text-2xl font-bold my-3">
                        Requirements
                    </Typography>

                    <div key={cardData.sparePart.skuId}>
                        <div className="flex">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    {cardData.sparePart.category}
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    {cardData.sparePart.description}
                                </Typography>
                            </div>
                        </div>
                        {cardData.status !== "ALLOTTED" ?
                            <Select className="mt-2" value={options.filter(option => option.value === selectedWarehouse)[0]} label="Select Warehouse" options={options} onChange={(e) => setSelectedWarehouse(e.value)} />
                            :
                            <Typography className="mt-2">
                                Warehouse: {`${cardData.warehouse.addressStr}, ${cardData.warehouse.pinCode} (${cardData.warehouse.zone}) `}
                            </Typography>
                        }
                    </div>
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
                    {cardData.status !== "ALLOTTED" &&
                        <Button variant="gradient" color="green" onClick={handleAllot}>
                            <span>Allot</span>
                        </Button>}
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default PlanningOrderCard;