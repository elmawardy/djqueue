# djQueue
Real time queue system built with Django & Reactjs

<img src="https://i.ibb.co/t2r0MMM/djqueue1.png"
     alt="Homepage+ServiceManager"
     style="float: left; margin-right: 10px;" />

<img src="https://i.ibb.co/87VTxm3/djqueue2.png"
     alt="Profile"
     style="float: left; margin-right: 10px;" />


.  
.



# **Installation Guide**
In this section we will walk through how to install the djqueue project with **PostgreSQL** DB and **Python 3.7**, you can for sure install it on any other DB that you prefer with django.

## Installation on Windows

> **Note** : commands that are prefixed with '>' are meant to run in **cmd.exe** and commands that are prefixed with '#' are meant to run inside the **psql** shell.

- Install the Database (PostgreSQL)
    - Download https://www.postgresql.org/download/windows/ 
    - Install and make sure to **save the password** we gonna need that later 
    - Add postgresql bin to your **environment variables**
        - Default location : C:\Program Files\PostgreSQL\<pgsql version>\bin
    - Login to the database server by running the following  :
        - \> psql –U postgres
    - inside the shell create the djqueue database by running the following :
        - \# create database "DjQueue";
    - Quit : 
        - \# \q
- Install Git on windows if you don't have git installed yet
    - https://www.atlassian.com/git/tutorials/install-git#windows 
- Clone the project into your desired directory by running the following in cmd.exe :
    - \> git clone https://github.com/elmawardy/djqueue.git 
- Configure the **database password**
    - inside **Djqueue/settings.py** inside the DATABASE object change 'PASSWORD' value to your database password that we've saved earlier
- Install Python 3.7
    - Download 32/64 bit based on your environment from : https://www.python.org/downloads/windows/
    - Add Python to your **environment variables** in **PATH** variable
        - Default locations :
            - C:\Users\Administrator\AppData\Local\Programs\Python\Python37 
            - C:\Users\Administrator\AppData\Local\Programs\Python\Python37\Scripts 
- Create Python virtual environment (outside the project directory)
    - \> python -m venv envdjqueue
    - \> cd envdjqueue/Scripts
    - \> activate.bat

- Build the project
    - \> cd \<project path>
    - \> pip3 install -r requirements.txt
        - if you got an error here make sure to download and install the Visual Studio C++ Build Tools :
            - https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16   
            or from direct link : https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16
            

    - \> python manage.py migrate
    - \> python manage.py createsuperuser
    - \> python manage.py loaddata Queue/fixtures/settings_data.json --app Queue.settings
    - \> python manage.py runserver 
        - if you want to run the website for external users on specific ip and port run this
            - \> python manage.py runserver \<ip>:\<port>

            make sure to add the ip in the **ALLOWED_HOSTS** section in settings.py like so : ALLOWED_HOSTS = ['192.168.1.2']



> Then finally you can access the project from your browser at http://localhost:8000 , or on your desired ip:port