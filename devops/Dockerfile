# implement the rest!
FROM python:3.6
LABEL maintainer=gabrieltiossi@gmail.com__gomesdiego580@gmail.com
WORKDIR /app/
COPY . /app/
RUN pip install -r requirements.txt
EXPOSE 80
CMD [ "uwsgi", \
      "--ini", \
      "server.ini" ]
