Title: Custom Employee Module in Odoo 19 with Docker  
Summary: Running Odoo 19 in Docker with PostgreSQL, coding locally, and adding a custom Employee menu.  
Date: 2025-11-26 
Category: Technical  
Tags: odoo, docker, postgresql, erp, customization  
Author: Teko Sulaiman  

Setting up Odoo 19 directly on Windows was tricky, so I switched to Docker for a cleaner workflow.  
By running Odoo and PostgreSQL in containers, I kept coding locally while syncing updates through Docker Compose.  
For database inspection, I connected the container to DBeaver, making it easy to monitor changes.

## Steps I Took
- Built a Docker Compose setup for Odoo 19 and PostgreSQL.  
- Connected the PostgreSQL database to DBeaver for local inspection.  
- Kept coding in local files, then synced updates to the container.  
- Created a simple custom Employee module.  
- Activated the menu and confirmed it appeared in the Odoo dashboard.  

## Example Docker Compose
```yaml
version: '3.1'
services:
  odoo:
    image: odoo:19
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - ./addons:/mnt/extra-addons
  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - POSTGRES_DB=postgres
    ports:
      - "5432:5432"
```

## Conclusion
This project highlights my ability to run ERP systems in containers, customize modules,  
and maintain a clean developer workflow. By combining Docker, PostgreSQL, and Odoo customization,  
I created a reproducible setup that proves I can adapt tricky environments into stable, professional solutions.