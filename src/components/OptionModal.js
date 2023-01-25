import Modal from 'react-modal'

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => {


    return (
        <Modal
            isOpen={!!selectedOption}
            contentLabel="selected option"
            onRequestClose={handleClearSelectedOption}
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}
        >
            <h3>Selected Option</h3>
            {selectedOption ? <p>{selectedOption}</p> : null}
            <button className="button" onClick={handleClearSelectedOption}>Close</button>
        </Modal>
    )
}

export default OptionModal