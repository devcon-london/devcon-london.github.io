# DevCon develop branch

`npm install`

Run all npm commands from root!

## Run client
`npm run dev`

## Run server (api)
`npm run server`

## Deploy - from develop branch
`npm run deploy`

To deploy properly you need to create a ship.conf file in your root with the following:
```
gh-pages:
  username: <username>
  password: "<password>"
  repo: devcon-london/devcon-london.github.io
  branch: master
```
