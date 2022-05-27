# MEETDEV Project

Welcome in MEETDEV code, a project realized by :

- Christophe BROCARD
- Henri TEINTURIER
- Alejandra RAFART
- Alicia MILEKIC
- Sébastien WILK

the spirit of meetdev is facilitate relationships and meetings between developers and recruiters.

we break the rules of recruitment: in our website : this is at the recruiter to contact the developer.

to make this possible, we will work with React library of JS and PHP/Lumen.

here, we are in the front-part of the code.

## the timeline of the project

first of all, we develop the project in static with no-dynamisation and no back-end-connexion. we only use JSX (html in REACT) and CSS. we did it to have a global view on what we exactly want.

then, we have begun the website dynamisation using to the store, differents reducers and actions, we will site this differents things in detail later.

at the end, we used Axios to connect the project to the API and extract data to finish the data-dynamisation

### components

we have many differents components which communicate each other thanks to react-router-dom from react.

in each page of the site, we have a footer and a header which is almost similar for all the website. it changes if we are connected like a recruiter or developer, because they don't have the same possibilities.

when we are not connected, we have accessed to :

- Connexion
- Contact
- Cookies
- EnSavoirPlus
- Error
- MentionsLegales
- Inscription


to see the rest of components, you have to be connected.

you can find all we need to create a profile in the Inscription component ; data are not the same if you choose to create profile as recruiter or developer.

Once you are connected, you can modify profil and navigate on 100% of the website.

As recruiter, you can stock in favorites the developer's profile who interested you, you have access to your favorites and you are able to delete a profile from your favorite if he don't interest you anymore.

#### store, actions and reducers

in the store, we have 15 differents state which manage all the good operation of the website.

we name them as clear as possible to easily understand what we can do or what we need in this state.

for example, "formRegisterDev" manage the inscription form when we are dev, and "formRegisterRecruiter" when we are recruiter.

in settings, we manage differents data like isDev(true or false), to be sure we display the good components.

Also, this is in this state we stocked the JWToken.

reducers/formContact => this state allows to control in reading and writing all the inputs of the contact form. Also, it allows to reuse the data stocked to send to API/back

reducers/formDevContact => this state allows to control in reading and writing all the inputs of the contact form in a developer profile. Also, it allows to reuse the data stocked to send to API/back

reducers/formLogin => this state allows to control in reading and writing all the inputs of the connexion. Also, it allows to reuse the data stocked to send to API/back
reducers/formRegisterDev => this state allows to control in reading and writing all the inputs of the register's developer. Also, it allows to reuse the data stocked to send to API/back
reducers/formRegisterRecruiter => this state allows to control in reading and writing all the inputs of the register's recruiter. Also, it allows to reuse the data stocked to send to API/back
reducers/modalProfil =>
reducers/profilDev =>
reducers/profilRecruiter =>
reducers/recruiterFavoritesReducer =>
reducers/resultSearch =>
reducers/settings =>

### middlewares

this is thanks to the middlewares and Axios that we can connect the back and front-end of the meetdev project via API.

in the same way of reducers, we tried to name them as clear as possible. so in middlewares/favorites.js, we can find all the case for manage favorites when you are connected as recruiter.

middlewares/favorites.js => manage all cases concerning the favorites of a recruiter (CRUD) in DB
middlewares/inscriptionDevApi.js => manage all cases concerning the developer's inscription in DB
middlewares/inscriptionRecruiterApi.js => manage all cases concerning the recruiter's inscription in DB
middlewares/messagesApi.js => manage the case where a user (developer or recruiter) wants to send an email to a developer
middlewares/ModifyDevApi.js => manage all cases concerning the developer's modification in DB
middlewares/ModifyRecruiterApi.js => manage all cases concerning the recruiter's modification in DB
middlewares/searchApi.js =>
middlewares/searchCity.js => manage the case where you want all profile registered in db from one city in particular

all of the middlewares'cases are created in action/middleware.js