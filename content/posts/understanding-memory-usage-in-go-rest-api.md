---
Title: Understanding Memory Usage in Go REST API
Summary: A practical look at Go’s lightweight memory footprint when running a REST API, with real runtime data and best practices for monitoring.  
Date: 2025-11-21
Category: Documentation  
Tags: Go, Golang, REST API, Memory Management, Performance  
Author: Teko Sulaiman 
schema:
  - breadcrumb
  - article
--- 

## 1. Introduction
Go (Golang) is a modern programming language known for being lightweight, fast, and efficient. It’s widely used to build REST APIs and microservices. One of the most interesting aspects of Go is its small memory footprint at startup—quite different from languages like Java or .NET, which typically show a much larger usage right away in the task manager.

## 2. Runtime Memory Data (First Run)
By using `runtime.ReadMemStats`, we can inspect Go memory usage when a REST API first starts:

```
Alloc = 0 MB
TotalAlloc = 0 MB
Sys = 6 MB
NumGC = 0
Server running on port 8080
```

### 🔍 Interpretation
- **Alloc = 0 MB** → Heap currently in use for Go objects. Since the app just started and no requests have been made, it’s zero.  
- **TotalAlloc = 0 MB** → Total memory allocated since the app began. Still zero because there’s no activity yet.  
- **Sys = 6 MB** → Memory requested from the OS for Go’s runtime. This includes runtime overhead, goroutine stacks, and internal structures.  
- **NumGC = 0** → Garbage collector hasn’t run yet because no significant allocations have occurred.  

## 3. Advantages
- **Tiny footprint** → Only about 6 MB, far more efficient than JVM or CLR runtimes.  
- **Fast startup** → REST API is ready almost instantly, without heavy overhead.  
- **Built-in monitoring** → `runtime.ReadMemStats` provides detailed memory insights out of the box.  

> Want to compare Go with another runtime? Explore [Understanding Memory Usage in Node.js REST API](https://tekosulaiman.site/understanding-memory-usage-in-nodejs-rest-api/) for a JavaScript‑based comparison.

## 4. Drawbacks
- **Initial data looks empty** → Alloc and TotalAlloc are zero, so it doesn’t reflect real workload usage.  
- **Profiling is more useful under load** → First run only shows runtime overhead, not actual application memory usage.  

## 5. Solutions / Best Practices
- Run **load tests** (e.g., 100–1000 requests) to measure realistic memory usage.  
- Use **pprof** for in-depth memory profiling during active workloads.  
- Integrate with **Prometheus/Grafana** for real-time monitoring.  
- Optimize goroutine usage and data structures to keep memory efficient. 

## 6. Conclusion
On *first run*, a Go REST API consumes only about **6 MB** of memory from the OS, with zero heap usage since no requests have been processed. This highlights Go efficiency compared to heavier runtimes. However, for meaningful analysis, developers should perform load testing and profiling to understand how memory behaves under real traffic.