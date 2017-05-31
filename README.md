# To build and run app locally:

in `/frontend`
+ `npm install`
+ `webpack`

in `/backend`:
+ `rails s`

in `/frontend`
+ `npm run package-mac` / `package-win` / `package-linux` based on your OS
+ open the generated app (Stopify will be in `/frontend/release-builds`)

# To run app in developer mode:

in `/frontend`:
+ `npm install`
+ `webpack -w`

in `/backend`:
+ `rails s`

in `/frontend`:
+ `npm start` (runs `electron .`)

# Once the app is running locally

+ Add songs to the app using the `Choose Files` button - you can
currently only select folders that contain .mp3 files
+ Once you've added songs to the app, clicking on a song will play it
