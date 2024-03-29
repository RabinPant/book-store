import React from 'react';

import './App.css';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector} from 'reselect';
import { Switch, Route, Redirect} from 'react-router-dom';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utlis';
import ContactPage from './pages/contact/contact.component';
import { selectCurrentUser} from './redux/user/user.selectors';
class  App extends React.Component {
  
  unsubscribeFromAuth = null;


  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })

        });
      }
      else{
        setCurrentUser(userAuth);  
      }
    });
  }

  componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
  render(){
    return (
      <div>
        <Header/>
        <switch>
          <Route exact path = '/' component={HomePage}/>
          
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/contact' component={ContactPage}/>
          <Route exact path='/signin' render={()=>
          this.props.currentUser?(
            <Redirect to='/' />
            ):(
            <SignInAndSignUpPage/>
            )
          }
        />
        </switch>
  
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser :user=>dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps) (App);