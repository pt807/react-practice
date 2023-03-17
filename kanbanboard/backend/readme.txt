1. backend
	1) 테스트(개발 모드)
		eclipse Ctrl + F11 (스프링부트 애플리케이션 실행)

	2) 빌드(배포)
		# mvn -f kanbanboard/backend exec:exec clean package

		테스트
		# java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar 

===========================================================================
	
2. frontend
	1) 설치
		- 개발툴
       $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin
   		- react library
       $ npm i react react-dom prop-types styled-components react-addons-update
	
	2) 설정
		- webpack.config.js 설정
		- babel.config.json 설정	
	
	2) 배포 후 실행
		- java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard 