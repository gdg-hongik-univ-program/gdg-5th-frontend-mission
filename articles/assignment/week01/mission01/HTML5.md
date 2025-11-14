1. 요소
- 요소의 구성 : HTML 요소는 시작 태그, 종료 태그, 콘텐츠로 구성
ex) <p>Hello World!</p>
- 요소의 중첩 : 요소는 중첩 가능
ex) <html>
        <head>
            <p>Hello!</p>
        </head>
    </html>

2. 어트리뷰트
- 어트리뷰트 : 요소의 성질, 특징을 정의하는 명세
ex) <img src="html.png">
    "html.png" 경로에 있는 이미지

3. 시맨틱 태그
- 시맨틱 태그 : 브라우저, 검색엔진, 개발자에게 콘텐츠의 의미를 명확히 설명하는 의미론적 태그
- 시맨틱 태그 종류 : header, nav, aside, sectino, article, footer 등

4. 주요 태그
- 문서 형식 정의 태그 : 출력할 웹 페이지 형식을 브라우저에 전달
ex) <!DOCTYPE html>
- html 태그 : 모든 html 요소의 부모 요소
ex) <html>
- head 태그 : 메타 데이터를 포함하는 요소
ex) <head>
- title 태그 : 문서의 제목을 정의하는 요소
ex) <title>gdg</title>
- style 태그 : HTML 문서의 스타일을 정의하는 요소
ex) <style>body { background-color: black; }</style>
- link 태그 : 외부 CSS파일 연계 정보를 정의하는 요소
ex) <link rel="stylesheet" href="style.css">
- script 태그 : client-side의 JavaScript를 정의하는 요소
ex) <script>document.addEventListener('click', function() { alert('Clicked!'); });</script>
- meta 태그 : 기타 메타 데이터를 정의하는 요소
ex) <meta charset="utf-8">
- body 태그 : HTML 문서의 내용을 나타내는 요소
ex) <body>

5. 텍스트 태그
- heading 태그 : 제목을 나타낼 때 사용하는 태그
ex) <h1>frontend</h1>
- b 태그 : bold체이나 의미론적 중요성은 없는 태그
ex) <b>Bold</b>
- strong 태그 : bold체이며 의미론적 중요성을 가지는 태그
ex) <strong>Strong</strong>
- i 태그 : italic체이나 의미론적 중요성은 없는 태그
ex) <i>Italic</i>
- em 태그 : italic체이며 의미론적 중요성을 가지는 태그
ex) <em>Emphasized</em>
- small 태그 : small text를 지정하는 태그
ex) <small>Small</small>
- mark 태그 : highlighted text를 지정하는 태그
ex) <mark>Marked</mark>
- del 태그 : deleted text를 지정하는 태그
ex) <del>Deleted</del>
- ins 태그 : inserted text를 지정하는 태그
ex) <ins>Inserted</ins>
- sub 태그 : subscripted text를 지정하는 태그
ex) <sub>Subscripted</sub>
- sup 태그 : superscripted text를 지정하는 태그
ex) <sup>Superscripted</sup>
- p 태그 : 단락을 지정하는 태그
ex) <p>I'm Sangyeop.</p>
- br 태그 : 개행을 지정하는 태그
ex) <p>I'm<br>Sangyeop</p>
- pre 태그 : content에 작성된 그대로 표시되도록 지정하는 태그
ex) <pre>
        print("Hello")
        print("World!")
    </pre>
- hr 태그 : 수평 구분선을 삽입하는 태그
ex) <h1>HTML</h1>
    <hr>
    <h1>CSS</h1>
- q 태그 : 짧은 인용문을 지정하는 태그
ex) <q>The die is cast.</q>
- blockquote 태그 : 긴 인용문 블럭을 지정하는 태그
ex) <blockquote>The die is cast.</blockquote>

6. 파일 경로
- 절대 경로 : 현재 작업 디렉터리와 관계 없이 특정 파일의 절대적인 위치를 가리킴
- 상대 경로 : 현재 작업 디렉터리를 기준으로 특정 파일의 상대적인 위치를 가리킴

7. 하이퍼링크
- href : 이동하고자 하는 파일의 위치를 값으로 받는 어트리뷰트
- target : 링크를 클릭했을 때 새 창에서 열지 말지를 지정하는 어트리뷰트

8. 목록 태그
- 순서 없는 목록
ex) <ul>
        <li>Seogyo-dong<li>
        <li>Sangsu-dong<li>
        <li>Yeonnam-dong<li>
    </ul>
- 순서 있는 목록
ex) <ol>
        <li>Hapjeong Stn.<li>
        <li>Hongik Univ. Stn.<li>
        <li>Sinchon Stn.<li>
    </ol>

9. 테이블 태그
- 표를 만들 때 사용하는 태그
ex) <table>
        <tr>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
        </tr>
        <td>
            <td>Sangyeop</td>
            <td>50</td>
            <td>100</td>
        </td>
        <td>
            <td>Sunho</td>
            <td>75</td>
            <td>75</td>
        </td>
        <td>
            <td>Jihyeon</td>
            <td>100</td>
            <td>50</td>
        </td>
    </table>

10. 멀티미디어 태그
- img 태그 : 웹 페이지에 이미지를 삽입
ex) <img src="assets/images/apple.png" alt="apple" width="100">
- audio 태그 : 웹 페이지에 음악을 삽입
ex) <audio src="assets/audio/piano.mp3" controls></audio>
- video 태그 : 웹 페이지에 동영상 삽입
ex) <video src="assets/video/wildlife.mp4" controls></video>

11. 폼 태그
- form 태그 : 사용자가 입력한 데이터를 수집하기 위해 사용되는 태그
- input 태그 : 사용자로부터 데이터를 입력받기 위해 사용
ex) <input type="checkbox" name="pointed">
- select 태그 : 복수개의 리스트에서 복수개의 아이템을 선택할 때 사용
ex) <select name="lectures">
        <option value="assembly language" selected>Assembly Language</option>
        <option value="data structures" >Data Structures</option>
        <option value="discrete mathematics">Discrete Mathematics</option>
    </select>
- textarea 태그 : 여러 줄의 글자를 입력할 때 사용
ex) <textarea name="message" rows="10" cols="30">Memo here.</textarea>
- button 태그 : 클릭할 수 있는 버튼을 생성할 때 사용
ex) <button type="button" onClick="alert('Hello World!')">Click here.</button>
- fieldset 태그 : 관련된 입력 양식을 그룹화할 때 사용
ex) <fieldset>
        <legend>Login</legend>
        Username <input type="text" name="username">
        Password <input type="text" name="password">
    </fieldset>


12. 레이아웃 태그
- 공간을 분할하는 태그 : div 태그
- 시맨틱 태그 사용 : header 태그, nav 태그, aside 태그, section 태그, article 태그, footer 태그