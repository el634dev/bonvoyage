# BonVoyage 🚢
[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://www.react.dev)
![Issues](https://img.shields.io/github/issues/el634dev/waves.svg)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)

> Web Application where users can see different vacation packages and destinations around the world
>> Live demo [_here_](https://bonvoyage-six.vercel.app/).

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Project Status](#project-status)
- [Deployment](#deployment)
- [Author](#author)

## Technologies Used
- [React](https://react.dev/) - the JS library to create web and native user interfaces
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework designed to rapidly build modern looking websites
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript) - popular lighweight programming language
- [Create-React-App](https://create-react-app.dev/) - Development environment
- VSCode - Free code editor
- Git/GitHub - GitHub is the place to store your projects while Git is a version control tool

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them
- First you need a code editor of your choice, I use [VSCode](https://code.visualstudio.com/) by Microsoft then you will need the current version of [Node](https://nodejs.org/en) to get your React app created and running on your local server.
- After you need to choose between Vite or Create React App if you are going to code from scratch, if not then just run `npm install` in your terminal to get your project showing after changing the directory to your project folder(should be the same name as the one you used to create the app).
  - a. If you choose Vite then this article can help with [getting started](https://www.makeuseof.com/set-up-react-app-with-vite/)
  - b. If you choose Create React App then this doc page can [help](https://create-react-app.dev/docs/getting-started/)
- You may need to initilize Tailwind depending on if you use [Create React App](https://tailwindcss.com/docs/guides/create-react-app) or [Vite](https://tailwindcss.com/docs/guides/vite), the process is different and these doc pages will also show you how to setup your app if you choose to code from scratch.
- The rest are dependencies and those require either `npm i` or `npm install`, this page can [help](https://www.npmjs.com/) and you can search the package you need

## Screenshot
<img width="1403" alt="Screenshot 2024-03-18 at 5 54 04 PM" src="https://github.com/el634dev/bonvoyage/assets/84924260/77b48788-b912-4b19-81db-ad0f236228dd">

## Usage
How does one go about using it?
>
`User can navigate to landing page and see mutiple sections`
>
`User can see a card section with a button linking to a drop down menu`

## Project Status
Project is: _completed_

## Deployment
To deploy this project you could run `npm run build`, this creates a version of your project that is bundled and ready for production. However I used Vercel, a frontend deployment tool that is free to help deploy this project. I noticed that running `npm run build` does help Vercel build your project a little faster but that could be do to me using Vite for creating this project and not Create React App(CRA). 

### Setup on Vercel
- To create an account sign up using a third-party account such as GitHub or you could do it using a differen username and password, if you use GitHub it will deploy your project straight from GitHub
- After signup you can login or skip step 1 and log in, go to your overview where you see a space for projects and on the right side click `Add New`
- After clicking on `Add New` choose what you are adding, this will be project
- Then aftering the last step, if you choose GitHub you can choose your repository and click on import
- You are all done!

## Author
- Created by [@el634dev](https://github.com/el634dev)
