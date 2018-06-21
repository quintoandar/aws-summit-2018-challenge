FROM python:2

ADD requirements.txt .

RUN pip install -r requirements.txt

ADD . .

CMD uwsgi --ini server.ini

EXPOSE 80
