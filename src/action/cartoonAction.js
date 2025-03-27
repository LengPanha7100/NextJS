'use server'
import { getAllCartoonService, getAllFilterCartoonService, getByIdCartoonService, getFilterCartoonByIdService, searchCartoonService } from "@/service/cartoon.service"

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
        const filterResults = res?.payload?.filter(cartoon =>
          cartoon.ct_title.toLowerCase().includes(search.toLowerCase())
        );
        return filterResults || []; 
};

export const getAllFilterCartoonAction = async () =>{
    const res = await getAllFilterCartoonService();
    return res;
}
      

export const getFilterCartoonByIdAction = async (id) =>{
    const res = await getFilterCartoonByIdService(id);
    return res;
}