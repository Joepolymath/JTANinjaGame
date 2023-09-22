#!/bin/bash
echo "Launching...."
# Do bash stuff here and...
# exec gunicorn verxid_matting.wsgi:application --timeout 300 --bind 0.0.0.0:3000
echo "Starting development server..."
exec yarn run dev