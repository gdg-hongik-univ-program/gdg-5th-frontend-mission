1. 기본 문법
- 셀렉터 : 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단
- 프로퍼티 : 사용자가 정의하는 것이 아니라 표준인 것을 사용해 스타일을 정의
- 값 : 프로퍼티의 값은 프로퍼티에 사용할 수 있는 값을 특정 단위로 지정

2. HTML과 CSS 연결
- link style : 외부에 있는 CSS 파일을 로드
- embeddidng style : HTML 내부에 CSS를 포함
- inline style : HTML 요소의 프로퍼티에 CSS를 기술

3. 셀렉터
- 전체 셀렉터 : HTML 문서 내 모든 요소 선택
ex) * { color: red; }
- 태그 셀렉터 : 지정된 태그명을 가지는 요소 선택
ex) p { color: red; }
- ID 셀렉터 : ID 어트리뷰트 값을 지정해 일치하는 요소 선택, ID는 중복 불가
ex) #p1 { color: red; }
- 클래스 셀렉터 : class 어트리뷰트 값을 지정해 일치하는 요소 선택
ex) .container { color: red; }
- 어트리뷰트 셀렉터 : 지정된 어트리뷰트 값을 갖는 모든 요소 선택
ex) a[href] { color: red; }
- 후손 셀렉터 : 모든 후손 중 두 번째 셀렉터와 일치하는 요소 선택
ex) div p { color: red; }
- 자식 셀렉터 : 모든 자식 중 두 번째 셀렉터와 일치하는 요소 선택
ex) div > p { color: red; }
- 형제 셀렉터 : 형제 관계에서 뒤에 위치하는 요소를 선택
ex) p + ul { color: red; }
- 가상 클래스 셀렉터 : 요소의 특정 상태에 따라 스타일을 정의할 때 사용
ex) a:hover { background-color: red; }
- 가상 요소 셀렉터 : 요소의 특정 부분에 스타일을 적용하기 위해 사용
ex) p::first-letter { font-size: 3em; }

4. 크기 단위
- px : 화소 단위로 디바이스 해상도에 따라 상대적인 크기 갖음
- % : 백분율 단위로 요소에 지정된 사이즈에 상대적인 크기를 설정
- em : 배수 단위로 상대적인 크기 설정
- rem : em과 달리 상속의 영향 없이 html의 사이즈를 기준으로 갖음
- viewport : 화면의 크기에 동적으로 대응하는 상대적인 크기를 갖음

5. 색상 단위
- 색상 키워드 : 사용이 간편하나 제한적임
- HEX : 색을 16진수 값으로 표현
- RGB : 색을 빨강, 초록, 파랑으로 표현
- HSL : 색을 색상, 채도, 명도로 표현

6. 박스 모델
- width/height : 요소의 너비와 높이를 지정하기 위해 사용
- margin/padding : top, right, left, bottom에 대해 여백을 지정
- border : 테두리 선의 스타일을 지정하기 위해 사용
- box-sizing : width, height 프로퍼티의 대상 영역 변경 가능

7. display 프로퍼티
- block 레벨 요소 : 항상 새로운 라인에서 화면의 가로폭을 모두 차지함
ex) div, h1~h6, p, ol, ul, li, hr, table, form
- inline 레벨 요소 : 문장의 중간에 들어갈 수 있으며 content의 너비만큼 가로폭을 차지함
ex) span, a, strong, img, br, input, select, textarea, button
- inline-block 레벨 요소 : inline처럼 한 줄에 표현되면서 프로퍼티를 지정 가능

8. visibility, opacity 프로퍼티
- visibility : 요소를 보이게 할 것인지 보이지 않게 할 것인지를 정의
- opacity : 요소의 투명도를 정의

9. 백그라운드
- background-image : 요소에 배경 이미지를 지정
ex) background-image: url("http://~.png");
- background-repeat : 배경 이미지의 반복을 지정
ex) background-repeat: repeat-x;
- background-size : 배경 이미지의 사이즈를 지정
ex) background-size: 700px 500px;
- background-attachment : 화면이 스크롤되어도 이미지를 고정
ex) backrground-attachment: fixed;
- background-position : 이미지의 좌표를 지정
ex) background-position: bottom;
- background-color : 요소의 배경 색상을 지정
ex) background-color: red;

10. 폰트와 텍스트
- font-size: 텍스트의 크기를 지정
ex) font-size: 40px;
- font-family: 폰트를 여러 개 동시에 지정 가능
ex) font-family: Arial, Helvetica, sans-serif;
- font-style/font-weight: Italic체 지정/폰트 굵기 지정
ex) font-style: italic;
    font-weight: bold;
- line-height : 텍스트의 높이를 지정
ex) line-height: 70%;
- letter-spacing: 글자 사이의 간격을 지정
ex) letter-spacing: 2px;
- text-align : 텍스트 수평 정렬을 지정
ex) text-align: center;
- text-decoration : 텍스트의 underline, overline line-through를 지정
ex) text-decoration: overline;
- white-space : 공백, 들여쓰기, 개행을 제어
ex) white-space: normal;
- text-overflow : wrapping이 되지 않은 텍스트의 처리 방법을 정의
ex) text-overflow: ellipsis;
- word-wrap : 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 정의
ex) word-wrap: break-word;
- word-break : 한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 정의
ex) word-break: break-all;

11. 요소의 위치 정의
- static: 기본값으로 부모 요소의 위치를 기준으로 왼쪽에서 오른쪽, 위에서 아래로 배치
ex) position: static;
- relative: 기본 static 위치를 기준으로 좌표 프로퍼티를 사용해 위치를 이동
ex) position: relative;
    top: 50px;
    left: 50px;
- absolute: 부모 요소 또는 가장 가까이 있는 조상 요소를 기준으로 좌표 프로퍼티만큼 이동
- fixed: 부모와 관게없이 viewport를 기준으로 좌표 프로퍼티를 사용해여 위치 이동
ex) position: fixed;
- z-index: 큰 숫자값을 지정할수록 화면에 앞쪽에 출력
- overflow: 자식 요소가 부모 요소를 벗어낫을 때 처리 방법을 정의
ex) overflow: hidden;

12. 요소 정렬
- 정렬 : 기본적으로 float 프로퍼티를 사용하지 않은 블록 요소는 수직 정렬
ex) float: right;
- width : 부모 요소의 가로폭을 기준으로 너비 지정
ex) width: 960px;

13. 상속
- 상속 : 부모, 조상 요소에 적용된 프로퍼티를 자식, 자손 요소가 물려 받는 것
- 캐스캐이딩 : 요소는 하나 이상의 CSS 선언에 영향을 받을 수 있어 충돌을 피하기 위해 우선순위를 지정한 것
    - 중요도 : CSS의 선언 위치에 따라 달라짐
    - 명시도 : 얼마나 명확하게 특정했는지에 따라 달라짐
    - 선언 순서 : 선언 순서에 따라 나중에 선언된 스타일이 우선 적용