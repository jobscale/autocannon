FROM node
RUN npm i autocannon -g
ENTRYPOINT ["/usr/local/bin/autocannon"]
CMD ["-c", "10", "-d", "10", "-p", "10", "https://example.com"]
