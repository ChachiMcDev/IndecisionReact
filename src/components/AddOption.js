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
            {<p className='add-option--error text-yellow italic text-5xl text-center p-7 mt-6'>{error}</p>}
            <form className='flex p-6 ' onSubmit={handleAddOption}>
                <input className='flex-1 border-solid border-b-[0.6rem] border-r-[0.6rem] border-blue-900 mr-5 p-5 text-white bg-blue-500 mr-5 p-5' type='text' name='option' placeholder='Enter Something To do!' />
                <button className="bg-violet-600 text-white p-5 font-medium pointer">Add Option</button>
            </form>
        </div>
    )
}

export default AddOption