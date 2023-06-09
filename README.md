# react testing library

## Query 함수

**getBy**

- 쿼리에 대해 일치하는 노드를 반환하고, 일치하는 요소가 없거나 둘 이상의 일치가 발견되면 설명 오류를 발생시킨다.
  - 둘 이상의 요소가 예상되는 경우에는 getBy 대신 `getByAll`을 사용한다.

**queryBy**

- 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없으면 `null`을 반환한다.
- 존재하지 않는 요소가 있는지 확인할 때 유용하다.
- 둘 이상의 일치 항목이 발견되면 오류를 발생 시킨다.
  - 둘 이상의 요소가 예상되는 경우에는 `queryBy` 대신 `queryAllBy`를 사용한다.

**findBy**

- 주어진 쿼리와 일치하는 요소가 발견되면 `resolve된 Promise`를 반환한다.
- 요소가 발견되지 않거나 기본 제한 시간인 `1000ms` 후에 둘 이상의 요소가 발견되면 Promise는 `reject`된다.
  - 둘 이상의 요소를 찾아야 하는 경우 findBy 대신 `findAllBy`를 사용한다.

**waitFor**

- 일정 시간 동안 기다려야 할 때, 기대가 통과할 때까지 기다릴 수 있다.

## Query 사용 우선 순위

- 접근성 우선: getByRole
- 이미지 등: getByAltText
- getByTestId는 개발자만 볼 수 있기 때문에 좋은 방법이 아님

공식 문서 참고
