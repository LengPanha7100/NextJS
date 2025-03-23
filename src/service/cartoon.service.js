export const getAllCartoonService = async () =>{
    const cartoon = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`);
    const res = await cartoon.json();
    return res;
}