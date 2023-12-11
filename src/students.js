import { studentsList } from "./data.js";
export const studentsData = {
  content: `
    <h1>Teachers</h1>
    <div class="card-container" style="display: flex; flex-wrap: wrap;">
      ${studentsList.map((student) => {
        return `
          <div class="card" style="width: 18rem; margin: 10px;">
                     <div class="card-body">
              <h5 class="card-title">${
                student.fullName
              }</h5>
              <h7 class="card-title">${student.profession}</h7>
              <br><br>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Average : ${student.average}</a>
             
            </div>
          </div>
        `;
      })}
    </div>
  `,
};