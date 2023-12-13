import { homePageData  } from "./home.js";
import { teachersData } from "./teacher.js";
import { classesData } from "./classes.js";
import { studentsData } from "./students.js";
import {header} from "./header.js";
import {footer} from "./footer.js";
import { render } from "./function.js";
import { layout } from "./layout.js";
import { infoData } from "./content.js";


render('#app',header+layout+infoData+footer)

document.querySelector("#home-link").addEventListener("click",()=>{render("#content", homePageData.content)})
document.querySelector("#classes-link").addEventListener("click",()=>{render("#content",classesData.content)})
document.querySelector("#teachers-link").addEventListener("click",()=>{render("#content",teachersData.content)})
document.querySelector("#students-link").addEventListener("click",()=>{render("#content",studentsData.content)})
