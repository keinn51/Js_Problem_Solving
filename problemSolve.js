
/*
[문제56 : 객체의 함수 응용](https://www.notion.so/56-abc381f5916d4775804fbae9365ad0e6)
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

```jsx
**데이터**
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

**출력**
England 22023
```
*/

nationWidth = {
  'korea': 220877,
  'Rusia': 17098242,
  'China': 9596961,
  'France': 543965,
  'Japan': 377915,
  'England' : 242900,
}

const getSimilarCountry = function (obj)
{
  const kor_Area = obj.korea;
  const country_Arr = Object.entries(obj);
  let min;
  let min_country;

  min = Math.abs(country_Arr[0][1] - kor_Area);
  country_Arr.forEach((e) => {
    if (Math.abs(e[1] - kor_Area) < min)
      min = Math.abs(e[1] - kor_Area);
      min_country = e[0];
      console.log((kor_Area))
  });
  return ([min_country, min]);
}

console.log(getSimilarCountry(nationWidth))