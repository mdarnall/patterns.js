TESTFILES := $(shell find spec -name "*.js" -type f)
test: 
	mocha \
		--reporter spec \
		--require should \
		--growl \
		$(TESTFILES)

.PHONY : test
