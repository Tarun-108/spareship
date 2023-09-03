import {
  Select,
  Option,
  Input,
  Checkbox,
  Typography,
  Button,
} from "@material-tailwind/react";
import NavBar from "../Components/StdNavBar";
import { Link } from "react-router-dom";

const ServiceCenterComplaintPage = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="m-10 flex justify-center">
        <div>
          <div className="my-10 text-3xl font-semibold">Register Complaint</div>
          <div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Complainer Name"
                  className="outline-1"
                />
                <Input
                  size="lg"
                  label="Complainer Contact"
                  className="outline-1"
                />
                <Input size="lg" label="Description" className="outline-1" />
                <Select className="outline-1" label="Select Product">
                  <Option>Product 1</Option>
                  <Option>Product 2</Option>
                  <Option>Product 3</Option>
                </Select>
                <Select className="outline-1" label="Select Spare Parts">
                  <Option>Part 1</Option>
                  <Option>Part 2</Option>
                  <Option>Part 3</Option>
                </Select>
              </div>
              <Button className="mt-6" fullWidth>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenterComplaintPage;
