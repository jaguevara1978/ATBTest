# ATBTest

### Note: 
The UX is not the best as I was more concerned about meeting the Funcitonal requirements.    
Sorry about that, but maybe with a little bit more of time that could be easily improved.
  
### SIGN IN
It has the necessary validations to meet the requirements, and it will show any message as needed.  
Background animation was done to emulate a little bit the ATB mobile app background with clouds and some cool shapes. Just to show that we might be able to animate it and make it even funnier.
![Sign In](www/img/preview/signin_preview.png?raw=true "Title")
  
  
### INFO PAGE  
It uses Google Custom Search API. Which means that maybe in production mode the request might have some sort of problem doing the request, not so sure but as I read, Google kind of requires a different API key for every platform.  
![Sign In](www/img/preview/info_preview.png?raw=true "Title")
  
### SVG ANIMATION
The SVG animated heart was used to emulate some graphics I saw on the ATB website which is a heart highlighted by a Yellow line.  
So I just got this as inspiration and tried to replicate it into an svg, of course it is not perfect, *but I am not a designer!* ;).
![ATB's Heart background](www/img/preview/atb_bkg.jpg?raw=true "Title")
  
And this is the resulting SVG Animation
![Loading SVG Animation](www/img/preview/loading_svg_preview.png?raw=true "Title")

*********************************************************************************  
Technical test for ATB  
     1) Create a hybrid mobile app for iOS that:  
     -Has two screens: a Login screen and screen for info  
     The Login Screen:  
     Has an ID field:  
     ID has to be 3-10 characters  
     The ID has to be a real name (i.e. "Abe" is OK but "Dog" is not)  
     Need to be part of a set list of real names (feel free to set the names yourself)  
     Has a password field:  
     Password has to be 8-12 characters long  
     Has to include Capital, lower case, and one of the following symbols: %#*&!@  
     Cannot have more than 3 letters together (i.e. "Abe4" is OK, but "Abig!" is not)  
  
     Note: Do not check the password against a record to see if the password is correct for that user, any password will be successful, as long as it complies with the above rules.  
  
     Has a 'Login' button that reviews the above and if successful, takes you to the next screen.  
  
     The Info screen:  
     Has two fields:  
     One to display the ID the person used to login  
     One to retrieves the first 5 google results for that ID  
  
     Pre-requisites:  
     Screens should have the same style, so please use CSS  
     The app should be ATB themed, or close to it, so please use graphics and styles that are close to what we use.  
  
