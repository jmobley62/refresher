# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app/

COPY /package*.json .

# Install project dependencies
RUN npm install

# Expose port 4200 for the Angular development server
EXPOSE 4200

# Copy the contents of the "refresher" project to the container
COPY . .

# Start the Angular development server
CMD ["ng", "serve"]
