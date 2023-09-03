import {
  List,
  ListItem,
  ListItemSuffix,
  Chip,
  Card,
  Typography,
} from "@material-tailwind/react";

const ListWithBadge = () => {
  return (
    <Card className="">
      <List>
        <ListItem>
          <div>
            <Typography variant="h6" color="blue-gray">
              Item 1
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Software Engineer
            </Typography>
          </div>
          <ListItemSuffix>
            <Chip
              value="14"
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <div>
            <Typography variant="h6" color="blue-gray">
              Item 2
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Software Engineer
            </Typography>
          </div>
          <ListItemSuffix>
            <Chip
              value="2"
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <div>
            <Typography variant="h6" color="blue-gray">
              Item 3
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Software Engineer
            </Typography>
          </div>
          <ListItemSuffix>
            <Chip
              value="40"
              variant="ghost"
              size="sm"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
      </List>
    </Card>
  );
};

export default ListWithBadge;
