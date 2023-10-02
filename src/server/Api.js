export const GetApiData=async(url)=>{
    try{
        const responce=await fetch(url);
        const data=responce.json()
        return data;
    }catch(erroe){
        alert(erroe)
       return erroe;
    }
    

}