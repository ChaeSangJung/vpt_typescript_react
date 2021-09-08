"use strict";
// yarn init -y
// yarn global add typescript
// 그리고 프로젝트 디렉터리 안에서 tsc --init 명령어를 입력하면 tsconfig.json 파일이 자동생성됩니다.
// 코드를 모두 작성하셨으면 해당 프로젝트의 디렉터리에 위치한 터미널에서 tsc 명령어를 입력해보세요.
// 그러면 dist/practice.js 경로에 다음과 같이 파일이 생성될 것입니다.
// outDir 이라는 속성인데요, 이를 설정하면 컴파일된 파일들이 저장되는 경로를 지정 할 수 있습니다.
const sum = (x, y) => {
    return x + y;
};
// 타입스크립트를 사용하면 다음과 같이 코드를 작성하는 과정에서 함수의 파라미터로 어떤 타입을 넣어야 하는지 바로 알 수 있답니다.
// 위 코드의 첫번째 줄의 가장 우측을 보면 : number 가 있지요? 이는 해당 함수의 결과물이 숫자라는것을 명시합니다.
const sumArray = (num) => {
    return num.reduce((acc, current) => acc + current, 0);
};
const total = sumArray([1, 2, 3, 4, 5]);
// 타입스크립트를 사용했을때 참 편리한 점은, 배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어진다는 것 입니다.
const returnNothing = () => {
    console.log("I am just saying hello world");
};
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
