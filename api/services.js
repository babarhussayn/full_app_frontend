import BASE_URL from "@/utils/constant";


export const postData=async(api,body)=>{

    const response = await fetch(`${BASE_URL}${api}`,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return response.json();
      
}