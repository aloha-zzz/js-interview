# !/bin/bash
echo "git update start"
now=`date +"%Y-%m-%d %H:%M:%S"`
echo "now is $now"
git add .
git commit -m "$now"
git push origin master
echo 'git update end'