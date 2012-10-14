.PHONY: test test_chrome test_build

SOURCE_FILES= \
	src/template.ts \
	src/template_helpers.ts \
	src/template_tags.ts

compile: $(SOURCE_FILES)
	tsc --out template.js src/template.ts

test_build:
	tsc -c test/*.ts

test: test_build
	open -a Safari.app test/index.html	

test_server: test_build
	open http://127.0.0.1:8888/test/index.html
	node etc/server.js

