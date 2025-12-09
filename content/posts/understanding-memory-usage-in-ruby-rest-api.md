---
Title: Understanding Memory Usage in Ruby REST API
Summary: A practical look at Ruby’s memory footprint when running a REST API with Sinatra, including real runtime data and best practices for optimization.  
Date: 2025-11-17 
Category: Documentation  
Tags: [ruby, sinatra, puma, rest-api, memory-management, performance]  
Author: Teko Sulaiman 
schema:
  - breadcrumb
  - article
--- 

## 1. Introduction
Ruby is a dynamic programming language known for its simple syntax and popular web frameworks such as **Rails** and **Sinatra**. For lightweight REST APIs, Sinatra is often chosen for its minimalism. However, the Ruby interpreter (MRI) comes with its own memory overhead, making it important to understand the footprint when an application first starts.

## 2. Example Application (main.rb)
A simple REST API using Sinatra:

```ruby
require 'sinatra/base'
require_relative '../routes/routes'

class MainApp < Sinatra::Base
  set :port, 8080

  # ✅ just register routes
  Routes.register_routes(self)
end

MainApp.run!
```

## 3. Runtime Memory Data (First Run)
By adding the **get_process_mem** gem (and `sys-proctable` dependency on Windows), we can measure Ruby’s process memory usage at startup:

### 📊 Actual output:
```
[Startup] Memory RSS = 44.61 MB
== Sinatra (v4.2.1) has taken the stage on 8080 for development with backup from Puma
Puma starting in single mode...
* Puma version: 7.1.0 ("Neon Witch")
* Ruby version: ruby 3.4.6 (2025-09-16 revision dbd83256b1) +PRISM [x64-mingw-ucrt]
* Environment: development
* Listening on http://127.0.0.1:8080
```

### 🔍 Interpretation
- **RSS (Resident Set Size)** → total memory used by the Ruby process in the OS.  
- Initial usage is around **44 MB**, which is normal for Sinatra + Puma on Windows.  
- Larger than Go (~6 MB), similar to Python (~42 MB), and much smaller than Java Spring Boot (~300 MB).  
- The Ruby interpreter adds overhead from its object model and garbage collector, plus Puma as the web server. 

> Want to compare Ruby with Node.js? Check out [Understanding Memory Usage in Node.js REST API](https://tekosulaiman.site/understanding-memory-usage-in-nodejs-rest-api/) for runtime differences.

## 4. Advantages
- Relatively light startup (tens of MB).  
- Simple syntax, fast for prototyping REST APIs.  
- Easy memory monitoring with gems like `get_process_mem`.  

## 5. Drawbacks
- Larger footprint compared to Go.  
- Ruby’s mark-and-sweep garbage collector can add overhead in bigger applications.  
- Less efficient than compiled languages for large-scale microservices.  

## 6. Solutions / Best Practices
- Use **get_process_mem** or **GC.stat** for memory profiling.  
- Optimize dependencies avoid heavy gems unless necessary.  
- Consider **JRuby** if JVM integration or different performance characteristics are needed.  
- Integrate with Prometheus/Grafana exporters for real-time monitoring.  

## 7. Conclusion
On *first run*, a Ruby REST API using Sinatra + Puma consumes about **44 MB RSS**, lighter than Java but heavier than Go. Ruby remains popular thanks to its simplicity and ecosystem, but developers should be aware of interpreter overhead to keep applications efficient.