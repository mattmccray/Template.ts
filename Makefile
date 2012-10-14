.PHONY: build_tags test test_chrome test_build

SOURCE_FILES= \
	src/template.ts \
	src/template_helpers.ts \
	src/template_tags.ts

compile: $(SOURCE_FILES)
	tsc --out template.js --declarations $(SOURCE_FILES)

build_tags:
	sh etc/build_tags.sh > src/template_tags.ts

test_build: compile
	tsc -c test/*.ts

test: test_build
	open -a Safari.app test/index.html	

test_server: test_build
	open http://127.0.0.1:8888/test/index.html
	node etc/server.js

