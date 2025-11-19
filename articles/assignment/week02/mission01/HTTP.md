1. HTTP
- HTTP(HyperText Transfer Protocol) : 웹에서 데이터를 주고받는 서버-클라이언트 모델의 프로토콜
- 클라이언트의 요청과 서버의 응답을 통해 작동

2. HTTP 요청의 구조
- start line : 요청 메서드, 요청 경로, HTTP 버전 정보
- headers : 요청에 대한 기타 부가 정보
- body : 실제 전송 데이터

3. 요청 메서드
- GET : 리소스를 조회
- POST : 리소스를 추가하거나 등록
- PUT : 리소스를 교체, 없으면 새로 생성
- PATCH : 리소스의 일부를 수정
- DELETE : 리소스를 삭제

4. HTTP 응답의 구조
- start line : HTTP 버전, HTTP 상태 코드, 상태 메시지
- headers : 응답에 대한 기타 부가 정보
- body : 실제 응답 데이터

5. 상태 코드
- 200(OK) : 요청이 성공적으로 처리됨
- 201(Created) : 요청이 성공적으로 처리되어 새로운 리소스가 생성됨
- 400(Bad Request) : 클라이언트의 요청이 잘못되어 서버가 이해하지 못함
- 404(Not Found) : 지정한 리소스를 찾을 수 없음
- 500(Internal Server Error) : 서버 내부 오류로 요청을 처리할 수 없음

6. 네트워크
- 브라우저의 서버 주소 탐색 : Local DNS 서버, Root DNS, TLD DNS, Authoritative DNS에 주소 요청
- 데이터의 전송 보장 : TCP/IP 프로토콜의 3-handshaking 기법 이용