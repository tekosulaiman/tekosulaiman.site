---
Title: Developer‑Mindset Layouting in WordPress with WooCommerce  
Summary: Building custom layouts in WordPress through code, not drag‑and‑drop, and integrating WooCommerce.  
Date: 2025-11-24
Category: Technical  
Tags: [wordpress, woocommerce, php, theme-development] 
Author: Teko Sulaiman  
schema:
  - breadcrumb
  - article
---

When working with WordPress, I prefer approaching layouting like a developer rather than relying on drag‑and‑drop tools.  
This means building custom templates, structuring headers and footers with PHP, and integrating WooCommerce directly into the theme.  
The result is a modular, reproducible workflow that highlights coding skills instead of visual shortcuts.

## Steps I Took
- Created custom layouts for static pages (like *About Me* and *Projects*) using template files.  
- Structured header, footer, and navigation through PHP and theme hierarchy.  
- Installed WooCommerce to showcase e‑commerce capabilities.  
- Overrode WooCommerce templates to match the custom theme style.  
- Documented the process clearly for portfolio presentation.  

## Example Hook Override
```php
<?php
// functions.php
add_action('woocommerce_before_main_content', function() {
    echo '<div class="custom-wrapper">';
}, 5);

add_action('woocommerce_after_main_content', function() {
    echo '</div>';
}, 50);
```

## Conclusion
This project demonstrates my developer‑first approach to WordPress.  
By coding layouts and integrating WooCommerce, I show practical skills in PHP, hooks, and template hierarchy.  
The workflow is clean, reproducible, and ready to be showcased as part of my portfolio.