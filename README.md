# React coding challenge
## Instructions:
Create a new project in your Github repository. If your name is Darth MiddleName Vader, then
your project should be called plan-a-frontend-challenge-darth-vader.
The project consists of two pages:
1. A login page for input validation and user authentication;
2. A home page showing the latest movie from an API already developed.
## Login page:
Implement a login form with the following:
1. Email address (required and valid email address);
2. A Password field (required and at least 6 character long);
3. A button that only gets enabled when the form is valid;
4. Do the login using the following API with username and password (Create user session
with login):
https://developers.themoviedb.org/3/getting-started/introduction
PS1.: You can use the following API key: 8a732f489f66fcfb6feee9839dc02d76
PS2.: You can use the username planatest and the password 123456;
5. When the login is done correctly, then take the user to the home page;
6. Keep the user logged in.
## Home page:
Implement a home page that show the latest movie from the same API used for the login.
PS.: The app should be responsive.
## Plus:
1. Implement unit tests.
2. Use a state management library like Redux or any other.
3. Use a saga/effects library like Redux Thunk, Saga or any other.