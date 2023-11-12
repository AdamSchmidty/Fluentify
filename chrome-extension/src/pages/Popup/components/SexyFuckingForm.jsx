import React, { useState } from 'react';

const SexyFuckingForm = ({ wordlist, setWordList, selectedDeckLang }) => {
    const [values, setValues] = useState({
        newWord: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        console.log('submitted')
        event.preventDefault();
        const newWordList = [...wordlist, values.newWord]; // Use push to add the new word to the array
        setWordList(newWordList);
        console.log(`Storage: deck_${selectedDeckLang}`)
        localStorage.setItem(`deck_${selectedDeckLang}`, JSON.stringify(newWordList));
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <input
                type="text"
                name="newWord"
                placeholder="Add Word"
                value={values.newWord}
                onChange={handleChange}
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
                Submit
            </button>
        </form>
    );
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '260',
    margin: '20px',
};

const inputStyle = {
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#4caf50',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
};

export default SexyFuckingForm;
