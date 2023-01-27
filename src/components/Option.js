const Option = ({ count, optionText, deleteOne }) => {

    return (
        <div className="option flex justify-between pt-12 pb-12 pr-7 pl-7 border-b border-b-solid border-b-blue-500">
            <p className="text-black font-medium text-4xl m-0 break-all">{count}. {optionText}</p>
            <button className="button button--link" onClick={() => deleteOne(optionText)}>Remove</button>
        </div>
    )
}

export default Option