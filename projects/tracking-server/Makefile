IMAGE_NAME := artifacts.corp.xperi.com/xperi-ml-docker/cogito_backend
REL_IMAGE_NAME := artifacts.corp.xperi.com/xperi-ml-docker-release/cogito_backend
TAG := latest-dev

SSH_PRIVATE_KEY=`cat ~/.ssh/id_rsa`

.PHONY: build build-release run push push-release test-docker

build:
	docker build --network=host --tag $(IMAGE_NAME):$(TAG) -f Dockerfile.dev --build-arg SSH_PRIVATE_KEY="${SSH_PRIVATE_KEY}"  --build-arg ARTIFACTORY_USER=$(ARTIFACTORY_USER) --build-arg ARTIFACTORY_PASS=$(ARTIFACTORY_PASS) . ;\

build-release:
	docker build --network=host --tag $(REL_IMAGE_NAME):$(TAG) -f Dockerfile --build-arg SSH_PRIVATE_KEY="${SSH_PRIVATE_KEY}"  --build-arg ARTIFACTORY_USER=$(ARTIFACTORY_USER) --build-arg ARTIFACTORY_PASS=$(ARTIFACTORY_PASS) . ;\

run:
	docker run -it $(IMAGE_NAME):$(TAG) /bin/bash

push:
	docker push $(IMAGE_NAME):$(TAG)

push-release:
	docker push $(REL_IMAGE_NAME):$(TAG)

test-docker:
	docker run -v "$(CURDIR)/.nyc_output:/app/.nyc_output" -v "$(CURDIR)/coverage:/app/coverage" --entrypoint bash ${IMAGE_NAME}:${TAG} -c 'npm run test:ci'

