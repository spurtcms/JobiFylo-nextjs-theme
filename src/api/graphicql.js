

import ToastMessage from "@/Component/ToastMessage/ToastMessage";
import { BearerToken } from "./clientGraphicql";
import { apiinstance } from "./interceptor";
import { Redirect } from "./serverActions";

export const fetchGraphQl = async (GET_POSTS_QUERY,varia) => {
 
  // try {
    const entries = await apiinstance("",{
      method: 'POST',
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: varia
      })
    });
    if(entries?.data){
      
      return entries?.data
    }else{
    if(entries?.status){
     
      return entries
    }
      
    }
    // else{
    //  
    //   return entries
    // } 
     
  // } catch (error) {
  //   throw error;
  // }
};

export const postGraphQl = async (GET_POSTS_QUERY,varia,check,setLoader,cartName,reloadCount,dispatch) => {

  try {
    const entries = await fetchGraphQl(GET_POSTS_QUERY,varia);
    if(check==="signup"){
      if(entries?.memberRegister==true){
        setLoader(false)
        Redirect("/auth/login")
        
      }else{
        setLoader(false)
      }

    }
    if(check==="login"){
      
      if(entries?.templateMemberLogin!=undefined&&entries?.templateMemberLogin!=""){
      BearerToken(entries?.templateMemberLogin) 
      setLoader(false)
      
      if(cartName!=""){
        Redirect("/account/checkout-shipping")
      }
      else{
        Redirect('/')
      }
      
      ToastMessage({type:'success',message:"Login Successfull"})
      // dispatch(reloadCartCount(reloadCount+1))

      }
      else{
        if(entries?.status){
          setLoader(false)
          Redirect("/auth/login")
          ToastMessage({type:'error',message:"Invalid email and password"})
        }
      }
      
      

    }
    if(check==="checkout"){
      if(entries?.ecommerceOrderPlacement){
        localStorage.removeItem("add-cart-list")
        Redirect("/account/my-orders?offset=0")
        setLoader(false)
        dispatch(getAddress({}))
        dispatch(reloadCartCount(reloadCount+1))
      }else{
        setLoader(false)
      }
      
    }
    if(check==="Address"){
      if(entries?.customerProfileUpdate){
        Redirect("/account/checkout-payment")
        setLoader(false)
        dispatch(reloadCartCount(reloadCount+1))
        ToastMessage({type:'success',message:"Address Update Successfull"})
      } else{
        setLoader(false)
      }
     
    }
  } catch (error) {
    throw error;
  }
};

