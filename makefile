build:
	./node_modules/.bin/babel index.js --out-file dist.js --presets es2015 --plugins transform-object-rest-spread

test: build
	./node_modules/.bin/mocha test.js
