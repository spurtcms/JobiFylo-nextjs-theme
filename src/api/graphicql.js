

import ToastMessage from "@/Component/ToastMessage/ToastMessage";
import { BearerToken } from "./clientGraphicql";
import { apiinstance } from "./interceptor";
import { Redirect } from "./serverActions";


export const fetchGraphQl = async (GET_POSTS_QUERY,varia) => {

  // // try {
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
    if(entries){
     
      return entries
    }
      
    }

};

export const postGraphQl = async (GET_POSTS_QUERY,varia,check,setLoader,pathname,setLoginEmail,handleJobId) => {

  try {
    const entries = await fetchGraphQl(GET_POSTS_QUERY,varia);
    if(check==="signup"){
      if(entries?.memberRegister==true){
        setLoader(false)
        Redirect("/auth/login")
        
      }else{
        setLoader(false)
      }
      ToastMessage({type:'success',message:"Register Successfull"})
    }
    if(check==="login"){
      
      if(entries?.templateMemberLogin!=undefined&&entries?.templateMemberLogin!=""){
      BearerToken(entries?.templateMemberLogin)
      setLoginEmail()
      setLoader(false)
      if(pathname){
        Redirect(`${pathname}`)
      }else{
        Redirect('/')
      }
      ToastMessage({type:'success',message:"Login Successfull"})
      }
      else{
        if(entries?.status){
          setLoader(false)
          Redirect("/auth/login")
          ToastMessage({type:'error',message:"Invalid email and password"})
        }
      }
      
      

    }

    if(check==="Apply-job"){
     
      if(entries?.jobApplication){
        setLoader(false)
        // BearerToken(entries?.templateMemberLogin) 
        // setLoader(false)
        handleJobId()
          Redirect('/')
         
        ToastMessage({type:'success',message:"Apply Successfull"})
        }
        else{
          if(entries?.errors){
            setLoader(false)
            ToastMessage({type:'error',message:entries?.errors?.[0]?.message})
            // Redirect("/auth/login")
            // ToastMessage({type:'error',message:"Invalid email and password"})
          }
        }
    }
   
  } catch (error) {
    throw error ;
  }
};

