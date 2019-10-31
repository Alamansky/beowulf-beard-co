import { Mutation } from "react-apollo";
import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import SignOut from "./SignOut";
import { TOGGLE_CART_MUTATION } from "./Cart";
import CartCount from "./CartCount";

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <React.Fragment>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/signup">
              <a>Sign In</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/account">
              <a>Account</a>
            </Link>
            <SignOut />
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => (
                <button onClick={toggleCart}>
                  My Cart
                  <CartCount
                    count={me.cart.reduce(
                      (tally, cartItem) => tally + cartItem.quantity,
                      0
                    )}
                  />
                </button>
              )}
            </Mutation>
          </React.Fragment>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
