import React from 'react'

export default function ViewJobsSkeleton({DetailData,ListData}) {
  return (
    <>
    <div role="status" class="space-y-2.5 animate-pulse w-full">
    {DetailData==undefined&&
       <div className="mt-8">
       <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
       <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-80 mb-4"></div>
                    <div className="flex gap-6 mb-6 flex-wrap">
                        <div className="flex items-center gap-2">
                        <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                        <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                        </div>
                        <div className="w-0.5 h-4 bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                        <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center pb-6 border-b border-gray mb-6">
                    <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                    <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                    </div>
                    <div className="pb-6 border-b border-gray mb-6">
                    <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
                   
                        <div className="flex flex-col gap-3 mb-4">
                        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
                            
                        </div>
                        
                    </div>
                   
       </div>
    }
       {/* related jobs */}
       {ListData==undefined&&
        <div>
            <div className="flex justify-between items-center mb-6">
            <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-300 w-12"></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 grid-cols-1 mt-6 mb-10" >
                {[1,2,3].map((dd)=>(
                    <>
                    <div className="border-gray-300 border rounded p-4 hover:shadow-lg">
                <div class="h-3 bg-gray-300 rounded-full dark:bg-gray-300 w-20 mb-2"></div>
                <div class="w-48 h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
                <div class="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center gap-2">
                        <div class="w-48 h-2.5 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                        </div>
                        <div className="flex items-center gap-2">
                        <div class="w-48 h-2.5 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                        </div>
                        <div className="flex items-center gap-2">
                        <div class="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                        </div>
                    </div>
                    <div class="w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 mb-2"></div>
                    <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-300 w-full mb-4"></div>
                </div>
                    </>
                ))}
                
            </div>
        </div>
       }
    </div>
    </>
  )
}
