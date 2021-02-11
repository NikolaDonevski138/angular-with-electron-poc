# AngularWithElectronPoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

# How electron was set

Usefull link:

- https://www.positronx.io/build-electron-desktop-app-with-angular-8-electron-angular-tutorial/?fbclid=IwAR1GoremSv7VcgALokG3O-0JY9bUMIiUawIXhYhmmWeh9yDX9G32su34McU

# Main Process

i wrote main process into main.js this file is node.js file which include electron framework. This file is consist of some methods and functions.

- Imported several objects from electron and node js core modules like(url and path).
- Line 7 is a function who initialize how sholuld big screen size of desktop app should be with help of BrowserWindow object from electron, in webPreferences with nodeIntegration: true, i give access to Renderer process to use native api and electron features from electron framework to Angular app.

- Line 16 object appWindow with method loadUrl to configure the path where to build the application, this is build with command into package json when we run (npm run start:electron - this command invoke ng build script).

- Line 24 for using devtools.

- necessary is declaring event listeners, there are several event listeners: for closing window(line 16), to check if app is ready(line 31), app quit(line 33) and line 39 for invoke function to create window.

- Also i used Notification native api from electron.

# How to run a project

1. clone repo with help of git commands
2. npm install
3. npm run start:electron
