/*
 *
 * This is used to build the bundle with browserify.
 *
 * The bundle is used by people who doesn't use browserify.
 * Those who use browserify will install with npm and require the module,
 * the package.json file points to index.js.
 */
var Auth0LockPasswordless = require('./index');

import styles from '../css/index.css';
import transitions from '../css/transitions.css';
import overwrites from '../css/overwrites.css';

//use amd or just throught to window object.
if (typeof global.window.define == 'function' && global.window.define.amd) {
  global.window.define('auth0LockPasswordless', function () { return Auth0LockPasswordless; });
} else if (global.window) {
  global.window.Auth0LockPasswordless = Auth0LockPasswordless;
}
