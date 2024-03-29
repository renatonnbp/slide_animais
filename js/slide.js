export default class Slide {
  constructor(slide, envolver) {
    this.slide = document.querySelector(slide);
    this.envolver = document.querySelector(envolver);
  }

  onStart(event) {
    event.preventDefault();
    this.envolver.addEventListener('mousemove', this.onMove);
  }

  onMove(event) {

  }

  onEnd(event) {
    this.envolver.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.envolver.addEventListener('mousedown', this.onStart);
    this.envolver.addEventListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
