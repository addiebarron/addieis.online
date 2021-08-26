FROM mhart/alpine-node:16

WORKDIR /app
# Copy all local files into the image.
COPY app/ .
# Install dependencies
RUN npm ci

EXPOSE 3000
ENTRYPOINT ["sh", "app-entrypoint.sh"]
