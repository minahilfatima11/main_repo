 import  Button  from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
const SearchBox=() => {
    return (
        <div className='headerSearch d-flex align-items-center'>
                <input type='text' placeholder='Search Any Product....'/>
                <Button ><IoSearch/></Button>
         </div>
    )
}
export default SearchBox;