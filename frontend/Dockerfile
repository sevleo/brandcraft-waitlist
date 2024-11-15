# Use a lightweight Node.js image
FROM node:lts-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json (if exists)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the frontend source code (but not node_modules)
COPY . .

# Ensure TypeScript and Vue type declarations are installed
# RUN npm install --save-dev typescript @vue/compiler-sfc @vitejs/plugin-vue vue-tsc

# Expose the frontend port (Vite's dev server)
EXPOSE 5173

# Run the app in development mode
CMD ["npm", "run", "dev"]