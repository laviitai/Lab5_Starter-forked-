# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!


#Explore Questions:
###1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, a unit test alone isn’t ideal for the full message feature because sending a message involves multiple components, which is better tested with integration or end to end tests.

###2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, using a unit test on a smaller, simpler part of a the process is a good idea. Unit testing this would be easy, as you just  send in a few test cases with varying lengths and see if they act accordingly.
