import BookCategories from '../../../components/BookCategories'
import { getAllBookAction} from '@/action/bookAction'


const page = async () => {
const dataBook = await getAllBookAction()
const data = dataBook.payload;
  return (
    <div>
      <BookCategories data ={data}/>
    </div>
  )
}

export default page
