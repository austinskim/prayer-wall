# Prayer Wall
Prayer wall is a platform to share prayer requests and to let others know you are praying for them.

## Developers
- Austin Kim
- Junwon Jang

# Technologies
- Python 3.6
- Django 2.1.7
- PostgreSQL 10.7
- Psycopg2

# How to set up backend environment
## Steps
1. Navigate to /prayer-wall.
2. Run `python3 -m venv prayer-wall-backend`. This will bring in the virtual environment for this project. There is no need to run this command if the prayer-wall-backend directory already exists.
3. Navigate to `/prayer-wall/prayer-wall-backend/bin` and run `source activate`. This will start the virtual environment.
4. From `/prayer-wall/prayer-wall-backend/`, run `pip install Django` and `pip install psycopg2`.

# How to start Django server
## Steps
1. Navigate to `/prayer-wall/prayer-wall-backend/bin` and run `source activate`. This will start the virtual environment.
2. Navigate to `/prayer-wall/prayer-wall-backend/prayersite/` and run `python manage.py runserver`. You can confirm the server started by navigating to localhost:8000

# DB Setup
## Steps
1. After activating virtual environment, run `pip install psycopg2`.

## References
0. https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04
1. https://pypi.org/project/psycopg2/ (PostgreSQL DB adapter for Python)
2. https://www.enterprisedb.com/downloads/postgres-postgresql-downloads (Install PostgreSQL version 10.7 for your OS)
