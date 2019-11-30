import Permissions from "../components/Permissions";
import PleaseSignIn from "../components/PleaseSignIn";

const permissions = props => (
  <PleaseSignIn>
    <Permissions />
  </PleaseSignIn>
);

export default permissions;
