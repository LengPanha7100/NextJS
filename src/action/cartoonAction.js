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

export const searchCartoonAction = async (search) =>{
        const res = await searchCartoonService(search);
        console.log(res);
        const filterResuls = res?.payload?.filter(cartoon =>
                cartoon.ct_title.toLowerCase().includes(search.toLowerCase())
        );
        console.log(filterResuls)
        return {payload : filterResuls};
}