# Weather Dashboard

Get the current and forecasted weather for any city in the world! Each city you search for will be retained in a favorites list that you can toggle through. Your favorite list is persistent as it lives in local storage.

## Table of Contents

| |||
|:-|:-|:-|
| [Project Introduction](#weather-dashboard) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) 
| [Deployed Link](#deployed-link) | [Technologies](#technologies) | [Author](#author) 
| [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

This project was originally built using JQuery and BootStrap CSS, and I wanted to refactor it for several reasons:

* Secure the API key in the backend. As a consequence all requests for data from the weather API were routed through the backend which is more secure than storing it within the product of [create-react-app](https://create-react-app.dev/docs/adding-custom-environment-variables/);
* Rebuild the frontend using React and Material-UI. This improved the look and feel of the application, and provided an opportunity to make a custom hook to handle data persistence using local storage; and
* Make the application mobile responsive.

## Deployed Link

[Deployed to Heroku](https://colemanbuffa-weatherdashboard.herokuapp.com/)

## Technologies 

| ||||
|:-:|:-:|:-:|:-:|
| React | Material-UI | axios | dotenv
| moment | concurrently | Heroku

## Author

Coleman Buffa

* [Git Hub](https://github.com/coleman-buffa/weather-dashboard)
* [My Portfolio](https://colemanbuffa-portfolio.herokuapp.com/)
* [LinkedIn](https://www.linkedin.com/in/coleman-buffa/)

## Acknowledgments

My thanks to the mentors and friends who are a constant source of project ideas, learning topics, and guidance.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### [Back to Table of Contents](#table-of-contents)