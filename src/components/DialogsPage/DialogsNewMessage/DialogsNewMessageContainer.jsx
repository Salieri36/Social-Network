import DialogsNewMessage from "./DialogsNewMessage";
import { connect } from "react-redux";
import {updateMessage, addMessage, sendNewMessage} from "../../../redux/reducers/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        newMessagesText: state.dialogsPage.newMessagesText
    }
}

const DialogsNewMessageContainer = connect(mapStateToProps, {updateMessage, addMessage, sendNewMessage})(DialogsNewMessage);

export default DialogsNewMessageContainer;