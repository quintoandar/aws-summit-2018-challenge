FROM python

RUN mkdir /app/
ADD requirements.txt /app/

WORKDIR /app/
RUN pip install -r requirements.txt

ADD . /app/

EXPOSE 80
CMD ["uwsgi","--ini","server.ini"]
