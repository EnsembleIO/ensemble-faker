echo "########################################"
echo " CREATE SAMPLE DATA  "
echo "########################################"

cat news-sample.json | jq -c '.[] | {"index": {"_index": "hackathon", "_type": "news"}}, .' | curl -XPOST https://fzan4xer:1l0nx4qxyuup12ul@azalea-9794680.us-east-1.bonsai.io/_bulk --data-binary @-

