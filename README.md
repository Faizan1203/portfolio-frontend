
## React Portfolio

**This repository combines a Spring Boot backend API with a React frontend, creating a fully functional portfolio website with a contact form.**

### Frontend Prerequisites

-   **Node.js and npm (or yarn):**  [https://nodejs.org/](https://nodejs.org/)
-   **Code editor or IDE:**  [https://code.visualstudio.com/](https://code.visualstudio.com/)  (recommended)

### Installation

1.  **Clone the repository:**

Bash

```
git clone https://github.com/Faizan1203/portfolio-frontend

```



2.  **Navigate to the frontend directory:**

Bash

```
cd portfolio-frontend

```



3.  **Install dependencies:**

Bash

```
npm install

```



**Note:** This Readme assumes you have already set up the backend API and have configured email settings in `application.properties`. For more details visit [this](https://github.com/Faizan1203/portfolio-backend) section

### Development

1.  **Start the development server:**

Bash

```
npm run dev

```



This will start the development server and open the application in your default web browser.

### Usage

**Project Structure**

The `package.json` file defines your application's:

-   **Name:**  `portfolio-frontend`
-   **Version:**  `0.0.0`
-   **Dependencies and development dependencies:**  These are the libraries and tools needed to run and build your application. For this project, you're using:
    -   **Frontend Dependencies:**  Libraries like React, Bootstrap, and React Forms for building the user interface.
    -   **Dev Dependencies:**  Tools like Vite for development server and build process, ESLint for code linting, and Prettier for code formatting.

**Routes and Navigation**

The provided code snippet showcases a basic routing setup using React Router which can be found in App.tsx file:


```
<div>
  <Router>
    <Loader load={load} />
    <div id={load ? "no-scroll" : "scroll"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
</div>

```



This code defines routes for the following pages:

-   **Home (/)**: The main landing page of your portfolio.
-   **About (/about)**: A page about you and your work.
-   **Projects (/project)**: A page showcasing your projects and skills.
-   **Contact (/contact)**: A page with a contact form for users to reach out to you.

**Deployment**

To deploy the frontend, build the production-ready version:

Bash

```
npm run build

```



This will create an optimized build folder containing the static files for your application. You can then host these files on a web server or platform of your choice.


### Backend API Integration 

This section assumes you have a separate Spring Boot backend project. Update the frontend code to send contact form data to the appropriate API endpoint on your backend server. Remember to configure the API URL and any necessary authentication details within the frontend application. If you don't want to undergo the hassle of making a backend then you can always just clone my portfolio-backend repo from [here](https://github.com/Faizan1203/portfolio-backend). Don't forget to fill out the configurations when trying to run this backend 😃.

**Further Customization**

Feel free to customize the frontend code to match your desired design and functionality. Explore various React libraries and components to enhance the user experience and explore features beyond the contact form.
