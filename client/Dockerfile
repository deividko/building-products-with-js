FROM node

# Create app folder
RUN mkdir -p /app
WORKDIR /app

# Cache npm dependencies
RUN npm install pushstate-server

# Copy application files
COPY . /app

CMD npm run start-prod

EXPOSE 9000
