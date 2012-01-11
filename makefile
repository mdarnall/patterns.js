TESTFILES := $(shell find spec -name "*.js" -type f)
test: 
	mocha \
		--reporter spec \
		--require should \
		$(TESTFILES)

dev: 
		mocha \
		--reporter spec \
		--require should \
		--watch \
		--growl \
		$(TESTFILES)

.PHONY: dev
