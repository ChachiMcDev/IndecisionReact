import Option from "./Option";

const Options = ({ options, deleteOne, deleteOptions }) => {

    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" onClick={deleteOptions}>Remove All</button>
            </div>
            {options.length === 0 ? <p className="widget_message">Please add an option to get started!</p> : null}
            {options.map((opt, index) => {
                return <Option deleteOne={deleteOne} count={index + 1} key={opt} optionText={opt} />
            })}
        </div>
    )
}


export default Options

