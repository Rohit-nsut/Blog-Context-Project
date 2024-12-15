import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";


const Pagination = () => {

    const {page, totalPages, handlePageChange} = useContext(AppContext);
 
    return (
        <div className="border-t-2 border-pink-500 fixed bottom-0 w-full bg-blue-500">

            <div className="w-11/12 md:w-9/12 lg:w-[45%] flex justify-between items-center mx-auto my-2">

                <div className="flex gap-3 text-lg font-normal">
                    {
                        page !== 1 && 
                        (<button className="py-[2px]  px-4 rounded-md border-2 border-gray-300" onClick={ () => handlePageChange(page-1)}>Previous</button>)
                    }
                    {
                        page !== totalPages &&
                        (<button className="py-[2px]  px-4 rounded-md border-2 border-gray-300" onClick={ () => handlePageChange(page+1)}>Next</button>)
                    }
                </div> 

                <div className="text-base font-semibold">
                    Page <span>{page}</span> of <span>{totalPages}</span>
                </div>


            </div>

        </div>
    )
}


export default Pagination