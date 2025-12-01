---
Title: Understanding Memory Usage in Spring Boot REST Applications  
Summary: A practical look at JVM memory management in Spring Boot, with real metrics, pros and cons, and optimization strategies.  
Date: 2025-11-20
Category: Documentation  
Tags: [java, spring-boot, rest-api, memory-management, performance]  
Author: Teko Sulaiman  
schema:
  - breadcrumb
  - article
---

## 1. Introduction
Spring Boot is one of the most popular frameworks for building REST APIs in Java. However, many new developers are surprised when even a simple application consumes hundreds of megabytes of memory. This article explains how the JVM manages memory, what the Actuator metrics mean, and explores the advantages, drawbacks, and optimization strategies.

## 2. Runtime Memory Data
With the `spring-boot-starter-actuator` dependency, memory usage can be monitored through the `/actuator/metrics` endpoint. Here’s real output from a simple application:

- **jvm.memory.used**  
  ```json
  {
    "name":"jvm.memory.used",
    "description":"The amount of used memory",
    "baseUnit":"bytes",
    "measurements":[{"statistic":"VALUE","value":64236032.0}],
    "availableTags":[
      {"tag":"area","values":["heap","nonheap"]},
      {"tag":"id","values":["G1 Survivor Space","Compressed Class Space","Metaspace","CodeCache","G1 Old Gen","G1 Eden Space"]}
    ]
  }
  ```
  ➝ Used: **64.2 MB**

- **jvm.memory.committed**  
  ```json
  {
    "name":"jvm.memory.committed",
    "description":"The amount of memory in bytes that is committed for the Java virtual machine to use",
    "baseUnit":"bytes",
    "measurements":[{"statistic":"VALUE","value":111149056.0}],
    "availableTags":[
      {"tag":"area","values":["heap","nonheap"]},
      {"tag":"id","values":["G1 Survivor Space","Compressed Class Space","CodeCache","G1 Old Gen","Metaspace","G1 Eden Space"]}
    ]
  }
  ```
  ➝ Committed: **111.1 MB**

- **jvm.memory.max**  
  ```json
  {
    "name":"jvm.memory.max",
    "description":"The maximum amount of memory in bytes that can be used for memory management",
    "baseUnit":"bytes",
    "measurements":[{"statistic":"VALUE","value":5341446141.0}],
    "availableTags":[
      {"tag":"area","values":["heap","nonheap"]},
      {"tag":"id","values":["G1 Survivor Space","Compressed Class Space","CodeCache","G1 Old Gen","Metaspace","G1 Eden Space"]}
    ]
  }
  ```
  ➝ Maximum: **5.34 GB**

Meanwhile, Task Manager shows around **320 MB**, because it includes the full Java process footprint (heap + non-heap + thread stacks + native overhead).

## 3. Advantages and Drawbacks

### ✅ Advantages
- Automatic memory management via Garbage Collector.  
- High scalability: heap can grow to several gigabytes.  
- Detailed monitoring: heap, non-heap, Metaspace, CodeCache.  
- Stable for enterprise applications with many dependencies.  

### ⚠️ Drawbacks
- Large footprint even for simple apps.  
- Actuator metrics vs Task Manager can be confusing.  
- Slower startup and higher resource consumption.  
- Heavy on servers with limited RAM.  

## 4. Optimization Strategies
- **Limit heap with JVM flags**  
  ```
  java -Xms128m -Xmx256m -jar app.jar
  ```
- **Optimize dependencies**: include only the starters you really need.  
- **Use Spring Native / GraalVM**: compile to native image → smaller footprint.  
- **Integrate monitoring**: Prometheus + Grafana for real-time visualization.  
- **Regular profiling**: VisualVM or Java Mission Control for detailed analysis.  
- **Alternative frameworks**: for small microservices, consider Micronaut or Quarkus.  

## 5. Summary Table

| Metric              | Value (Actuator) | Meaning                                                        |
|---------------------|------------------|----------------------------------------------------------------|
| jvm.memory.used     | 64.2 MB          | Memory currently used by JVM objects                           |
| jvm.memory.committed| 111.1 MB         | Memory reserved/committed by JVM from the OS                   |
| jvm.memory.max      | 5.34 GB          | Maximum heap size available to the JVM                         |
| Task Manager (RSS)  | ~320 MB          | Total Java process footprint in the OS (heap + non-heap + overhead) |

## 6. Conclusion
A simple Spring Boot REST application may appear heavy in Task Manager, but this is normal because the JVM includes overhead for stability and scalability. With proper configuration, efficient dependencies, and good monitoring, developers can keep memory usage under control and aligned with application needs.