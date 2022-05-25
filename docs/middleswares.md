# Middleswares:

As a reminder, all middleware must be declared in our store.  

All our reducers are attached to actions and actions creators which are in the actions directory

## Api:

This is our middleware for the connection.  

1. case LOGIN_TEST  
This is a post request not protected by JWT token because it's the route that allows us to connect user. The user cannot therefore have a token already saved on his computer unless he has stored them in the local storage or in a cookie. This is not implemented in our code and is planned for a V2.  
After receiving the response we retrieve several elements:  
    - status message to check the status of the server response.
    - Let's save in the state if the user is a developer or a recruiter.
    - We also save in the state the token returned by the server in order to use it for our next requests.
    - We record all data related to the user's profile (depending on whether he is a developer or a user, the data is not the same)

As we change our state, specifying that the user is logged in, we are then redirected to the corresponding Profil page.  
Finally we change the state of our loader in order to no longer display it and display the component ProfilDev or ProfilRecruiter.

2. case  TEST_CONNEXION_BACK  
It is not used anymore. It was used to do connection tests with the back

## InscriptionDevApi and InscriptionRecruiterApi:

This is our middlewares for the developper and recruiter inscription.

1. INSCRIPTION_DEV or INSCRIPTION_RECRUITER  
This is a post request not protected by JWT token because it's the route that allows a user to register.  
We send to the server all the data from form Inscription.  

Validation for developer registration requires validation via a confirmation email sent by the back server (With Lumen).  
The validation received by email refers to our homePage and opens the Login modal by displaying "mail well verified" if the verification of the token sent via email is correct.  
We have a special route managed in our Main Component (MeetDev) which allows to retrieve the token via a slug in the route. The route is as follows:  
```jsx
<Route
  path="/email/verify/:slug"
  element={(
    <Home />
  )}
/>
```
In our Home component we have a check if we come from the route of the mail check.  
If this case we retrieve the slug with useParm and check if it corresponds to the expected token (the slug is the token received via the confirmation email)
```jsx
if ((slug !== undefined) && (isVerified === false)) {
    dispatch(verifyUserEmail(slug));
    dispatch(hasSlug(true));
  }
```
Finally, in our modal login we use a conditional display and a ternary in order to display for the user if the email has been verified successfully or not.

```jsx
{ (hasSlug) && (
  <h3 className="modalLoginContainer__header--verify">
    {isVerified ? 'Adresse email vérifiée avec succès ! Merci :)' : 'Une erreur est survenue, l\'adresse email n\'a pas pu être vérifiée' }
  </h3>
)}
```

## ModifyDevApi and ModifyRecruiterApi

These are our middlewares to modify user profiles (developers or recruiters).  

1. VALIDATE_MODIFY_DEV and VALIDATE_MODIFY_RECRUITER  

