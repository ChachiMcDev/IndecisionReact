const Option = ({ count, optionText, deleteOne }) => {

    return (
        <div className="option">
            <p>{count}. {optionText}</p>
            <button className="button button--link" onClick={() => deleteOne(optionText)}>Remove</button>
        </div>
    )
}

export default Option