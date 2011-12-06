test:
	mocha \
		--reporter spec \
		--require should \
		--growl \
		--watch \
		spec/*.js

.PHONY : test
