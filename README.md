# GPS 2.2
## Create an Electronic Grocery List
This is a Guided Pairing Session Challenge. Please complete Release 0 prior to your session, but do not work on any other part of the challenge.

### Summary
In this challenge, you will create an electronic grocery list command-line application where you will focus on passing data between different methods and solidify how methods can interact with one another without using a class structure.

Teachers on site have requested students have more practice passing information between methods. Using a class structure would allow you to bypass this knowledge by giving you access to instance variables that can be used throughout a class, so please don't do that.

### Release 0: Prepare
Both you and your pair should do the following in your phase-0-tracks repository (using your command line):

Checkout a new feature branch
Within the "ruby" directory, create a new file called gps2_2.rb
Create a pull request to your repository, merge it.
Submit your link to the file immediately for this challenge so your guide can give you feedback. It should look something like:
https://github.com/<USERNAME>/phase-0-tracks/blob/master/ruby/gps2_2.rb

### Release 1: Pseudocode
With your pair, discuss who is going to drive and who will navigate first and when you will switch off.

Your grocery list has the following minimum requirements. You will need to have separate methods for each of the following use cases:

Create a new list
Add an item with a quantity to the list
Remove an item from the list
Update quantities for items in your list
Print the list (Consider how to make it look nice!)
We've gotten you started:
------------------------------------------------------------------------------------
>> Method to create a list
>> input: string of items separated by spaces (example: "carrots apples cereal pizza")
>> steps:
  >> (fill in any steps here)
  >> set default quantity
  >> print the list to the console (can you use one of your other methods here?)
>> output: (what data type goes here, array or hash?)
>>
>> Method to add an item to a list
>> input: item name and optional quantity
>> steps:
>> output:
>>
>> Method to remove an item from the list
>> input:
>> steps:
>> output:
>>
>> Method to update the quantity of an item
>> input:
>> steps:
>> output:
>>
>> Method to print a list and make it look pretty
>> input:
>> steps:
>> output:
------------------------------------------------------------------------------------
First, you'll want to determine which data structure you should use for your grocery list based on these requirements. Does an array or a hash make the most sense and why?

When breaking down the problem into pseudocode, consider what is passed in to and what is returned from each method. (HINT: methods can accept other methods as arguments or be called within other methods.)

Remember to keep your pseudocode in plain English and write it so that it's easy to translate to your initial solution. Identify the input and output. Your pseudocode should also avoid using language-specific words, include proper indentation, and capitalize keywords like IF, WHILE, etc.

### Release 2: Initial Solution
Using your pseudocode, create your initial solution. If you've spent the time to write your pseudocode in enough detail, this should be relatively easy.

Remember, your initial solution should not include any special Ruby methods. Keep the logic basic so you can incorporate fun methods when you refactor!

### Release 3: Test your solution
Make sure your code works as you expect. Using your initial solution:

>> Create a new list
>> Add the following items to your list
>> Lemonade, qty: 2
>> Tomatoes, qty: 3
>> Onions, qty: 1
>> Ice Cream, qty: 4
>> Remove the Lemonade from your list
>> Update the Ice Cream quantity to 1
>> Print out your list (Is this readable and nice looking)?
>> If any of your methods didn't work as expected, go back and fix them. Make sure the code works as expected before moving on.

### Release 4: Refactor
With your partner, review the code. Is it readable and DRY? Consider the logic you implemented in your initial solution. Are there any Ruby methods you can use to simplify your code? Feel free to go into the docs to find methods.

When you've refactored and you and your pair are happy with your code, you're finished! 

### Release 5: Reflect
On your own, add a commented reflection section to your gps2_2.rb file. Answer the following questions in your reflection:

What did you learn about pseudocode from working on this challenge?
What are the tradeoffs of using arrays and hashes for this challenge?
What does a method return?
What kind of things can you pass into methods as arguments?
How can you pass information between methods?
What concepts were solidified in this challenge, and what concepts are still confusing?

### Release 6: Submit
Go through your git workflow to create a pull request and merge it to the master. Don't forget to clean up your old branches. Make sure you can see your code on your remote repository. 

### Release 7: Give Feedback
Make sure it's actionable, specific, and kind.
