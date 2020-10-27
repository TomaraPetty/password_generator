# password_generator

Link to site: https://tomararuth.github.io/password_generator/

# Overview of website functions:
This website will generate a random and secure passoword to the user.The user will be prompted to go through several different prompts asking if they would like certain letter, character or numerical elements inside of their password. Based on the user's selection a completely randomized password will be delivered to the user. 

# Tech:
This website contains three folders of code including HTML, CSS and Javascript. 
* HTML is made up of a header followed by a div block that contains an h2, a text box and a generate button all contained inside of a wrapper. 
* CSS the page is dynamically formated by percentages with three different size breaks for the button and text inside the div text box.  
* Javascript 
-The different character types are stored in different arrays pulled from character codes. Each array of characters is randomized by utilizing Math random and Math floor to round it down to an even number. 
-An event listener was added to the generate button so that it sends the user a series of prompts and confirst to determin what types of characters they would like to include in their password. 
-If else statement is used to determine which items to push into an array of character types the user has selected.  
-A for loop runs the function to grab a random characters. It will run the number of times that the user entered as the amount of characters they would like to use.    
-After the generator runs through all of the propts it delivers the secure password inide of the div text.
