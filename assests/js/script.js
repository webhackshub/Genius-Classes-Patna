// NOTIFICATION
function notification() {
  if (!document.querySelector(".notification")) {
    return;
  }

  let notification = document.querySelector(".notification")
  let notificationClose = document.querySelector(".notification i")

  notificationClose.addEventListener("click", function () {
    notification.style.display = "none"
  })
}
notification()

// MENU BAR
function menuBar() {
  let menuBar = document.querySelector(".menu-bar")
  let menuOpen = document.querySelector(".menu-open")
  let menuClose = document.querySelector(".menu-close")
  let menuCoursesList = document.querySelector(".menu-course-list")
  let menuCourses = document.querySelector(".menu-courses")
  let menuBack = document.querySelector(".menu-back")

  menuOpen.addEventListener("click", function () {
    menuBar.style.right = 0
  })
  menuClose.addEventListener("click", function () {
    menuBar.style.right = "-100%"
  })
  menuCourses.addEventListener("click", function () {
    menuCoursesList.style.left = 0
  })
  menuBack.addEventListener("click", function () {
    menuCoursesList.style.left = "-100%"
  })
}
menuBar()

// NAVIGATION ALL COURSE
document.addEventListener("DOMContentLoaded", function () {
  const courseCategories = document.querySelectorAll(".course-category");
  const coursesAvailable = document.querySelectorAll(".courses-available");

  coursesAvailable.forEach(course => {
    course.style.display = "none";
  });

  coursesAvailable[0].style.display = "block";

  function handleHover(index) {
    coursesAvailable.forEach(course => {
      course.style.display = "none";
    });
    coursesAvailable[index].style.display = "block";
  }

  courseCategories.forEach((category, index) => {
    category.addEventListener("mouseover", function () {
      handleHover(index);
    });
  });
});

// SWIPER
function initializeSwiper() {
  if (!document.querySelector('.mySwiper')) {
    return;
  }

  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

initializeSwiper();

// RESULT

function getResult() {
  const admissionNumber = document.querySelector("#admission-number").value;
  showResult(admissionNumber);
}

function showResult(admissionNumber) {
  const resultContainer = document.querySelector(".result-data");
  const studentResultContainer = document.querySelector(".student-result");
  studentResultContainer.innerHTML = "";

  if (studentData[admissionNumber]) {
    resultContainer.style.display = "block";
    studentResultContainer.style.display = "block";

    studentData[admissionNumber].forEach(function (student) {
      const studentName = document.createElement("p");
      const studentClass = document.createElement("p");
      studentName.textContent = `Name: ${student.name}`;
      studentClass.textContent = `Class: ${student.class}`;
      studentResultContainer.appendChild(studentName);
      studentResultContainer.appendChild(studentClass);

      const studentResultTable = document.createElement("table");
      const tableHeader = `
        <thead>
          <tr>
            <th colspan="3">Test Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="result-info">Subject</td>
            <td class="result-info">D.O.T</td>
            <td class="result-info">Marks Obtained</td>
          </tr>
      `;
      studentResultTable.innerHTML = tableHeader;

      student.testResults.forEach(function (testResult) {
        const row = `
          <tr class="student-result-data">
            <td>${testResult.subject}</td>
            <td>${testResult.date}</td>
            <td>${testResult.marksObtained}</td>
          </tr>
        `;
        studentResultTable.innerHTML += row;
      });

      studentResultContainer.appendChild(studentResultTable);
    });
  } else {
    resultContainer.style.display = "none";
    studentResultContainer.style.display = "none";
    alert("No test result found for this admission number.");
  }
}