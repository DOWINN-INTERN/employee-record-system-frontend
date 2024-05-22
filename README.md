<p align = 'center'>
  <img src="./main/src/assets/logo.png" alt="Logo" style="width: 300px; height: auto; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);">
</p>

<br>
<br>
<br>

# Description

<div style="display:flex; justify-content:center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

**Cache Up** is a simple employee management system that provides broad monitoring capabilities, allowing users to track the employment status of employees across all departments and branches. It enables monitoring of departmental operations as well as the status and activities of existing branches.

Additionally, the system facilitates efficient management of employee leave and absences, along with associated actions. Furthermore, it includes features for managing employee benefits and maintaining accurate records of employee documents, allowing for seamless updates with new and revised documents.

This project is built using [**React**](https://reactjs.org/), [**TypeScript**](https://www.typescriptlang.org/), and [**Tailwind CSS**](https://tailwindcss.com/).

<br>

# Prerequisites

1. Ensure you have Node.js and npm installed. You can download them from [Node.js](https://nodejs.org/).

- - To test that you have Node.js and npm correctly installed on your machine, you can type node --version and npm --version in a terminal or command prompt.

2. Install [React (Vite)](https://vitejs.dev/guide/)
3. Add [Tailwind CSS](https://tailwindcss.com/docs/guides/vite) to your Project

<br>

# Module installation

```bash
# using npm:

npm install
```

<br>

# Running the app

```bash
# using npm (Vite):

npm run dev
```

<br>

# Documentation

### <u>[System Documentation](https://docs.google.com/document/d/1rbER1dkJ3U0tZ286-xFqRDMMaCnPensxyryNm-GdKto/edit?usp=sharing)</u>

<br>

# Prototype

### <u>[System Prototype](https://www.figma.com/design/J5LybgiS7tXDWHB21Wo0i1/Cache-Up?node-id=0-1&t=zAnuOnayQNbb7i37-0)

<br>

# Features

### <u>[Features](https://docs.google.com/document/d/1K1-y5d7eg_HSudg0lTEv3zfAMzH2EaH1TP90oEzNtXc/edit?usp=sharing)</u>

<br>

# Endpoints

```bash
## AUTHENTICATION 

SIGNUP
POST: 10.10.10.10:3000/auth/signup
> email
> username
> password
> firstName
> lastName
> month
> day
> year
> phone
> sex

LOGIN
POST: 10.10.10.10:3000/auth/login
> username
> password

REFRESH TOKEN
POST: 10.10.10.10:3000/auth/refresh
> refreshToken

LOGOUT
POST: 10.10.10.10:3000/auth/logout
> accessToken


## BRANCHES 

GET BRANCH
GET: 10.10.10.10:3000/branches

ADD BRANCH
POST: 10.10.10.10:3000/branches
> file
> name
> address

EDIT BRANCH
PATCH: 10.10.10.10:3000/branches
> bid (branch ID)
> file
> name
> address

STATUS BRANCH
PATCH: 10.10.10.10:3000/branches
> bid (branch ID)
> status

IMAGE BRANCH
GET: 10.10.10.10:3000/branches/:balias/:bimage
> alias
> image


## DEPARTMENT 

GET DEPARTMENT
GET: 10.10.10.10:3000/departments

ADD DEPARTMENT
POST: 10.10.10.10:3000/departments
> bid (branch ID)
> name
> email
> phone

EDIT DEPARTMENT
PATCH: 10.10.10.10:3000/departments
> did (department ID)
> bid (branch ID)
> name
> email
> phone

STATUS DEPARTMENT
PATCH: 10.10.10.10:3000/departments
> did (department ID)
> status


## POSITIONS 

GET POSITIONS
GET: 10.10.10.10:3000/positions

GET DEPARTMENT POSITIONS
GET: 10.10.10.10:3000/banch/:balias/department/:dalias/positions

ADD POSITIONS
POST: 10.10.10.10:3000/banch/:balias/department/:dalias/positions
> did (department ID)
> name
> hierarchy

EDIT POSITIONS
PATCH: 10.10.10.10:3000/banch/:balias/department/:dalias/positions
> pid (position ID)
> did (department ID)
> name
> hierarchy
```
