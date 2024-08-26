class App {
  constructor() {
    // canvas 요소를 생성하고 2D 렌더링 컨텍스트를 가져옵니다.
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    // 생성된 canvas를 HTML 문서의 body에 추가합니다.
    document.body.appendChild(this.canvas);
    // bind(this)를 사용하여 resize 메서드 내의 this가 App 클래스의 인스턴스를 가리키도록 합니다.
    window.addEventListener("resize", this.resize.bind(this), false);
    // 초기 canvas 크기를 설정합니다.
    this.resize();
    // 애니메이션 루프를 시작합니다.
    requestAnimationFrame(this.animate.bind(this));
  }

  // 창 크기가 변경되면 호출되어 canvas 크기를 조정하는 메서드
  resize() {
    // 브라우저 창의 너비와 높이를 가져옵니다.
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // canvas의 실제 크기를 두 배로 설정합니다 (레티나 디스플레이를 지원하기 위해).
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    // canvas에 2배로 설정된 크기를 반영하기 위해 스케일을 2배로 조정합니다.
    this.ctx.scale(2, 2);
  }

  // 애니메이션 루프에서 호출되는 메서드
  animate(t) {
    // canvas를 초기화하여 이전 프레임의 그리기를 지웁니다.
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    // 잘못된 코드 수정: requestAnimationFrame을 올바르게 호출하여 애니메이션 루프를 지속합니다.
    requestAnimationFrame(this.animate.bind(this));
  }
}

// App 클래스의 인스턴스를 생성하여 애플리케이션을 시작합니다.
new App();
