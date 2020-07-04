import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { Route, withRouter } from 'react-router-dom';
import DialogsPage from './components/DialogsPage/DialogsPage';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import { HeaderWrapper } from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import { connect } from 'react-redux';
import { authThunkCreator, initTK } from './redux/reducers/auth-reducer';
import { compose } from 'redux';
import { getAllUsersInfoTK } from './redux/reducers/profile-reducer';

class App extends React.Component {
	componentDidMount() {		
		this.props.initTK();
		let userId = this.props.match.params.userId;
        if (!userId) {            
            userId = this.props.userData.id;
        }
		this.props.getAllUsersInfoTK(userId);
	}
	render() {		
		if (!this.props.auth.init) {			
			return "loading";
		}
		return(
			<div className = 'app'>
			<HeaderWrapper />
			<Sidebar />
			<Route path = '/dialogs' component = {DialogsPage} />
			<Route path = '/profile/:userId?' component = {ProfilePage} />			
			<Route path = '/users' component = {UsersPageContainer} />
			<Route path = '/login' component = {LoginContainer} />		
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		userData: state.auth.userData,
	}
}

export default compose(
	connect(mapStateToProps, {authThunkCreator, initTK, getAllUsersInfoTK}),
	withRouter
)(App);

