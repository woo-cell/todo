(()=>{"use strict";class e{constructor(){this.categories=[]}addCategory(e){this.categories.push(e)}deleteCategory(e){this.categories=this.categories.filter((t=>t.name!==e))}}class t{constructor(e){this.name=e,this.tasks=[]}addTask(e){this.tasks.some((t=>t.title===e.title))||this.tasks.push(e)}deleteTask(e){this.tasks=this.tasks.filter((t=>t.title!==e))}}class n{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.completed=!1,this.priority=o}toggleTaskStatus(){this.completed=!this.completed}}let o;function a(){const e=JSON.stringify(o);localStorage.setItem("taskList",e)}const c=function(){const a=localStorage.getItem("taskList");if(console.log(a),a)o=JSON.parse(a),o=Object.assign(new e,o),o.categories=o.categories.map((e=>{const o=Object.assign(new t(e.name),e);return o.tasks=o.tasks.map((e=>Object.assign(new n,e))),o}));else{o=new e;const a=new t("work"),c=new t("study"),s=new t("personal");o.addCategory(a),o.addCategory(c),o.addCategory(s);const d=new n("Task 1","Description of Task 1","2023-01-01"),l=new n("Task 2","Description of Task 2","2023-02-01"),i=new n("Task 3","Description of Task 3","2023-03-01");a.addTask(d),a.addTask(l),c.addTask(i)}return console.log(o),o}(),s=document.querySelector(".content");function d(e){const t=document.querySelector(".category-container > ul"),n=document.createElement("li"),o=document.createElement("a");o.setAttribute("href","#"),o.classList.add("link"),o.textContent=`${e.name}`,o.addEventListener("click",(e=>{e.stopPropagation();const t=c.categories.findIndex((t=>t.name===e.target.textContent));var n;C(c.categories[t]),n=e.target,document.querySelectorAll(".link").forEach((e=>e.classList.remove("active-link"))),n.classList.add("active-link")}));const a=document.createElement("button");a.classList.add("edit-cat-btn"),a.textContent="edit",a.addEventListener("click",l);const s=document.createElement("button");s.classList.add("delete-cat-btn"),s.textContent="delete",s.addEventListener("click",(e=>{e.stopPropagation();const t=document.querySelectorAll(".delete-cat-btn");Array.from(t).indexOf(e.target),e.target.parentElement.firstChild.classList.contains("active-link")?(k(e),E.innerHTML="",i()):k(e),console.log(c)})),n.appendChild(o),n.appendChild(a),n.appendChild(s),t.appendChild(n)}function l(e){e.stopPropagation(),console.log("you clicked on edit");const t=document.querySelector(".e-cat-dialog"),n=document.getElementById("e-cat-title"),o=document.getElementById("close-e-cat-dialog"),s=document.getElementById("e-cat-btn-dialog"),d=e.target.parentElement.firstChild,l=e.target.parentElement.firstChild.textContent.trim();n.value=l,t.showModal(),o.addEventListener("click",(()=>{t.close()})),s.addEventListener("click",(function e(n){n.preventDefault(),n.stopPropagation();const o=document.getElementById("e-cat-title"),i=document.querySelectorAll(".link"),r=Array.from(i).findIndex((e=>e.textContent.trim()===l));let u=c.categories[r].name;c.categories[r].name=o.value,u=o.value,console.log(u),console.log(c),d.textContent=`${u}`,t.close(),C(c.categories[r]),s.removeEventListener("click",e),a()}))}function i(){const e=document.querySelector(".task-container"),t=document.createElement("p");t.textContent="Click on a category to show the associated tasks",t.classList.add("text"),e.appendChild(t)}!function(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="TO DO APP",e.appendChild(t),s.appendChild(e)}(),function(){const e=document.createElement("main");e.appendChild(function(){const e=document.createElement("div");e.classList.add("category-container");const t=document.createElement("p");t.textContent="Your categories";const n=document.createElement("ul");return e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("task-container"),e}()),s.appendChild(e)}(),function(){const e=document.querySelector(".category-container > ul"),t=document.createElement("button");t.classList.add("add-category"),t.textContent="ADD",e.appendChild(t)}(),c.categories.forEach(((e,t)=>{d(c.categories[t])})),function(){const e=document.createElement("footer"),t=document.createElement("p"),n=(new Date).getFullYear();t.innerHTML=`&copy; ${n} Woo-Cell`,e.appendChild(t),s.appendChild(e)}(),i();const r=document.querySelector(".add-category"),u=document.querySelector(".add-cat-dialog"),m=document.getElementById("cat-title"),g=document.getElementById("close-add-cat-dialog"),p=document.getElementById("add-cat-btn-dialog");function k(e){e.target.parentElement.remove(),c.deleteCategory(`${e.target.parentElement.firstChild.textContent}`),a()}r.addEventListener("click",(()=>{u.showModal()})),g.addEventListener("click",(()=>{u.close(),m.value=""})),p.addEventListener("click",(e=>{e.preventDefault();const n=new t(`${m.value}`);m.value&&(d(n),c.addCategory(n),console.log(c),u.close(),m.value="",a())})),console.log(c);const E=document.querySelector(".task-container");function C(e){E.innerHTML="",function(e){const t=document.createElement("h2");t.classList.add("cat-heading"),t.textContent=e.name,E.appendChild(t)}(e),function(){const e=document.createElement("button");e.classList.add("add-task-btn"),e.textContent="Add New Task",E.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("task-card-container"),E.appendChild(e)}(),function(e){e.tasks.forEach((e=>{y(e)}))}(e),function(){const e=document.querySelector(".add-task-dialog"),t=document.querySelector(".add-task-btn"),o=document.getElementById("close-add-task-dialog"),s=document.getElementById("add-task-btn-dialog"),d=document.getElementById("task-title"),l=document.getElementById("task-description"),i=document.getElementById("task-due-date"),r=document.getElementById("task-priority");t.addEventListener("click",(()=>{e.showModal(),d.value="",l.value="",i.value=""})),o.addEventListener("click",(()=>{e.close()})),s.addEventListener("click",(t=>{if(t.preventDefault(),d.value&&i.value){const t=new n(`${d.value}`,`${l.value}`,`${i.value}`,`${r.value}`),o=document.querySelector(".cat-heading");console.log(o),console.log(o.textContent);const s=c.categories.findIndex((e=>e.name===o.textContent));console.log(s);const u=c.categories[s];u.addTask(t),console.log(u),y(t),e.close(),a()}}))}()}function y(e){const t=document.querySelector(".task-card-container"),n=document.querySelectorAll(".card");if(!Array.from(n).some((t=>e.title===t.querySelector(".task-title").textContent))){const n=document.createElement("div");n.classList.add("card");const o=document.createElement("h3");o.classList.add("task-title"),o.textContent=e.title;const a=document.createElement("p");a.classList.add("task-description"),a.textContent=e.description;const c=document.createElement("p");c.classList.add("task-due-date"),c.textContent=`Due Date: ${e.dueDate}`;const s=document.createElement("p");s.classList.add("task-priority"),e.priority?s.textContent=`Priority: ${e.priority}`:s.textContent="Priority: unset";const d=document.createElement("button");d.classList.add("edit-task-btn"),d.textContent="edit",d.addEventListener("click",f);const l=document.createElement("button");l.classList.add("delete-task-btn"),l.textContent="delete",l.addEventListener("click",h);const i=document.createElement("button");i.classList.add("task-done-button"),i.textContent="done",i.addEventListener("click",v),n.appendChild(o),n.appendChild(a),n.appendChild(c),n.appendChild(s),n.appendChild(d),n.appendChild(l),n.appendChild(i),t.appendChild(n)}}function h(e){const t=e.target.parentElement.parentElement.parentElement.firstChild.textContent.trim(),n=e.target.parentElement.firstChild.textContent.trim(),o=c.categories.findIndex((e=>e.name.trim()===t));console.log(n),c.categories[o].deleteTask(n),e.target.parentElement.remove(),console.log(c),a()}function f(e){const t=document.querySelector(".e-task-dialog"),n=document.getElementById("e-close-add-task-dialog"),o=document.getElementById("e-add-task-btn-dialog"),s=document.getElementById("e-task-title"),d=document.getElementById("e-task-description"),l=document.getElementById("e-task-due-date"),i=document.getElementById("e-task-priority"),r=e.target.parentElement.firstChild.textContent.trim(),u=e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim(),m=e.target.previousElementSibling.previousElementSibling.textContent.trim().replace("Due Date: ","");m.replaceAll("-"," ");const g=e.target.previousElementSibling.textContent.trim().replace("Priority: ","");console.log(g),t.showModal(),s.value=r,d.value=u,l.value=m,i.value="unset"!==g?g:"low",n.addEventListener("click",(()=>{t.close()})),o.addEventListener("click",(e=>{if(e.preventDefault(),s.value&&l.value){const e=document.querySelector(".cat-heading"),n=c.categories.findIndex((t=>t.name===e.textContent));console.log(n);const o=c.categories[n];console.log(o);const u=o.tasks.findIndex((e=>e.title===r)),m=o.tasks[u];m.title=s.value,m.description=d.value,m.dueDate=l.value,m.priority=i.value,console.log(c),function(e,t){const n=document.querySelectorAll(".card"),o=Array.from(n).findIndex((e=>e.firstChild.textContent.trim()===t));console.log(n[o]);const a=n[o],c=a.querySelector(".task-title"),s=a.querySelector(".task-description"),d=a.querySelector(".task-due-date"),l=a.querySelector(".task-priority");c.textContent=e.title,s.textContent=e.description,d.textContent=`Due Date: ${e.dueDate}`,l.textContent=`Priority: ${e.priority}`}(m,r),t.close(),a()}}))}function v(e){e.target.parentElement.classList.toggle("done");const t=document.querySelector(".cat-heading"),n=c.categories.findIndex((e=>e.name===t.textContent));console.log(n);const o=c.categories[n],s=o.tasks.findIndex((t=>t.title===e.target.parentElement.firstChild.textContent.trim()));o.tasks[s].toggleTaskStatus(),a()}})();
//# sourceMappingURL=main.js.map