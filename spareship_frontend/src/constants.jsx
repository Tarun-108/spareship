export const dlink = "http://172.16.117.205:5000";
export const laxy = "http://192.168.197.137:5000";
export const API_URL = dlink;

export const serviceCenter = "SERVICE_CENTER";
export const warehouse = "WAREHOUSE";
export const planning = "PLANNING_TEAM";
export const customerSupport = "CUSTOMER_SUPPORT";

export const isLoggedIn = () => {
    if (localStorage.getItem("userType") && localStorage.getItem("user")) {
        return true;
    }
    return false;
}