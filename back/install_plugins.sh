#!/bin/bash
if [ ! -d "/var/www/hkx/plugins/upload" ]; then
	strapi install upload 
fi
if [ ! -d "/var/www/hkx/plugins/users-permissions" ]; then 
	strapi install users-permissions
fi
if [ ! -d "/var/www/hkx/plugins/settings-manager" ]; then 
	strapi install settings-manager
fi
if [ ! -d "/var/www/hkx/plugins/email" ]; then 
	strapi install email
fi
if [ ! -d "/var/www/hkx/plugins/content-type-builder" ]; then 
	strapi install content-type-builder
fi
if [ ! -d "/var/www/hkx/plugins/content-manager" ]; then 
	strapi install content-manager 
fi
