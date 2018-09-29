npm install
for i in ./plugins/*
do 
	cd $i
	npm install
	cd ../..
done
npm run setup --plugins
