import React, { useState } from 'react';

const Form = () => {

    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const id = event.target.id
        const value = event.target.value
        form[id] = value
        setForm(form)
    }

    const handleClick = () => {
        console.log(form)
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="w-50 card">
                <div className="card-header">
                    Create a Hero
                </div>
                <div className="card-body">
                    <label className="d-flex justify-content-between col-form-label">Hero Name</label>
                    <input type="text" placeholder="Hero Name" className="form-control" id="name" onChange={handleChange} />
                    <label className="d-flex justify-content-between col-form-label">Phrase</label>
                    <input type="text" placeholder="Phrase" className="form-control" id="phrase" onChange={handleChange} />
                    <label className="d-flex justify-content-between col-form-label">Universe</label>
                    <div className="d-flex justify-content-between form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="universe" value="marvel" onChange={handleChange} />
                            Marvel
                        </label>
                    </div>
                    <div className="d-flex justify-content-between form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="universe" value="dc" onChange={handleChange} />
                            D.C Comics
                        </label>
                    </div>
                    <button type="button" className="mt-2 btn btn-primary" onClick={handleClick}>Create</button>
                </div>
            </div>
        </div>
    );
}

export default Form;