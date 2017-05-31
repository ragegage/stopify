# To build and run app locally:

in `/frontend`
+ `npm run package-mac` / `package-win` / `package-linux` based on your OS
+ open the generated app (will be in `/frontend/release-builds`)

in `/backend`:
+ `rails s`

# To run app in developer mode:

in `/frontend`:
+ `webpack -w`

in `/backend`:
+ `rails s`

in `/frontend`:
+ `npm start` (runs `electron .`)
