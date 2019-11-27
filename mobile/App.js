import React from "react";
import Routes from "./src/routes";

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Failed child context type',
])

export default function App() {
  return <Routes />;
}
