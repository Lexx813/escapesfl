import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Youtube extends React.Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="youtube">
        <div>
          <span onClick={this.openModal}>
            <h2 className="youtube__title">Press Play!</h2>
            <i className="fas youtube__icon fa-play" />
          </span>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="youtube Modal"
        >
          <span onClick={this.closeModal}>
            <i className="fas fa-window-close" />
          </span>

          <iframe
            title="Escapes youtube video"
            width="500"
            height="300"
            src="https://www.youtube.com/embed/_dLDQu6kOWE"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </Modal>
      </div>
    );
  }
}
export default Youtube;
