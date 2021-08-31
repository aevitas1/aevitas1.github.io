/* typewriter */
class TypeWriter {
    constructor() {
      this.textData = ["vind", "print", "email"];
      this.currentWord = "";
      this.word = "";
      this.count = 0;
      this.index = 0;
      this.speed = 500;
      this.isDeleting = false;
      this.type();
    }
  
    type() {
      if (this.count >= this.textData.length) {
        this.count = 0;
      }
  
      this.currentText = this.textData[this.count];
  
      if (this.isDeleting) {
        this.speed = 50;
        this.word = this.currentText.slice(0, --this.index);
  
        if (this.word === "") {
          this.isDeleting = false;
          this.count++;
          this.speed = 400;
        }
      } else {
        this.word = this.currentText.slice(0, ++this.index);
  
        if (this.word === this.currentText) {
          this.isDeleting = true;
        }
      }
  
      const typewriter = document.querySelector(".typewriter");
      typewriter.innerHTML = this.word;
  
      setTimeout(() => this.type(), this.speed);
    }
  }
  
  const init = () => {
    new TypeWriter();
  };
  
  document.addEventListener("DOMContentLoaded", init());
  