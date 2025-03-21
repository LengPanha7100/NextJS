export const getAllBookService = async () => {
    const book = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
    const response = await book.json();
    return response;
}
export const getBookByIdService = async (id) =>{
     const bookId = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`)
     const resposne = await bookId.json();
     console.log(resposne);
     return resposne;
}