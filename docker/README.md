# with container

## build
```
docker build . -t local/autocannon:0.0.1
```

## run
```
docker run --rm -it local/autocannon:0.0.1 -c 10 -d 10 -p 10 https://example.com
```

## other
```
docker run --rm -it jobscale/autocannon -c 10 -d 10 -p 10 https://example.com
```
