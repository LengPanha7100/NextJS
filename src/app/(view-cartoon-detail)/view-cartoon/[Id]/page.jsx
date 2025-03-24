import { getByIdCartoonAction } from '@/action/cartoonAction';
import ReadFullCartoon from '@/components/ReadFullCartoon'
import React from 'react'

const page = async ({params}) => {
  const {Id} = params;
  const data = await getByIdCartoonAction(Id);
  console.log("Hello1" , data);
  const dataCartoon = data?.payload;
  return (
    <div>
      <ReadFullCartoon dataCartoon = {dataCartoon}/>
    </div>
  )
}

export default page
