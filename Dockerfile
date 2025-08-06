FROM nginx:alpine

# Copy the build output (adjust 'dist' to your actual build folder if needed)
COPY dist/ /usr/share/nginx/html

# Add your custom config (use default.conf not nginx.conf)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
