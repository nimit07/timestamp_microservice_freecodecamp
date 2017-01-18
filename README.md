# TIMESTAMP MICROSERVICE


Welcome to Freecodecamp's  Node.js api task project TIMESTAMP MICROSERVICE!


## Running the server



1) you can launch the app from the Terminal:
    $ npm install
    $ node server.js

url routes

1) / => response:{"unix": null,"date": null}

2) /1450137600 => response:{"unix": "1450137600","date": "December 15 2015"}

3) /December%2015,%202015 => response:{"unix": "1450137600","date": "December 15 2015"}
    
