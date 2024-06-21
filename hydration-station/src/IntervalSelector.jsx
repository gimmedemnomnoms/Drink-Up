import { Select, MenuItem } from '@mui/material';

// eslint-disable-next-line react/prop-types
const IntervalSelector = ({ selectedInterval, onSelectInterval }) => {
    const intervals = [1, 10, 15, 30];
    const handleChange = (event) => {
        onSelectInterval(parseInt(event.target.value));
    };

    return (
        // <div >
        //     <Select sx={{  color: '#433b7a',  '&:hover': { backgroundColor: '#8dc0cf' } }} value={selectedInterval} onChange={handleChange}>
        //     {intervals.map((interval) => (
        //         <MenuItem sx={{ backgroundColor: '#f0f0f0', color: '#433b7a', '&:hover': { backgroundColor: '#d0d0d0' } }} key={interval} value={interval}>{`${interval} minute(s)`}</MenuItem>
        //     ))}
        // </Select>
        // </div>
        <div>
            <Select sx={{ 
            color: '#433b7a',
            backgroundColor: '#8dc0cf',
            '&:hover': { backgroundColor: '#6cb3c8' },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#d8e0fc',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d8e0fc',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d8e0fc',
            },
            '.MuiSvgIcon-root ': {
              fill: "white !important",
            }
          }} value={selectedInterval} onChange={handleChange}>
            {intervals.map((interval) => (
                <MenuItem sx={{ backgroundColor: '#f0f0f0', color: '#433b7a', '&:hover': { backgroundColor: '#d0d0d0' } }} key={interval} value={interval}>{`${interval} minute(s)`}</MenuItem>
            ))}
        </Select>
        </div>
        
    );
};

export default IntervalSelector;