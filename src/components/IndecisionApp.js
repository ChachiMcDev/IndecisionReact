import { useEffect, useState } from 'react'
import AddOption from './AddOption'
import Header from "./Header"
import Options from './Options'
import OptionModal from './OptionModal'
import Action from './Action'

const IndecisionApp = () => {

    const [options, setOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState(undefined)

    useEffect(() => {
        const opts = JSON.parse(window.localStorage.getItem('options'))
        if (opts) {
            setOptions(options.concat(opts))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('options', JSON.stringify(options))
    });


    const handlePick = () => {
        const num = Math.floor(Math.random() * options.length)
        const getPick = options[num]
        setSelectedOption(getPick)
    }


    const handleAddOption = (opt) => {
        if (!opt) {
            return 'Enter Valid Item'
        } else if (options.indexOf(opt) > -1) {
            return 'Option Already Exists'
        }
        setOptions(options.concat(opt))
    }

    const handleClearSelectedOption = () => {
        setSelectedOption(undefined)
    }

    const handleDeleteOptions = () => {
        setOptions([])
    }

    ///look into this one.......
    const handleDeleteOne = (optToRemove) => {
        setOptions(options.filter((opt) => optToRemove !== opt))

    }


    const subtitle = 'Put your life in the hands of a computer!'
    return (
        <div>
            <Header subtitle={subtitle} title='Indecision App' />
            <div className="container">
                <Action handlePick={handlePick} hasOptions={options.length > 0} />
                <div className="widget">
                    <Options options={options} deleteOne={handleDeleteOne} deleteOptions={handleDeleteOptions} />
                    <AddOption addOption={handleAddOption} />
                </div>

            </div>
            <OptionModal selectedOption={selectedOption} handleClearSelectedOption={handleClearSelectedOption} />
        </div>
    )
}

export default IndecisionApp