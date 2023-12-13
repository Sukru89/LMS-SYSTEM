import { teachersList } from "./data.js";

export const teachersData = {
  content: `
    <h1>Teachers</h1>
    <div class="card-container" style="display: flex; flex-wrap: wrap;">
      ${teachersList.map((teacher) => {
        return `
          <div class="card" style="width: 18rem; margin: 10px;">
                     <div class="card-body">
              <h5 class="card-title">${
                teacher.fullName
              }
              <button id="edit-btn"><i class="bi-pencil pencil-place"></i></button>
              <button id="delete-btn"><i class="bi-trash trash-place"></i></button>
              </h5>
              <h7 class="card-title">${teacher.profession}</h7>
              <br><br>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Students</a>
              <a href="#" class="card-link">Classes</a>
            </div>
          </div>
        `;
      })}
    </div>
    <div><i class="bi bi-plus-circle bi-place "></i></div>
  `,
};
