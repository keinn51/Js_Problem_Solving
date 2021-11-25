#### ☁︎ 실패율

![48ddf1cc-c4ea-499d-b431-9727ee799191](https://user-images.githubusercontent.com/79993356/120514127-ec1beb80-c407-11eb-913c-42ce5dfa7479.png)

```javascript
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다.
그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다.
원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

제한사항
스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

입출력 예

N	 stages	                  result
5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
4	[4,4,4,4,4]	[4,1,2,3]

입출력 예 설명

입출력 예 #1

1번 스테이지에는 총 8명의 사용자가 도전했으며, 이 중 1명의 사용자가 아직 클리어하지 못했다. 따라서 1번 스테이지의 실패율은 다음과 같다.
1 번 스테이지 실패율 : 1/8
2번 스테이지에는 총 7명의 사용자가 도전했으며, 이 중 3명의 사용자가 아직 클리어하지 못했다. 따라서 2번 스테이지의 실패율은 다음과 같다.
2 번 스테이지 실패율 : 3/7
마찬가지로 나머지 스테이지의 실패율은 다음과 같다.
3 번 스테이지 실패율 : 2/4
4번 스테이지 실패율 : 1/2
5번 스테이지 실패율 : 0/1
각 스테이지의 번호를 실패율의 내림차순으로 정렬하면 다음과 같다.
[3,4,2,1,5]

입출력 예 #2

모든 사용자가 마지막 스테이지에 있으므로 4번 스테이지의 실패율은 1이며 나머지 스테이지의 실패율은 0이다.
[4,1,2,3]
```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript
function solution(N, stages) {
  let _8arr = new Array(stages.length).fill(0),
    _5arr = new Array(N).fill(0),
    count = stages.length;

  stages.forEach((x) => {
    _8arr[x] += 1;
  });

  let failRate = _5arr.map((x, i) => _8arr[i + 1] / (count = count - _8arr[i]));

  let resObj = Object.entries(failRate).sort((a, b) => b[1] - a[1]);

  return _5arr.map((_, i) => parseInt(resObj[i][0]) + 1);
}
```

  </p>
  </details>
  <br>
  <br>

#### ☁︎ 2016년

```javascript
문제 설명

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건

2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

입출력 예

a	b	result
5	24	"TUE"
```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript
function solution(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
```

  </p>
  </details>
  <br>
  <br>

#### ☁︎

```javascript

```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript

```

  </p>
  </details>
  <br>
  <br>

#### ☁︎

```javascript

```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript

```

  </p>
  </details>
  <br>
  <br>

#### ☁︎

```javascript

```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript

```

  </p>
  </details>
  <br>
  <br>

#### ☁︎

```javascript

```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript

```

  </p>
  </details>
  <br>
  <br>

#### ☁︎

```javascript

```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript

```

  </p>
  </details>
  <br>
  <br>
