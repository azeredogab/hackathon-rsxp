import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import List from "./pages/List";
import Detail from "./pages/Detail";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login, List, Detail
  })
);

export default Routes;
