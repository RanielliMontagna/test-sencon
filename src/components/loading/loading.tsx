import { memo } from 'react';
import { CircularProgress } from '@mui/material';
import { Backdrop } from './loading.styles';

const Loading = () => (
  <Backdrop>
    <CircularProgress size={80} thickness={3} />
  </Backdrop>
);

export default memo(Loading);
