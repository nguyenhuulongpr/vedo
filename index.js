/**
 * @format
 */

import { LogBox, AppRegistry } from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
LogBox.ignoreAllLogs();