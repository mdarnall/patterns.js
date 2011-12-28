test:
	mocha \
		--reporter spec \
		--require should ./src/Klass \
		--growl \
		--watch \
		spec/*.js

.PHONY : test
