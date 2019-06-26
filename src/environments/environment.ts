// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  spotify: {
    auth: {
      clientId: '09b24f2eda9e45d3a815f95d88a129e1',
      authorizeUrl: 'https://accounts.spotify.com/authorize',
      callbackUrl: 'https://localhost:3000/auth'
    }
  },
  unsplash: {
    baseUrl: 'https://unsp-api-stg.herokuapp.com',
    endpoints: {
      collection: '/collection'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
