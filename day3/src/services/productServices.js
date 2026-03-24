import { getAPI } from "./api/baseService";
import { PRODUCT_URL } from "./api/endPoints";

export async function productList(limit){
    const url = `${PRODUCT_URL}?limit=${limit}`
    let result = await getAPI(url)
    result= await result.json();
    return result.products;
}