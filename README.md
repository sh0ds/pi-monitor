#  π-monitor

A live CPU/RAM monitor you can embed in your website.

## Description

A little app I made for my website that uses a bash script and some preinstalled packages on the RPi 5 to monitor CPU-usage, temperature, RAM-usage and uptime and saves them into a .json-file, which then can be fetched with JS to display on your website. Check out https://sh0ds.dev to see it in action.

## Getting Started

### Dependencies

**vcgencmd**, which should come pre-installed on RPi.

### Installing

Just clone the repo and put all files (except the bash script) where your website is stored on your RPi. Check the example.html to see how to embed it. Change the path in the bash script to the folder where your index.html is located.

### Executing program

```
chmod +x /path/to/your/script/update_stats.sh
sudo /path/to/your/script/update_stats.sh
```

The default timer for refreshing the file is 3 seconds, but you can change that to your liking. Just note that if you change it in the bash script, you should also change it in the .js-file.

## Help

Should vcgencmd not be installed, ensure you are on a RPi (duh) and do:

```
sudo apt install update
sudo apt install upgrade
sudo rpi-update
sudo reboot
```

After reboot:

```
vcgencmd version
```

and it should be installed.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
