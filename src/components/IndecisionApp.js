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
        const opts = JSON.parse(localStorage.getItem('options'))


        if (opts) {
            setOptions(opts)
        }
    }, [])




    // useEffect(() => {
    //     localStorage.setItem('options', JSON.stringify(options))
    // }, [options]);



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
        const localOpt = options.concat(opt)
        setOptions(localOpt)

        //stupid work around because useEffect is not working as expected
        localStorage.setItem('options', JSON.stringify(localOpt))

    }

    const handleClearSelectedOption = () => {
        setSelectedOption(undefined)
    }

    const handleDeleteOptions = () => {
        setOptions([])
    }


    const handleDeleteOne = (optToRemove) => {
        setOptions(options.filter((opt) => optToRemove !== opt))

    }




    const subtitle = 'Put your life in the hands of a computer!'
    return (
        <div>
            <Header subtitle={subtitle} title='Indecision App' />
            <div className="container mr-auto ml-auto pr-7 pl-7 text-left">
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