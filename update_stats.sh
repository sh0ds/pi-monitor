#!/bin/bash

OUTPUT_FILE="pistats.json"  # output path for the file (preferably in your website folder)

while true; do

    # grab live metrics
    CPU_TEMP=$(/usr/bin/vcgencmd measure_temp | sed "s/temp=//")
    CPU_LOAD=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1"%"}')
    RAM_USAGE=$(free -m | awk '/Mem:/ {printf "%.2f%%", $3*100/$2}')
    UPTIME=$(uptime -p | sed 's/up //')

	# output to file
	cat <<EOF > "$OUTPUT_FILE"
{
    "uptime": "$UPTIME",
    "temp": "$CPU_TEMP",
    "cpu_load": "$CPU_LOAD",
    "ram_usage": "$RAM_USAGE"
}
EOF

    sleep 3     # update cycle, change to your liking
done
