
import { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

// eslint-disable-next-line react/prop-types
function ReminderSettings({ onIntervalChange }){
    const [intervalValue, setIntervalValue] = useState(1);

    const handleIntervalChange = (event) => {
        const newInterval = parseInt(event.target.value);
        setIntervalValue(newInterval);
        onIntervalChange(newInterval);
    };

    return (
        <div>
            <FormControl>
                <Select value={intervalValue} onChange={handleIntervalChange}>
                    <MenuItem value={1}>Every 1 minute</MenuItem>
                    <MenuItem value={15}>Every 15 minutes</MenuItem>
                    <MenuItem value={30}>Every 30 minutes</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
export default ReminderSettings;