FROM mhart/alpine-node:16

WORKDIR /app
# Copy all local files into the image.
COPY . .
# Install dependencies
RUN npm ci

EXPOSE 5000
ENTRYPOINT ["sh", "app-entrypoint.sh"]
