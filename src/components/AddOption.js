import { useState } from 'react'

const AddOption = ({ addOption }) => {

    const [error, setError] = useState(undefined)

    const handleAddOption = (e) => {
        e.preventDefault()

        const optionVal = e.target.elements.option.value.trim()
        setError(addOption(optionVal))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }

    return (
        <div className="add-option">
            {<p className='add-option--error'>{error}</p>}
            <form className='flex-1 p-6 ' onSubmit={handleAddOption}>
                <input className='flex-1 border-solid border-2 border-indigo-600 mr-5 p-5' type='text' name='option' />
                <button className="bg-violet-600 text-white p-5 font-medium pointer">Add Option</button>
            </form>
        </div>
    )
}

export default AddOption