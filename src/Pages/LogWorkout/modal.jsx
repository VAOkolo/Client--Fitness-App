import React, { useState } from 'react'
import './modalStyle.css'

export default function Modal({ open, onClose, url, id, data, exercise, workoutSetId, rows, addRow, submitData }) {
    if (!open) {
        return null
    }

    return (
        <div className="overlay container" id={workoutSetId}>
            <div className="modalContainer row">
                <div className='col'>
                    <h2>{exercise}</h2>
                    <button onClick={addRow}>+</button>
                </div>
                <div className='col'>
                    <table>
                        <thead>
                            <tr >
                                <th>{exercise}</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((render, index) => (
                                <tr key={index}>
                                    <td>Set {index + 1}</td>
                                    <td>{render.reps}</td>
                                    <td>{render.weights}</td>
                                </tr>
                            ))}
                            {rows && rows.map((row, index) => (
                                <tr className='sets' id={id} key={index}>
                                    <td>Set {index + 1}</td>
                                    <td>
                                        <input type="number" placeholder="reps" />
                                    </td>
                                    <td>
                                        <input type="number" placeholder="weights" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={submitData}>Submit</button>
                </div>
                <div>
                    <iframe width="220" height="115"
                        src={url}>
                    </iframe>
                </div>
                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                </div>
            </div>
        </div >
    )
}
