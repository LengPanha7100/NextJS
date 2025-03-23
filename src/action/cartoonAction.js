import { getAllCartoonService } from "@/service/cartoon.service"

export const getAllCartoonAction = async  () =>{
        const res = await getAllCartoonService();
        console.log("hello",res);
        return res;
}