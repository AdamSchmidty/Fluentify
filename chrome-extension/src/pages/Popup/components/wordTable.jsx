import React, { useState } from 'react';

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

    const handleRemoveRow = (englishWord) => {
        console.log(`deck_${selectedDeckLang}`)
        let newDeck = JSON.parse(localStorage.getItem(`deck_${selectedDeckLang}`))
        newDeck = newDeck.filter(e => e !== englishWord);
        localStorage.setItem(`deck_${selectedDeckLang}`, newDeck)

        const updatedList = { ...wordList };
        delete updatedList[englishWord];
        setWordList(updatedList);
    };

    console.log(wordList);

    return (
        <div style={{ overflowY: 'scroll', overflowX: 'hidden', maxHeight: '200px' }}>
            <h1>{selectedDeckLang}</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead style={{ background: '#f2f2f2' }}>
                    <tr>
                        <th style={tableHeaderStyle}>English Word</th>
                        <th style={tableHeaderStyle}>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {(wordlist).map((englishWord) => (
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
