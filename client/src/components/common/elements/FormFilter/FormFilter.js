import React, {useState} from 'react';
import {FormControl, Button, TextField} from '@mui/material';
import getIconComponent from '../../../../utils/iconUtils';
import classes from './FormFilter.module.css';
import Autocomplete from '@mui/material/Autocomplete';

const FormFilter = (props) => {
    //if attr not pass then set default value 
    const {
        handleSearch = () => {},
        handleNew = () => {},
        handleClear = () => {},
        showNewButton = true,
        showClearButton = true,
        filterValue,
        setFilterValue,
        autocompletes = [],
      } = props;    

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };    

    return (
        <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row' }}>
            {autocompletes.map((autocomplete, index) => {
                // Destructure customProps and other props
                const { customProps, ...otherProps } = autocomplete;

                // Use customProps for additional logic or styles
                const customWidth = customProps ? customProps.autoCompleteWidth : '15%';

                return (
                    <Autocomplete
                        key={index}
                        {...otherProps}
                        value={otherProps.defaultValue}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        renderOption={otherProps.renderOption}
                        renderInput={
                            otherProps.renderInput 
                            ? otherProps.renderInput 
                            : (params) => <TextField {...params} label="Default Label" />
                        }                
                        sx={{ width: customWidth, mr: 1 }} // Use customWidth
                    />
                );
            })}            
            <TextField 
                label="Filter" 
                value={filterValue} // Control value with state variable
                onChange={handleFilterChange} // Listen for changes
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                sx={{ flexGrow: 1, marginRight: '8px' }} 
            />            
            <Button
                variant="contained"
                onClick={handleSearch}
                startIcon={getIconComponent('search-sharp')}
                className={classes.buttonSearch} 
                sx={{ marginRight: '8px' }}
            >
                Search
            </Button>
            <Button 
                variant="contained" 
                color="primary"
                onClick={handleNew}
                startIcon={getIconComponent('add-circle-outline-sharp')}
                className={classes.buttonNew}
                sx={{ marginRight: '8px', display: showNewButton ? 'flex' : 'none' }}
            >
                New
            </Button>
            <Button 
                variant="contained" 
                color="primary"
                onClick={handleClear}
                startIcon={getIconComponent('restart-alt-sharp')}
                className={classes.buttonClear}
                sx={{ display: showClearButton ? 'flex' : 'none' }}
            >
                Clear
            </Button>                
        </FormControl> 
  );
};

export default FormFilter;
