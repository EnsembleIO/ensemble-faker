echo "########################################"
echo " CREATE SAMPLE DATA  "
echo "########################################"

echo "### Localhost : Delete Index ###"
curl -XDELETE 'http://localhost:9200/hackathon'

echo "--> PRESS ANY KEY..."
read touche

echo "### Localhost : Create Index ###"
curl -XPUT 'http://localhost:9200/hackathon'

echo "--> PRESS ANY KEY..."
read touche

echo "### Localhost : Insert news ###"
cat sample-news.json | jq -c '.[] | {"index": {"_index": "hackathon", "_type": "news"}}, .' | curl -XPOST http://localhost:9200/_bulk --data-binary @-

echo "--> PRESS ANY KEY..."
read touche

echo "### Bonsai : Delete Index ###"
curl -XDELETE 'https://fzan4xer:1l0nx4qxyuup12ul@azalea-9794680.us-east-1.bonsai.io/hackathon'

echo "--> PRESS ANY KEY..."
read touche

echo "### Bonsai : Create Index ###"
curl -XPUT 'https://fzan4xer:1l0nx4qxyuup12ul@azalea-9794680.us-east-1.bonsai.io/hackathon'

echo "--> PRESS ANY KEY..."
read touche

echo "### Bonsai : Insert news ###"
cat sample-news.json | jq -c '.[] | {"index": {"_index": "hackathon", "_type": "news"}}, .' | curl -XPOST https://fzan4xer:1l0nx4qxyuup12ul@azalea-9794680.us-east-1.bonsai.io/_bulk --data-binary @-

echo "--> PRESS ANY KEY..."
read touche


