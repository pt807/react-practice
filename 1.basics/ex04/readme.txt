ex04: 애플리케이션 번들링(bundling)

1. webpack은 작게 분리된 많은 애플리케이션 모듈(js, css, scss/sass, image, font)들은 '의존성 분석'을 하여 하나의 js로 묶는다.
2. 최종 결과물인 하나의 js 파일을 번들(bundle)이라 하고 묶는 작업을 번들링(bundling) 이라 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업을 의미 하지 않는다.
4. 빌드 작업(js 모듈)
    1) linting(ESLint, 문법체크) 작업
    2) document 작업(JSDoc) 작업
    3) test(Mocha, jest) 작업
    4) 난독화/압축(uglify) 작업
    5) 번들링
5. 