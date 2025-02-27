# The EARN While U Learn App

![EWUL THUMBNAIL](https://github.com/user-attachments/assets/ad1e4568-11ee-451c-a29b-995a9198f01a)


The Apprenticeships Search and Filter App is a full-stack application designed to simplify the process of discovering apprenticeship opportunities. It provides users with an interactive interface to search and filter listings by various criteria, such as Holland Code categories, hourly compensation, and custom search terms. The application integrates seamlessly with a Rails backend, retrieving apprenticeship data dynamically and presenting filtered results in real time.

This project aims to streamline the job search process for users, particularly those seeking opportunities that align with their career goals and preferences.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Features](#features)
4. [Prerequisites](#prerequisites)
5. [Launch Instructions](#launch-instructions)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
6. [Project Status](#project-status)
7. [Contact](#contact)
8. [License](#license)

---

## Technologies

### Frontend
- **React**: For building the user interface.
- **Axios**: For handling API requests.
- **Tailwind CSS**: For responsive and modern styling.
- **Shadcn UI**: For accessible, component-based styling.

### Backend
- **Ruby on Rails**: The API backend, managing apprenticeship data and filtering logic.
- **PostgreSQL**: Database for storing apprenticeship data.

### Other Tools
- **JavaScript**: Core scripting language for application logic.
- **ES6+ Features**: Modern JavaScript syntax for cleaner, more efficient code.

---

## Features

1. **Search Bar**: Find apprenticeships by title.
2. **Filters**: Narrow results by Holland Code and hourly wage.
3. **Dynamic Updates**: Instant filtering as users interact with the interface.
4. **Pagination**: View results in manageable chunks.
5. **Responsive Design**: Optimized for desktop and mobile.

---

## Prerequisites

Before running the project, ensure you have the following installed on your machine:

- **Ruby**: Version `3.3.1` (check with `ruby -v`).
- **Node.js**: Version `20.17.0` (check with `node -v`).
- **PostgreSQL**: Installed and running (check with `psql --version`).
- **Git**: For cloning the repositories (check with `git --version`).

---

## Launch Instructions

### Backend Setup

1. **Clone the backend repository**:
   ```bash
   git clone https://github.com/pcbandua/capstone-api.git
   cd capstone-api
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Set up the database**:
   - Ensure PostgreSQL is running.
   - Create the database and run migrations:
     ```bash
     rails db:create
     rails db:migrate
     ```

4. **Seed the database (optional)**:
   If you have seed data, run:
   ```bash
   rails db:seed
   ```

5. **Start the Rails server**:
   ```bash
   rails server
   ```
   The backend will be available at `http://localhost:3000`.

---

### Frontend Setup

1. **Clone the frontend repository**:
   ```bash
   git clone https://github.com/pcbandua/capstone-frontend.git
   cd capstone-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

---

## Project Status

The app is currently in development. Contributions and feedback are welcome!

---

## Contact

- **Author**: Paulo Bandua
- **Email**: [pcbandua@gmail.com](mailto:pcbandua@gmail.com)
- **GitHub**: [pcbandua](https://github.com/pcbandua)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Additional Notes for Contributors

- If you encounter any issues, please open a [GitHub Issue](https://github.com/pcbandua/capstone-api/issues) on the respective repository.
- For feature requests or suggestions, feel free to reach out via email or GitHub.

---
