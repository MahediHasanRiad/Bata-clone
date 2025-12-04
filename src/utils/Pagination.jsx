import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationControlled = () => {
  const [page, setPage] = useState(3);


  const handleChange = value => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className='my-6 items-center'>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={100} page={page} size='large' onChange={handleChange} />
    </Stack>
  );
}

export default PaginationControlled
