---
Title: Security Headers Showcase in Go Portfolio
Summary: Demonstrating security awareness through HTTP headers in a Go-based portfolio project.  
Date: 2025-11-18
Category: Technical  
Tags: [security, portfolio, http-headers, go, web-development]
Author: Teko Sulaiman  
schema:
  - breadcrumb
  - article
---

<img src="{static}/images/security-go.png" alt="Security Headers Showcase in Go Portfolio" style="max-width:80%; height:auto; display:block; margin:1em auto; border:1px solid #ccc;">

## 📖 Overview
This portfolio is not just about building a simple login feature. It highlights **security awareness** by showcasing the use of *security headers*. In this way, the application is not only functional but also educational, demonstrating how a backend system can protect users from common web threats.

## 🌍 Why Security Headers Matter
Security headers are the first line of defense sent from the server to the browser. They:
- Control how content is displayed and interpreted.
- Prevent common attacks such as **XSS**, **clickjacking**, and **MIME sniffing**.
- Provide transparency to developers and reviewers about the security practices in place.

> Want to improve your application hygiene overall? Read [Why Documentation Matters in Application Development](https://tekosulaiman.site/why-documentation-matters-in-application-development/) for foundational best practices.

## 🛡️ Headers Implemented
This portfolio demonstrates several important headers:

- **X-Content-Type-Options** → Prevents browsers from guessing content types (*anti MIME sniffing*).
- **X-Frame-Options** → Protects against *clickjacking* by blocking iframe embedding.
- **X-XSS-Protection** → Enables XSS filters in older browsers.
- **Content-Security-Policy (CSP)** → Defines which resources can be loaded (scripts, fonts, images, etc.).
- **Referrer-Policy** → Controls what referrer information is shared during navigation.
- **Permissions-Policy** → Restricts access to device features such as camera, microphone, and location.
- **CORS Headers** → Ensures secure communication between the Hugo frontend and the Go backend.
- **Access-Control-Expose-Headers** → Allows frontend JavaScript to read all headers for educational purposes.

## 🎓 Educational Value
The main goal of this showcase is not production-level security, but rather:
- **Learning**: Understanding the role of each header and its impact on web security.
- **Transparency**: Showing reviewers or clients that the developer is aware of security practices.
- **Portfolio Value**: Adding depth to the project by highlighting security aspects often overlooked.

## 🧩 How It Looks
After a successful login, users don’t just see a status message. They also see a table listing all security headers sent by the server, each with a short explanation. This transforms the portfolio into an **interactive educational tool**.

## 🚀 Conclusion
This portfolio emphasizes that **security is an integral part of application development**, not an optional add-on. By presenting security headers in full detail, the developer builds not only a functional application but also raises awareness about the importance of modern security practices.
