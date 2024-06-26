# dzenis-gudzevic-fatcat-task

This project is a part of the Fat Cat Coders homework task.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Build the project using `npm run build`.
4. Start the development server using `npm run dev`.

## Implemented Features

### 1. Transition to TypeScript

-   Converted the project from JavaScript to TypeScript.
-   Configured TypeScript with the following compiler options:
    -   `noImplicitAny`: true
    -   `strict`: true
    -   `strictNullChecks`: true
    -   `noImplicitThis`: true

### 2. List Component

-   Developed a scalable and reusable React component to fetch and display data from an API in a list format.
-   Utilized the API endpoint `https://jsonplaceholder.typicode.com/users`.
-   Displayed the following keys for each item in the list: id, name, username, email, and phone.

### 3. Form Generator Component

-   Created a versatile React component for form generation with the following capabilities:
    -   Accepts a validation schema prop for form data validation.
    -   Incorporates an API hook for handling states such as data, isLoading, and isError.
    -   Implements a callback function prop (`renderForm`) for rendering form elements and handling their state appropriately.
-   Utilized the POST method at `https://jsonplaceholder.typicode.com/posts` for form submissions.

### 4. Page Generator Component

-   Developed a reusable React component for building web pages with dynamic layouts and components based on received props.
-   Handled different page layouts and components dynamically.
-   Designed for scalability and reusability across different pages.
