FROM tiangolo/uwsgi-nginx:python2.7

#RUN pip install flask 

# Add demo app
COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

# implement the rest!
CMD ["uwsgi","--ini","server.ini"]
