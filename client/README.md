## Getting Started - local dev
From dir `./client`, for a local dev environment run
```
npm install
npm run start:dev
```
For the prod bundle, run `npm run build`, and you can serve the bundle with `npm start`.

To run with docker, run
```
docker build -t prayer-wall -f Dockerfile .
docker run -p 8080:8080 prayer-wall
```

Navigate to localhost:8080 to view the app.

## Tests
To run tests, run `npm run test`. 

TODO:
- add config for integrating with react DOM and typescript
