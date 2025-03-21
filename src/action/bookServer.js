import { getAllBookService, getBookByIdService } from "@/service/book.service";

export async function getAllBookAction() {
    const res = await getAllBookService();
    return res;
}

export async function getBookByIdAction(id) {
    const res = await getBookByIdService(id);
    console.log("res12",res)
    return res;
}