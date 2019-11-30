import Signup from "../components/Signup";
import Signin from "../components/Signin";
import RequestReset from "../components/RequestReset";
import User from "../components/User";
import SignOut from "../components/SignOut";
import { theme } from "../components/Page";
import Center from "../components/styles/Center";

import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const adminSignin = props => (
  <User>
    {user => {
      return user.data.me ? (
        <Center>
          <p>
            You are currently signed in as a site admin. Click the button below
            to sign out so you can view the site as a customer.
          </p>
          <SignOut backgroundColor={theme.redRGB} />
        </Center>
      ) : (
        <Columns>
          <Signin />
        </Columns>
      );
    }}
  </User>
);

export default adminSignin;
