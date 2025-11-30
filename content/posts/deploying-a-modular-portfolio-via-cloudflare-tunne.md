---
Title: Deploying a Modular Portfolio via Cloudflare Tunnel  
Summary: A case study on connecting a Pelican frontend and Python REST API backend to the web using Cloudflare Tunnel.  
Date: 2025-11-12
Category: Technical  
Tags: portfolio, cloudflare, tunnel, modular, python, pelican  
Author: Teko Sulaiman  
schema:
  - breadcrumb
  - article
---

As part of developing a modular portfolio, I conducted an experiment by connecting two core components — a frontend and a backend — to the internet using Cloudflare Tunnel. The goal was to ensure that the project structure not only runs smoothly in a local environment but is also ready to be accessed publicly with clean and secure domains.

### Portfolio Overview

- **Frontend**: A static site built with Pelican, presenting portfolio content in a structured way.  
- **Backend**: A Python-based REST API providing dynamic data for the frontend.  
- **Tunnel Integration**: Cloudflare Tunnel bridges both services to public subdomains without exposing server ports.  

---

Frontend → [portfolio.tekosulaiman.site](https://portfolio.tekosulaiman.site)  
<img src="{static}/images/pelican-frontend.png" alt="Pelican frontend table view" style="max-width:80%; height:auto; display:block; margin:1em auto; border:1px solid #ccc;">

---

### Cloudflare Tunnel vs Ngrok: Advantages and Disadvantages

When comparing Cloudflare Tunnel with Ngrok, several differences emerge in terms of usability, flexibility, and long‑term suitability for a professional portfolio.

**Advantages of Cloudflare Tunnel**
- **Custom Domains**: Direct integration with Cloudflare DNS allows you to use your own subdomains (e.g., `portfolio.tekosulaiman.site`) without extra cost.  
- **Unlimited Tunnels**: Multiple tunnels can run simultaneously, useful for modular setups with separate frontend and backend.  
- **Free Tier Generosity**: No restrictions on concurrent tunnels or custom hostnames.  
- **Security Integration**: Seamless with Cloudflare Zero Trust, adding authentication, access policies, and DDoS protection.  
- **Stable Performance**: Built for production‑grade deployments, not just quick demos.  

**Disadvantages of Cloudflare Tunnel**
- **Setup Complexity**: Requires Cloudflare account, DNS configuration, and tunnel credentials.  
- **Learning Curve**: Feels heavier for quick demos compared to Ngrok’s simplicity.  
- **Less “instant” sharing**: Needs DNS records or configuration before sharing, unlike Ngrok’s auto‑generated URLs.  

**Advantages of Ngrok**
- **Ease of Use**: One command (`ngrok http 8080`) instantly exposes a local service.  
- **Quick Demos**: Perfect for short‑term testing, client previews, or webhook development.  
- **Broad Adoption**: Widely used in tutorials and integrations, beginner‑friendly.  

**Disadvantages of Ngrok**
- **Free Tier Limitations**: Only one tunnel at a time, random subdomains, and limited session duration.  
- **Custom Domains Require Paid Plan**: Reserved subdomains or custom domains need a subscription.  
- **Less suited for production**: Great for demos but not ideal for long‑term portfolio hosting.  

---

### Conclusion

For a **professional portfolio**, Cloudflare Tunnel provides stronger advantages: free custom domains, multiple tunnels, and integration with Cloudflare’s security stack. Ngrok remains excellent for **quick demos or testing**, but its free tier restrictions make it less suitable for showcasing a live portfolio.  

This experiment marks an important milestone: the portfolio is no longer limited to localhost but is now globally accessible through secure subdomains. With clear documentation and a modular architecture, the project is ready to be showcased as part of a professional portfolio.
