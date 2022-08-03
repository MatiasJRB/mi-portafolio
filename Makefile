deploy-dev: build settings deploy

build:
	yarn build

settings:
	cp ./vercel.json ./dist/spa
	cp -r ./.vercel ./dist/spa

deploy:
	cd ./dist/spa && npx vercel --prod --yes
	cd ../../
