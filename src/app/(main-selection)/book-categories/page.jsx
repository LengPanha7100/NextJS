import BookCategories from '../../../components/BookCategories'
import { getAllBookAction } from '@/action/bookAction'


const page = async () => {
const data = await getAllBookAction()
console.log(data);
  return (
    <div>
      <BookCategories data ={data}/>
    </div>
  )
}

export default page
