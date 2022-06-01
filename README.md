# DnD API - paired coding challenge by Ben & Sam
#####  returns player class api data from "D&D 5e API" https://github.com/5e-bits

## Setup

 - Fork and or clone repository with `git clone (cloning method)`
 - within the command line type: `git pull` for latest update


 ## Technologies
 - html
 - js

## Changelogs

#### api.js
- Created fetch request for the api and stored returned data
- imported class.js and refactored existing code to work with new class instances


### class.js
- created a js class "PlayableClass" with a constructor for reciving a json input
- Created functions for creating numerous instances of the class for each "playable class" retured by the api
- exported function and class to api.js for useage with the clientside


#### index.html
- add boilerplate with links for js and css files. Updated title.

#### index.js
- Connected frontend to backend 
- Added event listeners to trigger api calls
- Can create template result boxes to hold API data

## To do
[x] Impliment express server to allow for results to be displayed on a routed webpage
[x] Clickable results open another page to display additional information
