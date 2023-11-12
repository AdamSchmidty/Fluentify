import React, { useState, useEffect } from 'react';

const tableHeaderStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
    padding: '10px',
    textAlign: 'left',
};

export const WordTable = ({ wordlist, selectedDeckLang }) => {
    const [wordList, setWordList] = useState(wordlist);

    useEffect(() => {
        const updatedWordList = JSON.parse(localStorage.getItem(`deck_${selectedDeckLang}`));
        setWordList(updatedWordList);
    }, [selectedDeckLang]);


    const handleRemoveRow = (englishWord) => {
        console.log(`Attempting to remove: ${selectedDeckLang}`)
        let oldDeck = JSON.parse(localStorage.getItem(`deck_${selectedDeckLang}`))
        oldDeck = oldDeck.filter(e => e !== englishWord);
        localStorage.setItem(`deck_${selectedDeckLang}`, JSON.stringify(oldDeck))
        setWordList(oldDeck);
    };


    return (
        <div style={{ overflowY: 'scroll', overflowX: 'hidden', maxHeight: '200px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead style={{ background: '#f2f2f2' }}>
                    <tr>
                        <th style={tableHeaderStyle}>English Word</th>
                        <th style={tableHeaderStyle}>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {(wordList).map((englishWord) => (
                        <tr key={englishWord} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={tableCellStyle}>{englishWord}</td>
                            <td style={tableCellStyle}>
                                <img width="30px" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" onClick={() => handleRemoveRow(englishWord)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
