FROM node

RUN npm install -g strapi@alpha

WORKDIR /var/www/hkx
CMD npm install && ./install_plugins.sh && strapi start
