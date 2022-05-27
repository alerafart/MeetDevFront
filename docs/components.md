# Components

## MeetDev

Our main component. All routes are managed there. There are some conditional displays depending on the state.

- cookies for the first arrival on the page
- login modal
- our loader

## Header (Navigation)
This is our navigation bar. It contains:

- our Burger menu (if open)
- our navbar for desktop
- our navbar for Mobil

Index.js is the entry point of this Component and displays either our Desktop or Mobile navigation. Also contains a conditional display for the opening of our burger menu.

## MentionsLegales, EnSavoirPLus, Error, Footer, Cookies, Contact
nothing in particular. As their names suggest.  

- error is our 404 page
- Cookies to display validation cookies on first arrival
- Footer for the footer
- MentionsLegales to Legal Notice
- EnSavoirPlus to find out more
- Contact for contact us

## Home
This is our homepage. We have subcomponents for Developer display and recruiter display.  
Home Developer and HomeRecruiter subcomponents contain specific descriptions as well as login and registration buttons

## RocketLoading
This is the display of our loading page.  
it is notably displayed while waiting for the loading of our homepage.

## Inscription
Registration is the component for Developer registration. The recruiter registration is in the Sub-Component InscriptionRecruter.  
Which of this two components is displayed depends on the state: isDev or isRecruiter.  
These components are forms with controlled fields.  

There are also two other subcomponents here:

- ModalChooseAvatar is a modal for choose avatar for the form
- ModalChooseStack is a modal for choose our differents stacks for the form

We use an API on the City field. This Api returns zip Code and City and we deduce the department to save in the state with other controlled fields.

For developer registration we have added a check to fill in all required fields. We also have verification on passwords and verif emails which must be identical to the originals

The validation calls a middleware which makes a request with axios towards the back to register the user.

When the registration is validated we open the connection modal.

Note that for the developer registration we have also added a validation by email of the registration.

## ModalLogin, ModalProfil, ModalSendMessage

These are modals that are called based on state.  

- ModalLogin it's a modal to login
- ModalProfil it's a modal to display a preview of a selected developper in search or favorites displays.
- ModalSendMessage it's a modal to send a message to a developper. It's accessible on profil selected developper.

## Profil, ProfilDev, ProfilRecruiter

Profile is mainly used to choose which components should be displayed: ProfilDev or ProfilRecruiter.  
The choice depends on where you come from (search, favorites or elsewhere) and whether you are a developer or a recruiter.  
A redirect to the home page is made if we arrive on these pages without being logged in.

- ProfilDev:
  - Display profil of selected developper from search or favorites url.
  - Display profil of connected user if we come from elsewhere
  
- ProfilRecruiter:
  - Display profil of connected user if we not come from search or favorites pages and if the user is a recruiter.

## Modify, ModifyDev, ModifyRecruiter

Modify works on the same principle as Profil. It allows to redirect via a conditional display the ModifyDev or ModifyRecruiter component.  

The ModifyDev and ModifyRecruiter components are controlled fields that are almost identical to the fields in the Inscription component. As such, they also have modals for choosing avatars and the stack (ModalChooseStack and ModalChooseAvatar). 

To be able to modify the user without altering his data recorded in the state, we create a temporary state of the modifications in progress. This state will be erased if the user cancels the modification or sent to the back via middleware and a request with axios if the user validates the modifications.  

When the modifications are validated, a middleware is called to send a request via axios to the back in order to modify the corresponding database.  

We are then returned to the Profile screen with the updated data.

## Search

Search includes a form that allows you to send a request via middleware and axios in order to search for developers.  

This search returns an array of developers. We map on this array in order to display different cards from these developers via the Card subcomponent.  

When we click on a card, a modal preview opens (ModalProfil) and the selected developer is copied into the state.  

Copying this data into the state allows us to display this data in the modal as well as on the Profil if the user decides to view the profil after seeing this developer's preview.  

## Favorites

This component is used to display all the developers added as favorites by a recruiter following his searches.  

When the page opens, we call a middleware and make a request via axios to the back in order to retrieve an array of the list of the recruiter's favorite users.  

We map on this array in order to display as many Cards subcomponents as necessary.  

As for Research, when we click on the card, a preview modal opens and the data of the selected developer is stored in the state. This state is shared for the search and favorites pages.  

A delete button is integrated on these cards which allows you to delete a developer from the favorites. The Favorites Components is then refreshed with the new list of users again through middleware and a request via axios.  
