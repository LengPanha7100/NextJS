export const getAllBook = async () => {
    const book = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
    const response = await book.json();
    console.log(response);
    return response;
}