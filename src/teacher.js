import { teachersList } from "./data.js";

export const teachersData = {
  name: `Teachers`,
  content: `
        <h1>Teachers</h1>
        <div class="row row-cols-1 row-cols-md-2 g-2 card-place"> 
          <div class="card" style="width: 18rem;">
            <div class="card-body">
          <h5 class="card-title">${teachersList.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Students</a>
          <a href="#" class="card-link">Classes</a>
          </div>
          </div> 

         </div>
      
      `,
};
