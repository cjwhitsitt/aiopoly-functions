const {onRequest, onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.create = onCall((request) => {
    // Placeholder to return static values
    return {
     "groups": [
       {
         "color": "brown",
         "hex": "#964B00",
         "properties": [
           {
             "name": "Santa's Workshop",
             "rent": 450
           },
           {
             "name": "North Pole Playground",
             "rent": 550
           }
         ]
       },
       {
         "color": "railroad",
         "hex": "#646464",  // Gray for railroads
         "properties": [
           {
             "name": "Polar Express",
             "rent": 250
           },
           {
             "name": "Candy Cane Express",
             "rent": 250
           }
         ]
       },
       {
         "color": "purple",
         "hex": "#963296",
         "properties": [
           {
             "name": "Gingerbread Village",
             "rent": 300
           },
           {
             "name": "Reindeer Games Arena",
             "rent": 350
           },
           {
             "name": "Caroling Competition Stage",
             "rent": 400
           }
         ]
       },
       {
         "color": "blue",
         "hex": "#0064C8",
         "properties": [
           {
             "name": "Frozen Lake",
             "rent": 280
           },
           {
             "name": "Sledding Hill",
             "rent": 330
           },
           {
             "name": "Snow Globe Factory",
             "rent": 380
           }
         ]
       },
       {
         "color": "green",
         "hex": "#009600",
         "properties": [
           {
             "name": "Christmas Tree Farm",
             "rent": 260
           },
           {
             "name": "Elf Toy Shop",
             "rent": 310
           },
           {
             "name": "Christmas Cookie Bakery",
             "rent": 360
           }
         ]
       },
       {
         "color": "orange",
         "hex": "#FF9600",
         "properties": [
           {
             "name": "Department Store Wonderland",
             "rent": 400
           },
           {
             "name": "Cozy Toy Shop",
             "rent": 450
           },
           {
             "name": "Santa's Sleighport",
             "rent": 500
           }
         ]
       },
       {
         "color": "yellow",
         "hex": "#FFFF00",
         "properties": [
           {
             "name": "Mrs. Claus' Kitchen",
             "rent": 350
           },
           {
             "name": "The Naughty and Nice List",
             "rent": 400
           },
           {
             "name": "North Pole Post Office",
             "rent": 450
           }
         ]
       },
       {
         "color": "utility",
         "hex": "#646464",  // Gray for utilities
         "properties": [
           {
             "name": "Snowy Owl Post",
             "rent": 150
           },
           {
             "name": "Abominable Snowman Tour",
             "rent": 150
           }
         ]
       }
     ]
    };
});
