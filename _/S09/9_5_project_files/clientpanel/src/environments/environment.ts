// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAB8N5Bi22whQg6FHziM6cl5Q4-fL9MLb8",
    authDomain: "clientpanelprod.firebaseapp.com",
    databaseURL: "https://clientpanelprod.firebaseio.com",
    projectId: "clientpanelprod",
    storageBucket: "clientpanelprod.appspot.com",
    messagingSenderId: "818661613185"
  }
};
