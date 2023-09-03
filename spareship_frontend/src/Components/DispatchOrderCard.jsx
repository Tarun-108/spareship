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
  List,
  ListItem,
  ListItemSuffix,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";

const DispatchOrderCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const sparePartData = {
    _id: "2344",
    category: "Screen",
    description: "Screen for iPhone 12",
    quantity: 2,
  };

  const cardData = {
    _id: "237",
    status: "Dispatched",
    spareParts: [sparePartData],
    warehouse: {
      _id: "123",
      name: "Warehouse 1",
      contact: "1234567890",
    },
  };

  return (
    <div>
      <Card className="m-10">
        <CardBody>
          <div className="flex justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              <span className="font-light">{`Order#${cardData._id}`}</span>
            </Typography>
            <Typography>{cardData.status}</Typography>
          </div>
          <Typography>{cardData.productName}</Typography>
          <Typography>{cardData.description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={handleOpen}>View More</Button>
        </CardFooter>
      </Card>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div>
            <Typography variant="h5" color="blue-gray" className="">
              <span className="font-light">{`Order#${cardData._id}`}</span>
            </Typography>
            <Typography>{cardData.contact}</Typography>
          </div>
        </DialogHeader>
        <DialogBody divider>
          <Typography>Status: {cardData.status}</Typography>
          <Typography>Warehouse: {cardData.warehouse.name}</Typography>
          <Typography className="mb-4">
            Contact: {cardData.warehouse.contact}
          </Typography>
          <hr />
          <Typography className="text-2xl font-bold my-3">Items</Typography>
          <List>
            {cardData.spareParts.map((sparePartData, index) => {
              return (
                <ListItem key={sparePartData._id}>
                  <div className="flex">
                    <div className="ml-4">
                      <Typography variant="h6" color="blue-gray">
                        {sparePartData.category}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        {sparePartData.description}
                      </Typography>
                    </div>
                  </div>
                  <ListItemSuffix>Qty: {sparePartData.quantity}</ListItemSuffix>
                </ListItem>
              );
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
            <span>Received</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DispatchOrderCard;
