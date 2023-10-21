# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the contents of the "refresher" project to the container
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Expose port 4200 for the Angular development server
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve"]
