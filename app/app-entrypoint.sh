if [[ $APP_ENV == "prod" ]]; then
    npm run build && npm start
else
    npm run dev
fi