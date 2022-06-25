import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";

import { UserContext } from "../context/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import { CartContext } from "../context/cart.context";

import { ReactComponent as CrwnLogo } from '../assets/crown.svg'

import CartIcon from "./cart-icon.component";
import CartDropdown from "./cart-dropdown.component";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from '../styles/navigation.styles'


const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {
            currentUser ?
              <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink> :
              <NavLink to="/auth">Sign In</NavLink>
          }

          <CartIcon type='button' />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;