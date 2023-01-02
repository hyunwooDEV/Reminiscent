import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Stack, Grid} from '@mui/material';



export default function Write() {


  return (

  <div>
    <h3>추억을 남겨봐요</h3>
    <h4>같은 추억을 보낸사람에게 닿을지몰라요</h4>
    <Stack sx={{              
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>
        <TextField
            sx={{
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                    height: 80
                },
                marginTop:5
            }}
            id="standard-basic"
            label="제목"
        />
       <TextField
            sx={{
                width: 300,
                marginTop:3
            }}
            InputProps={{ sx: { height: 300 } }}
            label="내용"
        />        
    </Stack>
  </div>

  )
}