### 1. History

    $ systemctl enable/disable <service>                   # Enable/disable service
    $ xrdb merge ~/.Xresources                             # Reload config Xresources
    $ fc-cache -f -v                                       # Reload cache font
    $ fc-list |fzf                                         # List font with fzf
    $ mysql -u root -p db_name <  db_file.sql              # Import db from sql
    $ mysqldump -u root -p db_name > db_file.sql           # Export db to sql
    $ NVIM_APPNAME=nvim-dir nvim                           # Open another config neovim
    $ xrandr --output HDMI-A-0  --brightness 0.5           # Display screen
    $ xset r rate 210 40                                   # Speed cursor
    $ setxkbmap -option "caps:escape_shifted_capslock" &   # Set capslock to esc
    $ python3 -m http.server 8000 &                        # Start http server with pyhton
    $ php -s 127.0.0.1:5000 ./adminer-4.8.1-mysql.php      # Run adminer
    $ tar -xvf ./file.tar.gz                               # Extract tar.gz
    $ ln -sf ~/original-path ~/destination-path            # Create symlink
