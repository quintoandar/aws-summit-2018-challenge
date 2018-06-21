# implement the rest!

FROM python
MAINTAINER concrete-gesiane
EXPOSE 80
COPY . .

RUN pip install -r requirements.txt

CMD ["uwsgi","--ini","server.ini"]

