import { useEffect, useState } from "react"
import Select from 'react-select'
import axios from "axios"
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Input, Button, Typography } from "@material-tailwind/react"
import NavBar from "../Components/StdNavBar"
import { API_URL } from "../constants"


const columns = [
    { field: 'category', headerName: 'Category', width: 140 },
    { field: 'description', headerName: 'Description', width: 400 }
]

const ServiceCenterComplaintPage = () => {

    const [rows, setRows] = useState([])
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");
    const [serviceCenterId, setServiceCenterId] = useState(localStorage.getItem("user"))
    const [products, setProducts] = useState([]);
    const [spareParts, setSpareParts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSpareParts, setSelectedSpareParts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getSpareParts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedProduct])

    useEffect(() => {
        const temp = spareParts.map(sparePart => ({
            id: sparePart.skuId,
            category: sparePart.category,
            description: sparePart.description
        }))
        setRows(temp);
    }, [spareParts])

    const getProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/products/all`)
            if (response.status !== 200) {
                alert("error!");
            } else {
                const productOptions = response.data.map(product => ({
                    value: product.productId,
                    label: product.productName,
                }));
                setProducts(productOptions);
            }
        } catch (err) {
            console.log(err)
        }
    }

    const getSpareParts = async () => {
        try {
            if (selectedProduct === null) return;
            const response = await axios.get(`${API_URL}/products/with_spare_part`, { params: { productId: selectedProduct } })
            if (response.status !== 200) {
                alert("error!");
            } else {
                setSpareParts(response.data.spareParts)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleProductChange = async (selectedOption) => {
        setSelectedProduct(selectedOption.value);
    }

    const handleSparePartsChange = async (selectedSpareParts) => {
        setSelectedSpareParts(selectedSpareParts)
    }

    const handleSubmit = async () => {
        if (name === "" || contact === "" || description === "" || selectedProduct === null || selectedSpareParts.length === 0) {
            alert("Please fill all the fields");
        }
        else {
            const payload = {
                customerName: name,
                customerContact: contact,
                description: description,
                productId: selectedProduct,
                serviceCenterId: serviceCenterId,
                sparePartsIds: selectedSpareParts
            }
            const response = await axios.post(`${API_URL}/service_center/create_work_order`, payload)
            if (response.status !== 200) {
                alert("error!")
            } else {
                alert("Complaint Registered Successfully");
                setName("");
                setContact("");
                setDescription("");
                setSelectedProduct(null);
                setSelectedSpareParts([]);
            }
        }
    }

    return (
        <div className="App" >
            <NavBar />
            <div className="m-10 flex justify-center">
                <div>
                    <div className="my-10 text-3xl font-semibold">
                        Register Complaint
                    </div>
                    <div>
                        <form className="mt-8 mb-2  max-w-screen-lg ">
                            <div className="mb-4 flex flex-col gap-6 w-100">
                                <Input size="lg" label="Complainer Name" className="outline-1" value={name} onChange={(e) => setName(e.target.value)} />
                                <Input size="lg" label="Complainer Contact" className="outline-1" value={contact} onChange={(e) => setContact(e.target.value)} />
                                <Input size="lg" label="Description" className="outline-1" value={description} onChange={(e) => setDescription(e.target.value)} />
                                <Typography>Select Product</Typography>
                                <Select label="Select Product" options={products} onChange={handleProductChange} />
                                <Box>
                                    <Typography>Select Spare Parts</Typography>
                                    <DataGrid rows={rows} columns={columns} checkboxSelection onRowSelectionModelChange={handleSparePartsChange} hideFooter localeText={{ noRowsLabel: "This is a custom message :)" }} />
                                </Box>
                            </div>
                            <Button className="mt-6" fullWidth onClick={handleSubmit}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ServiceCenterComplaintPage