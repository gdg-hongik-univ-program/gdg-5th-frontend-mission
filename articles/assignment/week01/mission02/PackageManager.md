1. npm
- npm은 node.js의 공식 패키지 매니저

2. pnpm
- pnpm(performant npm)은 패키지를 전역적으로 저장하고 디스크 사용량을 최소화한 패키지 매니저
- npm의 단점인 유령 의존성, 디스크 용량 문제를 해결하기 위해 등장한 패키지 매니저

3. npm과 pnpm 비교
- npm은 패키지를 중복 저장하지만 pnpm은 전역 저장소를 활용해 디스크의 공간 효율성이 우수
- npm은 기존 방식으로 설치해 설치 속도가 느리나 pnpm은 링크를 활용해서 빠름
- npm은 중첩 `node_modules` 구조이나 pnpm은 심볼릭 링크를 통해 플랫하게 관리해서 의존성 충돌을 최소화
- npm은 대부분의 node.js에서 사용 가능하나 pnpm은 호환성에 문제가 생길 수 있음
- npm은 npm audit으로 취약점을 검사하고 pnpm은 contenet-addressable storage를 사용해 무결성 보장

4. 결론
- pnpm은 패키지를 프로젝트별로 복사하지 않고, 전역 저장소에 한 번만 설치한 뒤 링크로 참조하는 방식이라 용량 관리에 효율적이므로 대규모 프로젝트에선 pnpm을 사용하는 것이 유리