import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import xss from 'xss';

function MeetingKeyInput() {
  const key = useSelector((state) => state.meeting.key);
  const error = useSelector((state) => state.meeting.errors.key);
  const dispatch = useDispatch();
  return (
    <Box mt={4} width={240}>
      <TextField
        id="key"
        name="key"
        label="Type your meeting key"
        variant="standard"
        size="small"
        onChange={(e) => {
          dispatch({ type: 'meeting-key', value: xss(e.target.value.replace(/[^-A-Za-z0-9]+/g, '-').toLowerCase()) });
        }}
        value={key}
        error={!!error}
        helperText={error || 'Alphanumerical characters and dashes'}
        fullWidth
        autoFocus
      />
    </Box>
  );
}

export default MeetingKeyInput;
