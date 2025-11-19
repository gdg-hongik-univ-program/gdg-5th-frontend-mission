1. useState()
- useState : state 변수를 추가할 수 있는 hook
- 사용법 : const[state 변수명, state 변수를 set할 함수명] = useState(state 변수의 초기값)
- state 변수의 차이 : 값을 바꾸려면 set 함수를 써야 함, 값이 바뀌면 re-render

2. useEffect()
- useEffect : 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 hook
- 사용법 : useEffect(() => { console.log('마운트 될 때만 실행') }, [dependencies])
    - dependency가 빈 배열 : 처음 render 될 때 한 번만 실행
    - dependency 생략 : 렌더링 될 때마다 실행
    - [dependencies] : 특정 state 변수나 일반 변수 값이 바뀔 때마다 실행

3. useNavigate()
- useNavigate : 페이지를 이동할 때 사용하는 hook
- 사용법 : const navigate = useNavigate()
- 페이지 이동 : navigate('url')
- navigate의 인자 : navigate({
        hash: 'computer_engineering'
        pathname: '/hongik'
        search: '?sort=gdg'
    }, {
        replace: true
        state: {
            from: 'computer'
        }
    })