import { Select, Option, Input, Checkbox, Typography, Button } from "@material-tailwind/react"
import NavBar from "../Components/StdNavBar"
import { Link } from "react-router-dom"
import { API_URL } from "../constants"
import { useEffect, useState } from "react"

const ServiceCenterComplaintPage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [allSpareParts, setAllSpareParts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [selectedSparePartId, setSelectedSparePartId] = useState(null);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (name === "" || contact === "" || description === "" || selectedProductId === null || selectedSparePartId === null) {
            alert("Please fill all the fields");
        }
        else {
            fetch(`${API_URL}/database/register_complaint`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    contact: contact,
                    description: description,
                    product_id: selectedProductId,
                    sku_id: selectedSparePartId,
                }),
            }).then((res) => {
                return res.json();
            }).then((data) => {
                if (data.error) {
                    alert(data.error);
                }
                else {
                    alert("Complaint Registered Successfully");
                    setName("");
                    setContact("");
                    setDescription("");
                    setSelectedProductId(null);
                    setSelectedSparePartId(null);
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    useEffect(() => {
        allProducts.filter((product) => {
            if (product.product_id === selectedProductId) {
                setAllSpareParts(product.spare_parts);
            }
        })
    }, [allProducts, selectedProductId]);


    const getAllProducts = () => {
        fetch(`${API_URL}/database/get_all_products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                setAllProducts(data.productsRes);
            }
        }).catch((err) => {
            console.log(err);
        });
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
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Complainer Name" className="outline-1" value={name} onChange={(e) => setName(e.target.value)} />
                                <Input size="lg" label="Complainer Contact" className="outline-1" value={contact} onChange={(e) => setContact(e.target.value)} />
                                <Input size="lg" label="Description" className="outline-1" value={description} onChange={(e) => setDescription(e.target.value)} />
                                <Select className="outline-1" label="Select Product" value={selectedProductId} onChange={(id) => setSelectedProductId(id)}>
                                    {allProducts.map((product) => {
                                        return (
                                            <Option value={product.product_id}>{product.product_name}</Option>
                                        )
                                    })}
                                </Select>
                                <Select className="outline-1" label="Select Spare Parts" value={selectedSparePartId} onChange={(id) => setSelectedSparePartId(id)}>
                                    {allSpareParts.map((sparePart) => {
                                        return (
                                            <Option value={sparePart.sku_id}>{sparePart.category}</Option>
                                        )
                                    })}
                                </Select>
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