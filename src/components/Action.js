

const Action = ({ handlePick, hasOptions }) => {


    return (
        <div>
            <button className="big-button"
                onClick={handlePick}
                disabled={!hasOptions}
            >
                What Should I do?</button>
        </div>
    )
}

export default Action