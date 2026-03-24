export async function getAPI(url){
  const response = await fetch(url);
  if(!response.ok){
    throw new Error("Try after sometime");
  }
    return await response.json()  // fetch always return promise
}