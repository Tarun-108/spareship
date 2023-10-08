import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    List, ListItem
} from "@material-tailwind/react";
import { useState } from "react";



const CustomerSupportCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const cardData = data;

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
                    <List>
                        {cardData.workOrderSpareParts.map((sparePartData, index) => {
                            return (
                                <ListItem key={sparePartData.sparePart.skuId}>
                                    <div className="flex">
                                        <div>
                                            <Typography variant="h6" color="blue-gray">
                                                {sparePartData.sparePart.category}
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                {sparePartData.sparePart.description}
                                            </Typography>
                                        </div>
                                    </div>
                                </ListItem>
                            )
                        })}
                    </List>
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
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default CustomerSupportCard;