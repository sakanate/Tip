import React from 'react';

import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';

function NetworkSelect() {
    return (
        <FormControl>
            <NativeSelect
            defaultValue={3}
            >
                <option value={3}>Ropsten</option>
            </NativeSelect>
        </FormControl>
    );
}

export default NetworkSelect;
