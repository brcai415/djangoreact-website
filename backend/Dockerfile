FROM python:3
ENV PYTHONBUFFERED 1

WORKDIR /app/backend
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000