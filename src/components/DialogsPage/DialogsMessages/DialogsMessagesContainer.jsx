import {connect} from 'react-redux';
import DialogsMessages from './DialogsMessages';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages
    }
}

const DialogsMessagesContainer = connect(mapStateToProps)(DialogsMessages);

export default DialogsMessagesContainer;