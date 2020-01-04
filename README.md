# gatsbyProject

robotrade courses (unofficial)
RoboTrade Ltd. - новый лицензированный брокер в составе RoboForex
	Robot trade development | trading robot development

all courses in one place
keep calm autotrade
robot trade courses
	https://www.forexboat.com/our-courses/
.
gatsby deploy github pages
netlify
hipsum

node -v 12.14.0 lts -> 8.0.0 (troubles)

https://red-circule.com/courses
https://red-circule.com/courses?direction=%22desc%22&order=PRICE&types=MATERIAL
.
http://localhost/robotradecourses.io/wp-json
http://localhost/robotradecourses.io/wp-json/wp/v2/pages

### workflow

	git add .
	git commit -m 'from big asus'
	git push

gatsby
https://www.gatsbyjs.org/docs/quick-start/
	gatsby new robotradecourses

mamp 4.1.1
http://localhost/MAMP/
	webserver
		macintosh>applications>mamp>hddocs
		  C:\MAMP\htdocs
		create appfolder
			robotradecourses.io

mysql
http://localhost/phpMyAdmin/?lang=ru
	http://localhost/MAMP/ -> http://localhost/phpMyAdmin/?lang=en
	create database robotrade_gatsby_wordpress
		utf8_general_ci

wp 5.0.3 - 5.3.2
http://localhost/robotradecourses.io/wp-admin/
	wp-config-sample dublicate and rename wp-config
	wp-config
		DB_NAME -> rename
		DB_USER -> root
		DB_PASSWORD -> root
	paste link and rechange https://api.wordpress.org/secret-key/1.1/salt/
	http://localhost/robotradecourses.io/
	wp-admin/install
		RoboTrade Courses

### Timing

4. setup gatsby

create new folder and in this project run command
gatsby develop
wp api + graphql
gatsby plugins > wordpress > gatsby source wordpress
	npm i ...
	gatsby-config.js (important step)
		in plugins add after common how in docs
		and in options baseUrl:  http://localhost/robotradecourses.io/
		gatsby develop

5. graphql

gatsby-config.js
	routes
hot key = ctrl + space

6. quering wp data with graphql within gatsby

pages > index.js > import {graphql} ...

7. Generating gatsby pages from wp