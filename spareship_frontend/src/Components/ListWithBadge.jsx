import { List, ListItem, ListItemSuffix, Chip, Card, Typography } from "@material-tailwind/react";


const ListWithBadge = ({ data }) => {
    return (
        <Card className="">
            <List>
                {data.map((item) => {
                    return (
                        <ListItem>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    {item?.product_name || item?.category}
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    {item.description}
                                </Typography>
                            </div>
                        </ListItem>
                    )
                })}
            </List>
        </Card>
    );
}

export default ListWithBadge;