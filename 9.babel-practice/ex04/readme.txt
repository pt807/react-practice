4. Env Preset: 변환 규칙 모움
    1) preset
        - 여러 플러그인의 변환 규칙을 한 번에 적용하기 위해 관련 플러그인을 모아 놓은 것
        - 종류
            1. ECMAScript 년도 별로 모아 놓은 것
            2. ECMAScript stage(level 0, 1, 2, 3)모아 놓은 것
            3. 3rd party(TypeScript, React)등 다양하다.
        - Env Preset은 ECMAScript stage3 레벨 이상의 문법을 모아 놓았다.
    
    2) 설치
        $ npm i -D @babel/core @babel/cli @babel/preset-env

    3) 프리셋 설치 확인
        $ npm list --depth=1 | grep @babel/plugin-

    4) Env Preset 설정
        - 타겟 브라우저를 설정하는 방식
        - 브라우저별 es6 호환성 테이블(https://kangax.github.io/compat-table/es6/)

    5) 변환 하기
        $ npx babel src/index.js -o dist/index.js