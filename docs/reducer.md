# Reducers

Index.js brings together all of our reducers.  
All actions and actions creators are in the action directory

## settings

This is our main reducer that handles everything related to browsing and a user's login data.  

1. LOADING  
   Allows you to manage the activation/deactivation of our loader. It's a toggle action.

2. BURGER_MENU_OPEN  
   Manages the opening of the burger menu. It is a toggle action.  
   burgerLogin is set to false so as not to display the login sub-component when opening.

3. LOGIN_BURGER  
   Handle opening/closing of login component in burger menu

4. TOGGLE_MODAL:CHOOSE_TECHNOLOGIE/SEND_MESSAGE/PROFIL/WINDOW_LOG/CHOOSE_AVATAR_MODAL  
   Management in the form of a toggle of the different modals of the site:  

5. SEARCH_CITY  
   Open/close modale result search city. Save result of axios requette from api.

6. LOGGED/LOGOUT  
   If logged, save email, userID, dev ou recruitId, token. Logout make reset.

7. IS_DEV/RECRUITER   
   Toggle to change user title

8. CLOSE_COOKIES  
   Toggle display of cookies

9. FROM_...
    Allows you to specify which road you are coming from (SEARCH, REGISTRATION, FAVORITES).  
    FROM AWAY resets all origins to false.

## form ...

It is our reducers who manage all the forms on the site.  

They all have a LOGOUT case to reset the data to zero

- formContact manages the contact form to the site
- formDevContact is the form to send a mail to a developer
- formLogin is the form to login
- formRegisterDev is the Dev registration form
- formRegisterRecruiter is the Recruiter registration form
- formSearchDev is the developer search form

## modalProfil

His name is not very well found. This is where we save the data of a user selected via the developer search or via a recruiter's favorites list.

## profilDev and profilDevModifyTemp

profilDev save all data from a developer User at login.  
profilDevModifyTemp is used to store the profile modification form data while waiting to be sent to the back server. It allows you not to alter profilDev data while waiting for the response from the back server.

## profilRecruiter and profilRecruiterModifyTemp

Idem as Dev

## recruiterFavoritesReducer

Manages the results of a recruiter's favorites list query.  

## resultSearch

Manages the results of a developper's search list query.