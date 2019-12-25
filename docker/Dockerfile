FROM node
RUN npm i autocannon -g
ENTRYPOINT ["autocannon"]
CMD ["-c", "10", "-d", "10", "-p", "10", "https://jsx.jp"]
