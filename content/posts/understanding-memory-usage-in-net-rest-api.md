Title: Understanding Memory Usage in .NET REST API  
Summary: A practical look at how ASP.NET Core handles memory on startup, with real runtime data and best practices for monitoring and optimization.  
Date: 2025-11-22  
Category: Documentation  
Tags: .NET, ASP.NET Core, REST API, Memory Management, Performance  
Author: Teko Sulaiman  

## 1. Introduction
.NET (C#) is a modern platform widely used for enterprise applications and REST APIs. The **ASP.NET Core** framework offers high performance, strong database integration, and a rich ecosystem. However, similar to Java, the .NET runtime introduces some memory overhead when an application first starts. Understanding this footprint helps developers plan for efficiency and scalability.

## 2. Example Application (Program.cs)
Here’s a simple ASP.NET Core setup using SQLite:

```csharp
using DotnetRest.Config;
using DotnetRest.Services;   // to make PostsService available
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;    // ✅ to check memory usage

var builder = WebApplication.CreateBuilder(args);

// SQLite connection
builder.Services.AddDbContext<Db>(options =>
    options.UseSqlite("Data Source=scripts/test.db"));

// register service layer
builder.Services.AddScoped<PostsService>();

// register controllers
builder.Services.AddControllers();

var app = builder.Build();

// ✅ log memory usage at startup
var process = Process.GetCurrentProcess();
Console.WriteLine($"[Startup] Memory RSS = {process.WorkingSet64 / 1024 / 1024} MB");

app.UseAuthorization();
app.MapControllers();

app.Run();
```

## 3. Runtime Memory Data (First Run)
### 📊 Actual output when running the ASP.NET Core app:
```
[Startup] Memory RSS = 43 MB
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5236
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: C:\Users\tekos\OneDrive\Documents\VSCodiumProjects\portofolio\dotnet\dotnet-rest
```

### 🔍 Interpretation
- **WorkingSet64 (RSS)** → total memory used by the .NET process in the OS.  
- Initial usage is around **43 MB**, which is lower than the typical 80–120 MB range.  
- This footprint is comparable to Python (~42 MB), Ruby (~44 MB), and Node.js (~46 MB).  
- It’s significantly lighter than Java Spring Boot (~300 MB).  

## 4. Advantages
- Startup is relatively light (tens of MB).  
- Built-in monitoring via `System.Diagnostics` is easy to use.  
- Well-suited for enterprise applications with complex requirements.  

## 5. Drawbacks
- Higher footprint compared to Go (~6 MB).  
- The .NET garbage collector (server GC) can add overhead in large-scale apps.  
- Not as memory-efficient as lightweight compiled languages like Go.  

## 6. Solutions / Best Practices
- Use **dotnet-counters** or **dotnet-trace** for detailed memory profiling.  
- Optimize dependencies avoid heavy libraries unless necessary.  
- Run in **Release build** mode for smaller footprints.  
- Integrate with Prometheus/Grafana exporters for real-time monitoring.  

## 7. Conclusion
A simple REST API built with ASP.NET Core consumes about **43 MB RSS** on first run. This is more efficient than Java but heavier than Go. Despite the overhead, .NET remains a strong choice thanks to its enterprise ecosystem and integration capabilities. Developers should be mindful of runtime overhead and apply best practices to keep applications lean and efficient.