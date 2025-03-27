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

export const searchReadBookService = async (search) =>{
    const book = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${search}`,{
        method: "GET",
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const res = await book.json();
    console.log("res",res)
    return res;
}

export const getAllFilterService = async () =>{
    const book = await fetch('https://nextjs-homework005.vercel.app/api/cartoon_genre');
    const res = await book.json()
    return res;
}

export const getFilterByIdService = async (id) =>{
    const book = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=${id}`,{
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const res = await book.json();
    return res;
}