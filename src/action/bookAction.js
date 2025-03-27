'use server'
import { getAllBookService, getAllFilterService, getBookByIdService, getFilterByIdService, searchReadBookService } from "@/service/book.service";

export async function getAllBookAction() {
    const res = await getAllBookService();
    return res;
}

export async function getBookByIdAction(id) {
    const res = await getBookByIdService(id);
    return res;
}

export const searchReadBookAction = async (search) => {
   const res = await searchReadBookService(search);
   const filterTile =  res?.payload?.filter(book =>
      book?.book_title?.toLowerCase()?.includes(search?.toLowerCase())
   )
   console.log(filterTile);
   return filterTile || [];
};

export const getAllFilterAction = async () =>{
    const res = await getAllFilterService();
    return res;
}

export const getFilterByIdAction = async (id) =>{
    const res = await getFilterByIdService(id);
    return res;
}