import { getAPI } from "./api/baseService";
import { PRODUCT_URL } from "./api/endPoints";

export async function productList(limit){
    try{
        const url = `${PRODUCT_URL}?limit=${limit}`
        let result = await getAPI(url)
        return result.products;
    }catch(error){
        throw error;
    }
}