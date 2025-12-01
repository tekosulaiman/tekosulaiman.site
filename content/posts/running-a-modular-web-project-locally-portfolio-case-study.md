---
title: "Running a Modular Web Project Locally Portfolio Case Study"  
summary: "An initial experiment running a Pelican frontend and Python REST API backend in a modular local setup."  
Date: 2025-11-06
category: Technical  
tags: [portfolio, docker, modular, pelican, python]
author: Teko Sulaiman  
schema:
  - breadcrumb
  - article
---

As part of building a modular technical portfolio that can be deployed across environments, I conducted an initial experiment by running two core components locally: a frontend and a backend. The goal was simple — to ensure smooth communication between services and validate that the project structure is ready for real-world scenarios, such as deployment to virtual machines or staging servers.

### Technical Overview

- **Backend**: A lightweight Python-based REST API served via Uvicorn (ASGI), containerized with Docker and orchestrated using Compose.
- **Frontend**: A static site generated with Pelican, served via Python’s HTTP server, with dynamic patching through environment variables and an entrypoint script.
- **Orchestration**: Docker Compose is used to run both services independently while maintaining integration between them.

---

Docker Compose → `http://localhost:8000`  
<img src="{static}/images/pelican-frontend.png" alt="Pelican frontend table view" style="max-width:80%; height:auto; display:block; margin:1em auto; border:1px solid #ccc;">

Docker Compose → `http://localhost:8080/api/post`  
<img src="{static}/images/python-rest.png" alt="Python REST API JSON output" style="max-width:80%; height:auto; display:block; margin:1em auto; border:1px solid #ccc;">

---

The backend was developed using a lightweight and responsive Python REST API, while the frontend was built with Pelican to generate static content that could dynamically display data. Both services were run independently, yet their integration allowed for flexible development and testing.

The results showed that component integration was stable. Data from the backend was successfully rendered in the frontend as a clean, structured table — confirming that container-to-container communication worked as expected. Additionally, the use of environment variables and an entrypoint script provided extra flexibility in managing service connections without modifying source code directly.

This experiment lays the foundation for the next phase: migrating the project to a virtual environment and testing its portability. With a modular structure and a well-documented process, the project is ready to be expanded and showcased as part of a professional portfolio.
