.PHONY: test

SOURCE_FILES= \
	src/template.ts \
	src/template_helpers.ts \
	src/template_tags.ts

compile: $(SOURCE_FILES)
	tsc --out template.js src/template.ts

test: 
	tsc -c test/*.ts
	open http://127.0.0.1:8888/test/index.html
	node etc/server.js

