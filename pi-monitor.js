document.addEventListener("DOMContentLoaded", () => {
                const pistats = "pistats.json";
                const monitorCard = document.querySelector(".pi-monitor-card");
                const footer = document.querySelector(".site-footer");

                // -- FETCH & DISPLAY STATS --
                const updateStats = () => {
                    fetch(`${pistats}?t=${Date.now()}`)
                        .then((response) => response.json())
                        .then(data => {

                            // we do a little bit of regexing
                            const degTemp = data.temp.replace(/'+/, '°');
                            const shortUptime = data.uptime
                                .replace(/\s*weeks?/g, 'w')
                                .replace(/\s*days?/g, 'd')
                                .replace(/\s*hours?/g, 'h')
                                .replace(/\s*minutes?/g, 'm');

                            const statsElement = document.getElementById("pi-stats");
                            statsElement.innerHTML = `
                                <strong>Pi5 Status:</strong> Running...<br>
                                CPU Load: <span class="stats-val">${data.cpu_load}</span><br>
                                CPU Temp: <span class="stats-val">${degTemp}</span><br>
                                RAM Usage: <span class="stats-val">${data.ram_usage}</span><br>
                                Uptime: <span class="stats-val">${shortUptime}</span>
                            `;
                        })
                        .catch(err => console.error("Could not load stats:", err));
                };

                updateStats();

                setInterval(updateStats, 3000); // set to the interval you set in your shell script

                // -- FLOATING CARD SCROLL --
                if (monitorCard && footer) {
                    const adjustPosition = () => {
                        const footerRect = footer.getBoundingClientRect();
                        const windowHeight = window.innerHeight;

                        const visibleFooterHeight = windowHeight - footerRect.top;
                    
                        if (visibleFooterHeight > 0) {

                            monitorCard.style.bottom = `${visibleFooterHeight + 20}px`;
                        } else {

                            monitorCard.style.bottom = "20px";
                        }
                    };

                    // attach to scroll and resize
                    window.addEventListener("scroll", adjustPosition, { passive: true });
                    window.addEventListener("resize", adjustPosition, { passive: true });
        
        
                    adjustPosition();
                }

});
