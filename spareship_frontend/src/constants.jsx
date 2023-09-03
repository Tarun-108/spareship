export const API_URL = "http://localhost:4000/api/";

export const serviceCenter = "serviceCenter";
export const warehouse = "wareHouse";
export const planning = "planning";
export const customerSupport = "customerSupport";

export const isLoggedIn = () => {
    if (localStorage.getItem("token") && localStorage.getItem("userType") && localStorage.getItem("user")) {
        return true;
    }
    return false;
}