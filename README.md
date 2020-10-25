# password_generator

# This website will generate a random and secure passoword to the user.
The user will be prompted to go through eight different prompts asking if theey would like certain letter, character or numerical elements inside of their password. From the users selection a completely randomized password will be delivered to the user. 

# Tech
This website contains three folders of code including HTML, CSS and Javascript. 
* HTML is made up of a header followed by a div block that contains an h2, a text box and a generate button all contained inside of a wrapper. 
* CSS the page is dynamically formated by percentages with three different size breaks for the button and text inside the div text box.  
* Javascript - there are five arrays containing all of the different letter, number and character text element options. There are two algorithms ulilized to generate and select random elements from the array. The function math.random is used to randomize results as well as the floor element to round to an even number. An if else statement is used to determine bettween multiple items. An event listener has been added to the generate button and eight prompts probing the user on what types of elements they would like to include in their password. After the generator runs through all of the propts it delivers the secure password inide of the dive text box.
