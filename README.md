# ionic-angularfire-sample
####Same as the [Ionic2 AngularFire2](http://www.clearlyinnovative.com/integrating-firebase-with-angularfire2-into-angularjs-ionic2) example, but in Ionic1...
--

In `app.js` configure application with your firebase information
```Javascript
  //
  // SET THE CONSTANTS FOR THE REFS FOR FIREBASE/ANGULARFIRE
  .value("AUTHREF", new Firebase("https://[YOUR-STUFF].firebaseio.com/"))
  .value("TEXT_ITEMS_REF", new Firebase("https://[YOUR-STUFF].firebaseio.com/textItems"))
```

Below is an example of the JSON structure of the data as it is inserted into Firebase
```
  "textItems" : {
    "-KGXpWalkX0L60N5ZKwK" : {
      "description" : "Does it work or not??",
      "timestamp" : 1461947079013,
      "title" : "Just Added Moment",
      "user" : "aaron@mail.com"
    },
    "-KGXzI8JTr68-BawZRla" : {
      "description" : "And Some descriptive text to go along with it",
      "timestamp" : 1461949641044,
      "title" : "This is my Title",
      "user" : "bryce@mail.com"
    },
    "-KGZ-3N3iPaP6muZtiQE" : {
      "description" : "Yomama",
      "timestamp" : 1461966619244,
      "title" : "Test111",
      "user" : "pato@tampa.com"
    },
    "-KG_G3Fra-IbjYf9zREA" : {
      "description" : "testing on different devices",
      "timestamp" : 1461987854615,
      "title" : "on windows",
      "user" : "bryce@mail.com"
    }
  }
 ```
