---
Title: Understanding Memory Usage in Python REST API
Summary: A practical look at Python’s memory footprint when running a REST API with FastAPI, including real runtime data and best practices for optimization.  
Date: 2025-11-18  
Category: Documentation  
Tags: Python, FastAPI, REST API, Memory Management, Performance  
Author: Teko Sulaiman 
schema:
  - breadcrumb
  - article
--- 

## 1. Introduction
Python is one of the most popular programming languages for web development, data science, and scripting. Frameworks like **Flask** and **FastAPI** are widely used to build REST APIs. However, Python’s memory usage characteristics differ from languages like Go or Java: it’s simpler to work with, but comes with relatively higher object overhead.

## 2. Runtime Memory Data (First Run)
To monitor memory usage in Python, we can use the **psutil** module. Here’s a simple example in a FastAPI `main.py`:

```python
import psutil, os

process = psutil.Process(os.getpid())
print(f"[Startup] Memory RSS = {process.memory_info().rss / 1024 / 1024:.2f} MB")
```

### 📊 Actual output when running FastAPI:
```
[Startup] Memory RSS = 42.14 MB
[Startup] Memory RSS = 42.41 MB
[Startup] Memory RSS = 48.76 MB
INFO:     Uvicorn running on http://0.0.0.0:8080
INFO:     Application startup complete.
```

### 🔍 Interpretation
- **RSS (Resident Set Size)** → total memory used by the Python process in the OS.  
- Initial usage is around **42–48 MB**, which is normal for FastAPI + Uvicorn.  
- The numbers rise slightly due to the reloader and main server starting, then stabilize once the app is ready.  
- Compared to other languages: heavier than Go (~6 MB), but much lighter than Java Spring Boot (~300 MB).  

## 3. Advantages
- Relatively light startup (tens of MB).  
- Easy monitoring with `psutil`.  
- Great for rapid prototyping and small microservices.  

## 4. Drawbacks
- Larger footprint compared to Go.  
- Python’s object overhead can cause memory usage to grow quickly under load.  
- Garbage collection (reference counting + cyclic GC) can be less efficient for large-scale apps.  

## 5. Solutions / Best Practices
- Use **tracemalloc** or **objgraph** for detailed profiling.  
- Optimize data structures (avoid oversized lists/dicts).  
- Choose lightweight libraries (e.g., `ujson` for JSON parsing).  
- Consider running with **PyPy** (JIT compiler) for better performance.  
- Integrate with Prometheus/Grafana for real-time monitoring.  

## 6. Conclusion
On *first run*, a Python REST API with FastAPI consumes about **42–48 MB RSS**, lighter than Java but heavier than Go. Python remains popular thanks to its simplicity and ecosystem, but developers should be mindful of object overhead to keep applications efficient.