'use server'
import { getAllCartoonService, getByIdCartoonService, searchCartoonService } from "@/service/cartoon.service"

export const getAllCartoonAction = async  () =>{
        const res = await getAllCartoonService();
        return res;
}

export const getByIdCartoonAction = async (id) =>{
        const res = await getByIdCartoonService(id);
        console.log(res);
        return res ;
}

export const searchCartoonAction = async (search) => {
        const res = await searchCartoonService(search);
        console.log("response from searchCartoonService:", res);
        
        // Ensure the response has payload and filter results based on the search term
        const filterResults = res?.payload?.filter(cartoon =>
          cartoon.ct_title.toLowerCase().includes(search.toLowerCase())
        );
      
        console.log("filtered results:", filterResults);
        return filterResults || []; // Ensure it always returns an array, even if empty
};
      