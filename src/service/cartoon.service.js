export const getAllCartoonService = async () =>{
    const cartoon = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`);
    const res = await cartoon.json();
    return res;
}

export const getByIdCartoonService = async (id) =>{
    const cartoon = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`,{
        methos : "GET",
    });
    const res = await cartoon.json();
    console.log(res)
    return res;
}

export const searchCartoonService = async (search) =>{
    console.log("12",search);
    const cartoon = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${search}`,{
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const res = await cartoon.json();
    return res;
}
export const getAllFilterCartoonService = async () =>{
    const book = await fetch('https://nextjs-homework005.vercel.app/api/cartoon_genre');
    const res = await book.json()
    return res;
}

export const getFilterCartoonByIdService = async (id) =>{
    const book = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?genre=${id}`,{
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const res = await book.json();
    return res;
}
