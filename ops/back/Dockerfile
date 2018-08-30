FROM node

RUN npm install -g strapi@alpha
RUN strapi install upload
RUN strapi install users-permissions
RUN strapi install settings-manager
RUN strapi install email
RUN strapi install content-type-builder
RUN strapi install content-manager

WORKDIR /var/www/hkx
CMD npm install && strapi start
