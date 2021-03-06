import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
const axios = require('axios').default;

const styles = makeStyles({
    searchButton: {
        alignSelf: 'center',
        position: 'relative',
        left: '45%',
        top: -53,
        color: '#548CA8'
    },
    FormControl: {
        marginBottom: 20,
        marginTop: 20
    },
    searchInputProps: {
        color: 'white',
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },

    cssLabel: {
        color: 'white'
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important'
    },

});

const ArrayInput = () => {
    const classes = styles();
    const [search, setSearch] = useState('');
    const [index, setIndex] = useState('');

    /**
     * sendRequest - sends the array to the API
     * @param array array of numbers 
     * @returns index response from the API
     */
    const sendRequest = async (array) => {

        try {
            const response = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/calculate/',
                headers: {},
                data: {
                    array: array, // This is the body part
                }
            });
            return (response.data.index);
        } catch (err) {
            return err
        }
    }

    /**
     * handleSearch - handles the search variable when search is triggered
     * @param e - event passed from the form
     * return - error if failed request
     */
    const handleSearch = async (e = null) => {

        if (e) {
            e.preventDefault()
        }
        let array = [];
        if (search.length > 0) {
            array = search.split(' ');
        } else {
            setIndex('Error, please wrtite at least one number!');
            return;
        }

        const newArray = array.map(element => parseInt(element));
        try {
            const index = await sendRequest(newArray);
            setIndex(index);
        } catch (error) {
            console.error(error);
        }
    }
    /**
     * generateIndexComponent - dinamically generates two html elements with the index state
     * @param index 
     * @returns Component
     */
    const generateIndexComponent = (index) => {
        return (
            <div style={{ textAlign: 'center' }}>
                <h5 style={{ padding: 0, margin: 0 }}>The index where the subarrays are equal is:</h5>
                <h5>{index}</h5>
            </div>

        )
    }

    /**
     * handleInput - manages all changes in the input
     * @param e - event passed from the form
     * return - error if failed request
     */
    const handleInput = (e) => {
        const searchText = e.target.value
        if (Number.isInteger(parseInt(searchText[searchText.length - 1])) ||
            (searchText[searchText.length - 1] === ' ' && searchText[searchText.length - 2] !== ' ' && searchText[searchText.length - 2] !== undefined) ||
            !searchText[searchText.length - 1])
            setSearch(searchText)
    }

    return (
        <div>
            <form noValidate autoComplete='off' onSubmit={(e) => handleSearch(e)}>
                <FormControl fullWidth className={classes.FormControl}>
                    <TextField
                        required
                        className={classes.textField}
                        InputLabelProps={{
                            classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            },
                        }}
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                            inputMode: "numeric"
                        }}
                        inputProps={{ className: classes.searchInputProps }}
                        value={search}
                        label="Enter an array"
                        variant="outlined"
                        onChange={(e) => handleInput(e)}
                        fullWidth />
                    <IconButton aria-label="search" className={classes.searchButton} onClick={() => handleSearch()}>
                        <SearchIcon />
                    </IconButton>
                </FormControl>
            </form>
            {index ? generateIndexComponent(index) : null}
        </div>
    );
}

export default ArrayInput;