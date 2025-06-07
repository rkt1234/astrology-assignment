# 1. Use Node.js base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /src

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# 4. Copy rest of the app
COPY . .

# 5. Generate Prisma client
RUN npx prisma generate

# 6. Build if you're using TypeScript or frontend
# RUN npm run build

# 7. Expose the app port (adjust if different)
EXPOSE 3000

# 8. Start the application
CMD ["node", "src/server.js"]
