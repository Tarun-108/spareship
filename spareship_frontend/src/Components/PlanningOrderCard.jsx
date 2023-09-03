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
    List, ListItem, ListItemSuffix, Select, Option
} from "@material-tailwind/react";
import { useState } from "react";



const PlanningOrderCard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const sparePartData = {
        _id: "2344",
        category: "Screen",
        description: "Screen for iPhone 12",
        availablity: true,
        fulfilled: false,
    }

    const cardData = {
        _id: "237",
        complainerName: "Tarun Srivastava",
        status: "Registered",
        description: "Defect in screen",
        contact: "1234567890",
        productName: "iphone12",
        requirements: [sparePartData],
    }

    return (
        <div>
            <Card className="m-10">
                <CardBody>
                    <div className="flex justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {cardData.complainerName},&nbsp;<span className="font-light">{`Complaint#${cardData._id}`}</span>
                        </Typography>
                        <Typography>
                            {cardData.status}
                        </Typography>
                    </div>
                    <Typography>
                        {cardData.productName}
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
                            {cardData.complainerName},&nbsp;<span className="font-light">{`Complaint#${cardData._id}`}</span>
                        </Typography>
                        <Typography>
                            {cardData.contact}
                        </Typography>
                    </div>
                </DialogHeader>
                <DialogBody divider>
                    <Typography>
                        Status: {cardData.status}
                    </Typography>
                    <Typography>
                        Product: {cardData.productName}
                    </Typography>
                    <Typography className="mb-4">
                        Description: {cardData.description}
                    </Typography>
                    <hr />
                    <Typography className="text-2xl font-bold my-3">
                        Requirements
                    </Typography>
                    <List>
                        {cardData.requirements.map((sparePartData, index) => {
                            return (
                                <ListItem key={sparePartData._id}>
                                    <div className="flex">
                                        <div>
                                            <Typography variant="h6" color="blue-gray">
                                                Item 1
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                Software Engineer
                                            </Typography>
                                        </div>
                                    </div>
                                    <ListItemSuffix>
                                        <Select label="Select Version">
                                            <Option>Material Tailwind HTML</Option>
                                            <Option>Material Tailwind React</Option>
                                            <Option>Material Tailwind Vue</Option>
                                            <Option>Material Tailwind Angular</Option>
                                            <Option>Material Tailwind Svelte</Option>
                                        </Select>
                                    </ListItemSuffix>
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
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Allot</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default PlanningOrderCard;