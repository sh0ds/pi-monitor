A live CPU/RAM monitor you can embed in your website, as seen on https://sh0ds.dev

There are no requirements, as it uses only pre-installed / Pi-packages.

To install, simply put the files into your website folder and paste this into the html-page you want it in:

```
<div class="pi-monitor-card">
    <img src="pim-logo.png">
    <p id="pi-stats">Loading Pi5 stats...</p>
</div>

<script src="pi-monitor.js"></script>`
```

(see test_page.html for an example)

currently only works on Pi because the bash script uses vcgencmd for temperature, but I plan to extend compatibility in the near future. (maybe not)
