/* --------------------------------------------------------------------- */
/* ------▶︎▶︎▶︎ smallCarosel 클래스: 페이지 우측 상단의 작은 캐러셀을 만든다. ◀︎◀︎◀︎------*/
/* --------------------------------------------------------------------- */

/*
- [x] 양쪽 화살표 아이콘 추가하기
- [x] 슬라이드 트랜지션 이벤트 넣기
- [ ] 오른쪽 화살표 클릭 시 순서가 바뀌는 기능 구현
- [ ] 왼쪽 화살표 클릭 시 순서서가 바뀌는 기능 구현
- [ ] 이미지 하단 언더바에 마우스에 호버링 이벤트 넣기 : 호버 시 이미지 바꿈. (로직 설계 필요 - data-Index 사용할 방법 생각해보기)
*/

export default class smallCarousel {
    constructor(_, reference){
        this._ = _;
        this.ref = reference;
        this.prevButton = reference.prevButton;
        this.nextButton = reference.nextButton;
        this.slide = reference.slide;
    }
    addEvent(panelNumber){
        this.prevButton.addEventListener('click', this.translateSlide.bind(this, 1, panelNumber));
        this.nextButton.addEventListener('click', this.translateSlide.bind(this, -1, panelNumber));
    }
    translateSlide(direction, panelNumber){
        this.slide.style.transitionDuration = "500ms";
        this.slide.style.transform = `translateX(${direction * (100 / panelNumber)}%)`;
    }

}