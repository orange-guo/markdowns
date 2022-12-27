---
title: Introduction
sidebar_position: 1
last_update:
  date: 2022-11-30
  author: Xiangcheng.Kuo
---

# Introduction

This service is constructed based on the `Docusaurus` library
to help us ship a beautiful documentation site in no time.<br/>

## Objective

Prevent tribal knowledge in our team.

## What kind of document in this service

- ARD
- Architecture(Todo in the future)
- Deployment(Todo in the future)
- Programming style
- ....

## Up and running

There has two ways to up and running the service.

- Cmdline (You must install (Node.js & Npm) at the ahead of time.)

```bash
# Start
(kill $(lsof -i:3000 | grep LISTEN | awk '{print $2}')) | (npm install) && (nohup npm run start > /tmp/docusaurus.log &)
# Stop
kill $(lsof -i:3000 | grep LISTEN | awk '{print $2}')
```

- Docker (You must install `Docker` at the ahead of time.)

```bash
# Start
docker rm -f fastone-doc;docker run --network host --name fastone-doc --rm -d  hub.fastonetech.com/cc3.0/fastone-doc;google-chrome http://localhost:3000/fastone-documentation/
# Stop
docker kill fastone-doc
```

## Writing pages

To learn how to use the Docusaurus to provide your document, you can click the below link.<br/>

- [Create a doc](https://docusaurus.io/docs/create-doc)

## Remark

### See also

- [Tribal knowledge](https://en.wikipedia.org/wiki/Tribal_knowledge#:~:text=Tribal%20knowledge%20is%20any%20unwritten,produce%20quality%20products%20or%20services.)
- [Getting Started with NodeJS](https://www.pluralsight.com/guides/getting-started-with-nodejs)
- [Install docker](https://docs.docker.com/engine/install/)
- [Docusaurus](https://docusaurus.io)
- [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)