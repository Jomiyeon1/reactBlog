* JSX
    - {}으로 데이터 바인딩을 쉽게 할 수 있다.
    - {}에 변수명, 함수등을 써주면 됨.
    - 사용법
        let title = '제목';
        <span>{ title }</span>

* state : 웹이 앱처럼 동작하게 만들고 싶어서 state에 저장해놓는다.
    - state는 변경되면 HTML이 자동으로 재랜더링된다. => 새로고침없이 화면이 변경된다.
    - 자주 바뀌는 중요 데이터는 변수말고 state로 저장해서 쓰는 게 좋다.
    - 사용법 
        import React, { useState } from 'react';
        let [title, titleUpdate] = useState(['블로그 제목1','블로그 제목2','블로그 제목 3','블로그 제목4']);