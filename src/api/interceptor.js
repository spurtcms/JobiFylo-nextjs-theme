
import { Token } from "./clientGraphicql";
import { RemoveToken } from "./serverActions";
import { handleCartStore } from "./clientActions";
import ToastMessage from "@/Component/ToastMessage/ToastMessage";



export const apiinstance=async(url,options)=>{
    const headers = {
        'Content-Type': 'application/json',
      }
      const token = await Token();
    
      if (token==""||token==undefined) {
        headers['Authorization']=process.env.NEXT_PUBLIC_SPURTCMS_TOKEN
        
      }
      else{
        headers['Authorization'] = token
      }
    
      const config = {
        method: options.method || 'GET',
        headers,
        ...options,
      }
    
      if (config.method === 'GET') {
        delete config.body
      } else {
        config.body = config.body
      }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SPURTCMS_BASEURL}${url}`,config);
        if(res.ok){
            return await res.json();
        }else{
         
          switch(res.status){
           
        case 400:
          handleBadRequest(res);
        break;

        case 401:
          handleUnauthorized(res)
          break;

        case 403:
          handleForbidden(res);
          break;

        case 404:
          handleNotFound(res);
          break;

        case 422:
          handleUnProcessableEntry(res);
          break;

        case 500:
          handleServerError(res);
          break;
        case 409:
          handleErrorMessages(res);
          break;
        case 0:
          handleServerError502(res);
          break;
        default:
          break;
          }

          return res
        }
     
}
const handleBadRequest=async(res)=>{

  ToastMessage({type:'error',message:res?.statusText})
}

const handleUnauthorized= async(res)=>{
  // handleCartStore()
  RemoveToken()
  ToastMessage({type:'error',message:"Unauthorized"})
   }
 
 const handleForbidden=async()=>{
  ToastMessage({type:'error',message:"Forbidden"})
 }  

 const handleNotFound=async()=>{
  ToastMessage({type:'error',message:"Api not found"})
 } 

 const handleUnProcessableEntry=async(res)=>{
  
  ToastMessage({type:'error',message:res?.statusText})
 }  

 const handleServerError=async(res)=>{
  ToastMessage({type:'error',message:res?.statusText})
 }

 const handleServerError502=async()=>{

 }