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
    const cartoon = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${search}`,{
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const res = cartoon.json();
    return res;
}

