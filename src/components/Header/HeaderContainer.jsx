import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authThunkCreator, logoutThunkCreator } from '../../redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {    
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {        
    return {
        auth: state.auth
    }
}

export const HeaderWrapper = connect(mapStateToProps, {authThunkCreator, logoutThunkCreator})(HeaderContainer);

export default HeaderContainer;