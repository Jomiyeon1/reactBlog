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
            !) 참고
             배열로 선언했을경우 <h3>{title[0]}</h3> 와 같이 사용가능하고, 단일 변수일 경우 {title}로 사용하면 된다.
             단일 변수일 경우 title[0] 로 코드를 작성하면 index에 해당하는 글자가 출력된다.
    - titleUpdate는 title useState를 변경할 때 사용한다.(setter라고 생각하면 될듯) 그냥 변경하게되면 재렌더링이 일어나지 않는다.
      state 변경함수로 값을 변경해줘야 재렌더링이 일어난다. 
        titleUpdate('변경할 값');  
    - array를 변경할 땐 array를 새로 선언하고 deep copy 후 변경 함수를 사용해서 변경해줘야한다.
        ex> var newArray = [...title];
            newArray[0] = '블로그 제목을 바꿉시다.';
            titleUpdate(newArray);       

* onClick event
    - onClick = { 함수 } 형식으로 쓴다
    - ()=>{} 이렇게 쓰면 함수로 인식된다.
    - 사용법
        <span onClick={ ()=>{} }>          

* Component
    - html을 <Modal></Modal> 형식으로 치환해서 사용 가능.
    - App.js return 밖에 html을 return하는 fuction을 만들고, 그 function명으로 태그를 만들면 해당 html이 출력된다.
    