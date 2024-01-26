import NavigationBar from '../../components/NavigationBar'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Account() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
    <NavigationBar clickedState={5} />
  
    <div className='w-screen h-96 flex justify-center items-center'>
      <div className='w-11/12 h-5/6 bg-[#F1FCFD] border-black border-2 rounded-lg'>
        <div className='flex flex-col'>
          <div className='ml-3 mt-3'>
            <h1 className='text-lg font-semibold italic'> මාගේ වාහන </h1>
          </div>
          <div className='ml-5 mt-3'>
            <Button variant="outlined" color="primary" startIcon={<AddIcon />} onClick={handleOpen}>
              අලුත් වාහනයක් එක් කිරීමට
            </Button>
          </div>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                ඔබගේ වාහනයේ විස්තර පහතින් පුරවන්න
                </Typography>
                <Typography id="modal-modal-content" sx={{ mt: 2 }}>
                  *must
                </Typography>
                <div className='mt-5 ml-5 flex flex-col space-y-2'>
                  <div>
                  <TextField id="outlined-basic" label="වාහනයේ අංකය" variant="outlined" />
                  </div>
                  <div>
                  <TextField id="outlined-basic" label="වාහනයේ අංකය" variant="outlined" />
                  </div>
                 
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Account
