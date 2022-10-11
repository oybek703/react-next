FROM node:latest
WORKDIR /opt/app
ADD package.json package.json
RUN npm install --force
ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune --omit=dev --force
CMD ["npm", "start"]
EXPOSE 3000
