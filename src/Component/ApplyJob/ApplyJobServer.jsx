"use client"
import { fetchGraphQLDa } from '@/api/clientGraphicql';
import { postGraphQl } from '@/api/graphicql';
import { GET_POST_JOB_APPLY_LIST_QUERY, GET_POST_JOB_APPLY_QUERY } from '@/api/query';
import { imageurl } from '@/utilities/imageurl';
import { EmailValidator } from '@/utilities/regexValidation'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Select from 'react-select';

export default function ApplyJobServer({DetailData,params}) {
    const [valid, setValid] = useState(0)
    const [trigger,setTrigger]=useState(0)
    const [resumeName,setResumeName]=useState('')
    const [loader,setLoader]=useState(false)
    const [imagePath,setImagePath]=useState(true)
    const [myProfile,setMyProfile]=useState({
        name:"",
        email:"",
        emailError:"",
        phone:"",
        gender:"",
        location:"",
        qualification:"",
        yearofGraduation:"",
        totalExperience:"",
        skills:"",
        profileImage:"",
        uploadResume:null
    })

// onChange Image

// const handleImageChange=(e)=>{
//     const { files } = e.target

//              if (files && files[0] && files[0].name.match(/\.(jpg|jpeg|png|svg)$/)) {
                      
//                     //   const fsize = files[0].size;
//                     //   const file = Math.round(fsize / 1024);       
//                     //   if (file < 2048) {
//                         let reader = new FileReader();
//                         reader.readAsDataURL(files[0]);              
//                         reader.onloadend = () => setMyProfile(prevState => ({...prevState,["profileImage"]: reader.result}));
//                     //   }
//                     }
// }


const handleFetachData=async()=>{
    
    const variable={
        "jobId":DetailData?.jobDetail?.id,
        "emailId": localStorage.getItem("emailvalue")
    }
    const profileData=await fetchGraphQLDa(GET_POST_JOB_APPLY_LIST_QUERY,variable)
    if(profileData&&profileData?.applicantDetails){
        setMyProfile({
            name:profileData?.applicantDetails?.name,
            email:profileData?.applicantDetails?.emailId,
            phone:profileData?.applicantDetails?.mobileNo,
            gender:{value:null,label:profileData?.applicantDetails?.gender?profileData?.applicantDetails?.gender:""},
            location:profileData?.applicantDetails?.location,
            qualification:profileData?.applicantDetails?.education,
            yearofGraduation:profileData?.applicantDetails?.graduation,
            totalExperience:profileData?.applicantDetails?.experience,
            skills:profileData?.applicantDetails?.skills,
            profileImage:profileData?.applicantDetails?.imagePath,
            uploadResume:null
            })
        
    }
}

useEffect(()=>{
    handleFetachData()
},[])
// onChange All Deatils

    const hadleONchage = (e) => {
        setTrigger(trigger+1)
        if(e.label){
            setMyProfile(prevState => ({
                ...prevState,
                "gender": e
            }))
        }
        else{
            const { name, value, files } = e.target
            // var t = e.target.value;
            if (name == "phone") {
               
                let roleExpression = /[^0-9]/g;
                let regex = new RegExp(roleExpression);
                if (!value.match(regex)) {
                    if (value.length < 11) {
                        setMyProfile(prevState => ({
                            ...prevState,
                            [name]: value
                        }))
                    }
                }
            }
            else if(name == "uploadResume"){

                 // if (files && files[0] && files[0].name.match(/\.(jpg|jpeg|png|svg)$/)) {
        if (files && files[0] && files[0].name.match(/\.(pdf|doc|docx)$/)) {
            setResumeName(files[0].name)
            //   setModelset(true)
            //   setFormDataStore(window.URL.createObjectURL(files[0]))
              
              const fsize = files[0].size;
              const file = Math.round(fsize / 1024);       
              if (file < 2048) {
                let reader = new FileReader();
                reader.readAsDataURL(files[0]);              
                reader.onloadend = () => setMyProfile(prevState => ({...prevState,[name]: reader.result}));
              }
            }
            }
            else if(name=="profileImage"){
                if (files && files[0] && files[0].name.match(/\.(jpg|jpeg|png)$/)) {
                      setImagePath(false)
                    //   const fsize = files[0].size;
                    //   const file = Math.round(fsize / 1024);       
                    //   if (file < 2048) {
                        let reader = new FileReader();
                        reader.readAsDataURL(files[0]);              
                        reader.onloadend = () => setMyProfile(prevState => ({...prevState,["profileImage"]: reader.result}));
                    //   }
                    }
            }
            else {
    
                setMyProfile(prevState => ({
                    ...prevState,
                    [name]: value
                }))
            }
    
        }
        // const { files } = e.target;
    }

    // validation check

    const validationCheck = () => {
        let ValidateObj = {
            email: true
        }
        if (myProfile.email == "") {
            setMyProfile(prevState => ({
                ...prevState,
                ["emailError"]: "email is required"
            }))
            ValidateObj.email = false
        } else {
            
            if (EmailValidator(myProfile.email)) {
                setMyProfile(prevState => ({
                    ...prevState,
                    ["emailError"]: ""
                }))
                ValidateObj.email = true
            } else {
                setMyProfile(prevState => ({
                    ...prevState,
                    ["emailError"]: "please re-enter a valid work email address"
                }))
                ValidateObj.email = false
            }
        }
        if (ValidateObj.email && myProfile.name && myProfile.gender.label && myProfile.location && myProfile.phone && myProfile.qualification && myProfile.totalExperience && myProfile.skills && myProfile.yearofGraduation && myProfile.uploadResume && myProfile.profileImage) {
            return true
        } else {
            return false
        }
    }
    useEffect(() => {
        if (valid) {
            validationCheck()
        }
        
    }, [myProfile.email])
    // handle submit
    const handleSubmit = async() => {
        

        
        let obj = {
                "applicationDetails": {
                  "name": myProfile.name,
                  "emailId": myProfile.email,
                  "mobileNo": myProfile.phone,
                  "gender": myProfile.gender.label?myProfile.gender.label:"",
                  "jobId": DetailData?.jobDetail?.id,
                  "location": myProfile.location,
                  "education": myProfile.qualification,
                  "graduation": myProfile.yearofGraduation,
                  "companyName": "Piccosoft",
                  "experience": myProfile.totalExperience,
                  "skills": myProfile.skills,
                  "image": myProfile.profileImage,
                  "resume": myProfile.uploadResume,
              }
        }

        setValid(1)
        if (validationCheck()) {
            setLoader(true)
            setValid(0)
           await postGraphQl(GET_POST_JOB_APPLY_QUERY, obj,"Apply-job",setLoader)
            
            
        }

    }

    const ExpDate=[   
        // {id:0, name: "Date Posted",apiName:""}, 
        {id:1, name: "Men",apiName:""},
        {id:2, name: "Women",apiName:""},
        ]
  
        let dateFilterOption=ExpDate?.map((list)=>({
          value:list.id,
          label:list.name
         }))
  return (
    <>
   
            <main className="min-h-screen max-w-screen-2xl m-auto md:py-8 lg:px-[120px] md:px-10 p-6">
                <Link href={`/view-job/${params}`} className="flex gap-1 items-center text-gray-500 text-xs font-light leading-4"> <img src="/img/left-arrow.svg" /> Back </Link>

                <div className="flex flex-col items-center border-b border-gray mb-4">
                    <h5 className="mb-4 mt-8 sm:text-2xl sm:leading-[30px] font-normal text-blue-600 text-lg">{DetailData?.jobDetail?.jobTitle}</h5>
                    <div className="flex gap-4 mb-6 flex-wrap">
                        <div className="flex items-center gap-2">
                            <img src="/img/exp.svg" />
                            <p className="text-sm  leading-4  text-gray-500 font-light">{`${DetailData?.jobDetail?.minimumYears} - ${DetailData?.jobDetail?.maximumYears} Years`} </p>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-100"></div>
                        <div className="flex items-center gap-2">
                            <img src="/img/Time.svg" />
                            <p className="text-sm  leading-4 text-gray-500 font-light">{DetailData?.jobDetail?.jobType}</p>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-100"></div>
                        <div className="flex items-center gap-2">
                            <img src="/img/job-type.svg" />
                            <p className="text-sm  leading-4 text-gray-500 font-light">{DetailData?.jobDetail?.jobLocation}</p>
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                    <h2 className="text-2xl font-medium leading-[30px] mb-1.5 text-black">Job Application</h2>
                    <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                </div>
                <div className="pb-6 border-b border-gray grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                    <div>
                        <h2 className="text-base font-medium leading-[30px] mb-1.5 text-black">Basic Information</h2>
                        <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="relative  rounded-full w-[120px] h-[120px]">
                            <img src={`${myProfile.profileImage? imagePath?`${imageurl}${myProfile.profileImage}`:`${myProfile.profileImage}`:"/img/profile.svg"}`}  className='w-full h-full rounded-full' />
                            <input type="file" name="profileImage" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
                            onChange={(e)=>hadleONchage(e)} accept=".jpg, .jpeg, .png"/>
                            
                        </div>
                        {valid == 1 && myProfile.profileImage == "" && <p className='text-red-600'>profile image is required</p>}
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Name</label>
                            <input value={myProfile.name} name='name' className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Name" onChange={(e)=>hadleONchage(e)} />
                            {valid == 1 && myProfile.name == "" && <p className='text-red-600'>name is required</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Email ID</label>
                            <input type="text" value={myProfile.email} name='email' className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Email" onChange={(e)=>hadleONchage(e)}/>
                             {valid == 1 && myProfile.emailError && <p className='text-red-600'>{myProfile.emailError}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Phone</label>
                            <input type="text" name='phone' value={myProfile.phone} className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Phone" onChange={(e)=>hadleONchage(e)}/>
                            {valid == 1 && myProfile.phone == "" && <p className='text-red-600'>number is required</p>}
                        </div>
                        <div className="flex flex-col gap-1 relative job-apply">
                            <label className="font-light text-sm text-black">Gender</label>
                            {/* <select className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none bg-transparent px-4 text-sm leading-4 font-light placeholder:text-slate-300 appearance-none">
                                <option>Male</option>
                                <option>Female</option>
                                
                            </select> */}
                            <div className='h-10 border border-gray-200 rounded  w-full focus-visible:outline-none bg-transparent text-sm leading-4 font-light placeholder:text-slate-300 appearance-none'>
                            <Select placeholder="Choose Gender"  className=' css-13cymwt-control'
                                value={myProfile?.gender?.label!=""&&myProfile?.gender} options={dateFilterOption} onChange={(e)=>hadleONchage(e)}>
                                    
                                </Select>
                                </div>
                                {valid == 1 && myProfile.gender?.label == "" && <p className='text-red-600'>Gender is required</p>}
                            {/* <img src="/img/arrow.svg" className="absolute top-11 right-[18px]" /> */}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Location</label>
                            <input type="text" value={myProfile.location} name='location' className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Location" onChange={(e)=>hadleONchage(e)}/>
                            {valid == 1 && myProfile.location == "" && <p className='text-red-600'>location is required</p>}
                        </div>
                    </div>
                </div>
                <div className="pb-6 border-b border-gray grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                    <div>
                        <h2 className="text-base font-medium leading-[30px] mb-1.5 text-black">Education Information</h2>
                        <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Qualification</label>
                            <input type="text" value={myProfile.qualification} name="qualification" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Qualification" onChange={(e)=>hadleONchage(e)}/>
                            {valid == 1 && myProfile.qualification == "" && <p className='text-red-600'>qualification is required</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Year of Graduation</label>
                            <input type="text" value={myProfile.yearofGraduation} name="yearofGraduation" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Year of Graduation" onChange={(e)=>hadleONchage(e)}/>
                            {valid == 1 && myProfile.yearofGraduation == "" && <p className='text-red-600'>year of graduation is required</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Total Experience</label>
                            <input type="text" value={myProfile.totalExperience} name="totalExperience" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Total Experience" onChange={(e)=>hadleONchage(e)}/>
                            {valid == 1 && myProfile.totalExperience == "" && <p className='text-red-600'>total experience is required</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-light text-sm text-black">Skills</label>
                            <input type="text" value={myProfile.skills} name="skills" className="h-10 border border-gray-200 rounded  w-full focus-visible:outline-none px-4 text-sm leading-4 font-light placeholder:text-slate-300" placeholder="Skills" onChange={(e)=>hadleONchage(e)}/>
                            {valid == 1 && myProfile.skills == "" && <p className='text-red-600'>skills are required</p>}
                        </div>
                    </div>
                </div>
                <div className="pb-6 flex flex-col gap-6">
                    <div>
                        <h2 className="text-base font-medium leading-[30px] mb-1.5 text-black">Upload Resume</h2>
                        <p className="text-gray-500 text-sm font-normal">Please complete the form below to apply for a position with us.</p>
                    </div>
                    <div className="flex p-6 w-full flex-col gap-1 items-center justify-center border rounded border-gray-200 bg-gray-slate relative">
                        <img src="/img/upload.svg" className="mb-1"/>
                        <h5 className="font-normal text-sm text-gray-500">Browse File</h5>
                        <p className="font-light text-xs text-gray-500">Drag and Drop file here</p>
                        <input id='uploadResume' type="file" accept=".pdf, .doc, .docx" name="uploadResume" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" onChange={(e)=>hadleONchage(e)}/>
                        {resumeName&&<p className="text-sm text-gray-500">File uploaded: {resumeName}</p>}
                    </div>
                    {valid == 1 && myProfile.uploadResume ==null && <p className='text-red-600'>please upload your resume</p>}
                    <div className="flex justify-center gap-4">
                    <button className="w-40 p-4 h-11 bg-blue-600 text-white text-base font-normal rounded flex justify-center items-center" onClick={()=>handleSubmit()}>
                         {loader?
                        <div className="loader "></div> :
                            "Apply for Job"
                        }</button>
                        <Link href={'/'} className="w-auto p-4 h-11 bg-slate-50 text-black border border-gray-500 text-base font-normal rounded flex justify-center items-center">Cancel</Link>
                    </div>
                </div>
            </main>
    </>
  )
}
