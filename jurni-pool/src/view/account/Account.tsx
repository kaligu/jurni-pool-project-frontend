import NavigationBar from '../../components/NavigationBar'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Account() {
  return (
    <div>
      <NavigationBar clickedState={5}/>

      
      
      <div className='w-screen h-96 flex justify-center items-center'>
        <div className='w-11/12 h-5/6 bg-[#F1FCFD] border-black border-2 rounded-lg'>
          <div className='flex flex-col'>
            <div className='ml-3 mt-3'><h1 className='text-lg font-semibold italic'> මාගේ වාහන </h1></div>
            <div><Button variant="outlined" color="success" startIcon={<AddIcon/>}>Outlined</Button></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
