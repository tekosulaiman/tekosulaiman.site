---
title: "Comparing Weather Data API vs Web Scraping"  
summary: "Compare weather data collection methods: API vs web scraping. Find out which approach delivers the best results for your data-driven projects."  
date: 2025-11-25
category: Documentation  
tags: [api, documentation]
schema:
  - breadcrumb
  - article
---

## Introduction  
When building apps, there are usually two ways to get data from a service:  
1. **Use the official API** provided by the service.  
2. **Scrape the data** directly from the website.  

Both approaches work, but they come with different trade‑offs. Let’s look at a simple example: pulling weather data for Jakarta using OpenWeatherMap. We’ll compare what happens when we use the **official API** versus scraping the **HTML page** with Selenium.

## Getting Data from the API  
The API endpoint looks like this:  
```
https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=API_KEY&units=metric
```

The response is structured JSON. Here’s a simplified version:  
```json
{
  "name": "Jakarta",
  "weather": [{"description": "overcast clouds"}],
  "main": {"temp": 26.37, "temp_min": 24.94, "temp_max": 26.72, "pressure": 1009, "humidity": 70},
  "wind": {"speed": 5.14}
}
```

**API summary:**  
- City: Jakarta  
- Weather: overcast clouds  
- Temperature: 26.37 °C  
- Range: 24.94 – 26.72 °C  
- Pressure: 1009 hPa  
- Humidity: 70%  
- Wind: 5.14 m/s  

## Getting Data by Scraping HTML  
The website page is:  
```
https://openweathermap.org/find?q=jakarta
```

With Selenium, we can grab the table row that shows the weather. The output looks like this:  
```python
{'source': 'Scraping (HTML via Selenium)', 'city': 'Jakarta, ID', 'weather': 'overcast clouds', 'temp': '26.4°С'}
```

**Scraping summary:**  
- City: Jakarta, ID  
- Weather: overcast clouds  
- Temperature: 26.4 °C  

## Side‑by‑Side Comparison  

| Aspect            | API (Official)                        | Scraping (HTML via Selenium)         |
|-------------------|---------------------------------------|--------------------------------------|
| **Data detail**   | Full: min/max temp, pressure, humidity, wind | Basic: city, weather, temp only |
| **Stability**     | Reliable JSON format                  | Breaks if HTML changes               |
| **Speed**         | Fast, direct JSON                     | Slower (needs JS rendering)          |
| **Requirements**  | Needs API key                         | Needs Selenium + browser driver      |
| **Best use case** | Production apps                       | Demo, practice, portfolio projects   |

## Conclusion  
- The **API** is the best choice for real applications: it’s stable, fast, and gives complete data.  
- **Scraping HTML** is useful for learning, experimenting, or showing off portfolio skills.  
- In Jakarta’s case, both methods give similar results, but the API provides more detail behind the scenes.  