.PHONY: bootstrap

bootstrap:
	make hooks
	make install-dependencies

.PHONY: hooks
hooks:
	chmod +x .ci/hooks/install-hooks.sh && sh .ci/hooks/install-hooks.sh

.PHONY: install-dependencies
install-dependencies:
	yarn

.PHONY: run-start
run-start:
	yarn start

dist/index.js:
	yarn build

.PHONY: build
build: dist/index.js

.PHONY: clean
clean:
	rm -rf build
	rm -rf .cache
	rm -rf reports
