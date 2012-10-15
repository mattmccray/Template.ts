.PHONY: build_tags compile test test_chrome test_build

compile: assemble
	tsc --out template.js --declarations -c template.ts

assemble:
	sh etc/gen_source.sh

test_build: compile
	tsc -c test/*.ts

test: test_build
	open -a Safari.app test/index.html	

test_server: test_build
	open http://127.0.0.1:8888/test/index.html
	node etc/server.js
