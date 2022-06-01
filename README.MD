# Convert cfn yaml parameters file to codepipeline json file

Without installing node using docker:

```bash
docker run -it --rm -v ${PWD}:/app \
-w /app -u 1000:1000  node:lts-stretch npm install

docker run -it --rm -v ${PWD}:/app \
-w /app -u 1000:1000  node:lts-stretch npm run start [inputYamlFile] [OptionalJsonOutputFile]

# ex
docker run -it --rm -v ${PWD}:/app \
-w /app -u 1000:1000  node:lts-stretch npm run start \
yaml/100-moodle-amazon-linux.yaml test.json
```