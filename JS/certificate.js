window.onscroll = function () {
    const skillsPage = document.getElementById('p-skills');
    const progressSpans = document.querySelectorAll('.progress p span');
    const upButton = document.querySelector('.up-button');
    const certificatesPage = document.getElementById('projects');
    progressSpans.forEach(span => {
      if (window.scrollY >= skillsPage.offsetTop - 300 && window.scrollY < certificatesPage.offsetTop - 300) {
        span.style.width = span.dataset.width;
      } else
      {
        span.style.width = '0%';
      }
      window.scrollY >= skillsPage.offsetTop ? upButton.style.display = 'block' : upButton.style.display = 'none';
    });
  
  };
  function slider() {
    let index1 = 0;
    let index2 = 0;
    carousel();
    carousel2();
    function carousel() {
      let i;
      let x = document.querySelectorAll(".most-prod .item");
      for (i = 0; i < x.length; i++) {if (window.CP.shouldStopExecution(0)) break;
        x[i].style.visibility = "hidden";
        x[i].style.opacity = "0";
      }window.CP.exitedLoop(0);
      index1++;
      if (index1 > x.length) {index1 = 1;}
      x[index1 - 1].style.visibility = "visible";
      x[index1 - 1].style.opacity = "1";
      setTimeout(carousel, 5000); // Change image every 2 seconds
    }
    function carousel2() {
      let i;
      let x = document.querySelectorAll(".hobbies .item");
      for (i = 0; i < x.length; i++) {if (window.CP.shouldStopExecution(1)) break;
        x[i].style.visibility = "hidden";
        x[i].style.opacity = "0";
      }window.CP.exitedLoop(1);
      index2++;
      if (index2 > x.length) {index2 = 1;}
      x[index1 - 1].style.visibility = "visible";
      x[index1 - 1].style.opacity = "1";
      setTimeout(carousel2, 5000); // Change image every 2 seconds
    }
  }
  function autoTyping() {
    const texts = ['Having Strong Knowledge Of Web Development Technologies .', 'Modern And Responsive Web Designs Using Javascript Vanilla And Css To Build Landing Pages From Scratch .', 'Building a Single Page Applications Using Angular And React .', 'Dealing with Server Side And Databases Using Nestjs And TypeORM Freamworks .'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
  
    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
  
      document.querySelector('.typing').textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
  
      setTimeout(type, 125);
    })();
  }
  autoTyping();
  slider();