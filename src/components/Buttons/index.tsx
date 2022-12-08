import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

export default function Buttons(props: { type: string; text: string; }) {
  const {type, text} = props;
  return (
    <Stack spacing={2} direction="row">
        {
            {
                'outline': <Button variant="outlined">{text}</Button>,
                'solid': <Button variant="contained">{text}</Button>,
                'text': <Button variant="text">{text}</Button>
            }[type]
        }
    </Stack>
  );
}
