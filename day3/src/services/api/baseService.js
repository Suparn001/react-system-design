export async function getAPI(url){
    return await fetch(url)  // fetch always return promise
}