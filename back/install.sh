if [ ! -e "/var/www/hkx/.isinstalled" ]; then
	echo "Installing strapi dependencies..."
	npm install
	for i in ./plugins/*
	do 
		echo "Installing $i dependencies..."
		cd $i
		npm install
		cd ../..
	done
	echo "Running setup..."
	npm run setup --plugins
	mkdir ./public/uploads
	touch .isinstalled
else
	echo ".isinstalled file present, not running install"
fi
