call cd dist
call git init
call git add .
call git commit -m "Heroku deploy"
call git remote add heroku git@heroku.com:ihustleeveryday.git
call git push heroku master --force

