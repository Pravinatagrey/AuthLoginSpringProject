# AuthLoginSpringProject
This project is a Full-Stack Authentication and User Registration System built using a Spring Boot backend and a React frontend, containerized and deployed using Docker Compose.

# Full-Stack Authentication and User Registration System

This project is a full-stack web application designed for user registration and authentication. It features a Spring Boot backend, a React (Vite) frontend, and Nginx as a reverse proxy, all containerized and deployed using Docker Compose.

---

## Architecture & Tech Stack

- **Backend:** Spring Boot 3.5.14 (Java 21), Spring Data JPA, H2 Database (In-Memory)
- **Frontend:** React, Vite, Node 20
- **Web Server / Reverse Proxy:** Nginx 1.29
- **Containerization:** Docker Desktop & Docker Compose

---

## Features

- **User Registration:** Endpoints for new users to register securely.
- **Reverse Proxy Routing:** Nginx serves static frontend files and routes API requests to the Spring Boot backend.
- **Containerized Environment:** Run the entire stack with a single command.

---

## Prerequisites

Ensure you have the following installed on your machine:
- [Docker Desktop](https://www.docker.com/) (installed and running)
- Java 21 (if running backend locally)
- Node.js 20+ (if running frontend locally)

---

## Getting Started with Docker

To deploy the application in a production-like environment:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Pravinatagrey/AuthLoginSpringProject
   cd AuthLoginSpringProject
