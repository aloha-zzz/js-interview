# !/bin/bash
echo "git update start"
now=`date +"%Y-%m-%d %H:%M:%S"`
echo "now is $now"
echo "parma $1"
if [ ! -n "$1" ]
then
    message=$now
else
    message=$1
fi

git add .
git commit -m "$message"
git push origin

echo "git update end"