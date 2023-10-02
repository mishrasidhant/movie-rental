# Movie Rental

## Local setup
1. Install depeendencies with `yarn install`
2. Start the dev server with `yarn start` in a terminal
3. Open http://localhost:1234 in your browser

## References
Bundler used [Parcel](https://parceljs.org/recipes/react/)

## Folder Structure
> Based on https://profy.dev/article/react-folder-structure#exit-group-by-features and https://youtu.be/UUga4-z7b6s?t=581&si=miZ4UeACRrBocv-i
- `assets` -> used to store files that arent html/css/js (eg images)
- `data` -> used to store files for local storage, mocking api data, json data, etc
- `features` -> main location to store all files required to perform the features they represent => exported via index.js
  - `ui` -> Universally shared UI (header, footer, navbar, button, modal, card etc)
  - `Movie` 
  - `Customer`
  - `Staff`
  - `Login` -> group all files that relate to login functionality within this folder
  - `List` -> A user's personal watchlst/rental desired list
- `pages` -> Individual pages of the site
  - homepage (wip)
  - watchlist (tbd)
  - movies (tbd)
  - actors (tbd)
  - register (tbd)
  - settings (tbd)
  - login (could be modal instead of page?)
- `utils` -> common shared util functions based on (pure functions)[https://www.youtube.com/watch?v=fYbhD_KMCOg&t=0s]
  - datetime converter

### Other potential directories we can think of adding
- Services -> service based api calls
- Lib -> wrappers around external libraries that the front end uses (eg axios)
  - based on the (facade pattern)[https://www.youtube.com/watch?v=fHPa5xzbpaA&t=0s]