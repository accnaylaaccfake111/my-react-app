import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  width: '200px',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function FestivalList() {
    const isOnClick = (festivalName) => {
        toast.info(`BAN DANG TIM HIEU "${festivalName}"`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    
    return(
        <div style={{ 
            textAlign: "center",
            justifyContent: "center",
        }}>
            <h1>DANH SACH LE HOI</h1>

            <Box sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Stack direction="row" spacing={2} sx={{ mb:2 }}>
                    <Item>TET NGUYEN DAN</Item>
                    <Button variant='contained' onClick={() => isOnClick('TET NGUYEN DAN')}>
                        Chi tiet
                    </Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mb:2 }}>
                    <Item>TRUNG THU</Item>
                    <Button variant='contained' onClick={() => isOnClick('TRUNG THU')}>
                        Chi tiet
                    </Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mb:2 }}>
                    <Item>LE HOI DUA</Item>
                    <Button variant='contained' onClick={() => isOnClick('LE HOI DUA')}>
                        Chi tiet
                    </Button>
                </Stack>
            </Box>

            <ToastContainer />
        </div>
    );
}

export default FestivalList;