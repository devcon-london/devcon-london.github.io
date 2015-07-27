# DevCon develop branch

## Install Local deps
```
npm install
```

Run all npm commands from root!

## Run client
```
npm run dev
```

## Run server (api)
```
npm run server
```

## Client deployment
The client is hosted on Github pages (master branch)
To be able to deploy, you need to create a `ship.conf` file with:
```
gh-pages:
  username: <username>
  password: "<password>"
  repo: devcon-london/devcon-london.github.io
  branch: master
```
and then run:
```
npm run deploy-client
```

## Server deployment
The server (api) is hosted on Heroku. To be able to deploy you need to install the Heroku Toolbelt: https://toolbelt.heroku.com/ and get permissions (@peduarte is currently the owner of the Heroku app).
then, add new heroku remote:
```
heroku git:remote -a devconlondon
```
and finally:
```
npm run deploy-server
```
