let taskList;
const savedTasks = JSON.parse(localStorage.getItem('tasks')); 
if(Array.isArray(savedTasks)){
     taskList = savedTasks;
}
else{
     taskList=[
     {
          title : 'Md Abul Kalam Azad',
          duedate : '2023/08/02',
          id : '01',
          mobileNo : '+880********',
     },
     {
          title : 'Abdullah Monsoor',
          duedate : '2023/08/7',
          id : '02',
          mobileNo : '+880********',
     }
     ];
}
     // Model
function removeTask(tobeDeletedId){
     taskList = taskList.filter(function(task){
          if(task.id==tobeDeletedId){
               return false;
          }
          else return true;
     });
     saveDate();
}    

// Controler
function deleteTask(event){
     let deleteButton = event.target;
     let tobeDeletedId = deleteButton.id;

     removeTask(tobeDeletedId)
     printTask();
}

// View Part
function addStyle(element){
     element.style.padding = '10px';
     element.style.backgroundColor = 'gray';
     
     
}
function printTask(){
     /// Deleting Previous Element
     document.getElementById('taskList').innerHTML='';

     taskList.forEach(function(task){
          let element=document.createElement('div');
          let element1=document.createElement('div');
          element1.id = 'sptask';
          // let element2=document.createElement('div');
          // let element3=document.createElement('div');
          let element4=document.createElement('div');
          let span1=document.createElement('span');
          let span2=document.createElement('span');
          let span3=document.createElement('span');
          let span4=document.createElement('span');
          element.innerText=task.title+" "+task.duedate  +" "+ task.mobileNo;
          addStyle(element);
          span1.innerText = task.title;
          span2.innerText = task.duedate;
          span3.innerText = task.mobileNo;
          element1.appendChild(span1);
          element1.appendChild(span2);
          element1.appendChild(span3);
          /// Delete Button
          let deleteButton=document.createElement('button');
          deleteButton.innerText="Delete";
          deleteButton.className = "dltbtn";
          ///Delete any Task
          deleteButton.onclick=deleteTask;
          deleteButton.id=task.id;
          //-------------

          element.appendChild(deleteButton);
          element4.appendChild(deleteButton);
          element1.appendChild(deleteButton);
          

          let element0=document.getElementById('taskList');
          element0.appendChild(element1);
          
     })
     
}

/// Iterate Whole List
taskList.forEach(function(task){
     printTask(task);
})
     // Model
function createTask(titleValue, dateValue, mobile){
          /// Extracting Unique ID
          let id=new Date().getTime().toString();

     /// Push title + date + id
     taskList.push({title : titleValue,duedate : dateValue,id : id , mobileNo : mobile});
     saveDate();
}
function saveDate(){
     localStorage.setItem('tasks', JSON.stringify(taskList));
}



// Controler
function addTask(){
     /// Taking new Task From Input Bar
     let title=document.getElementById('title');
     let titleValue=title.value;
     title.value='';

     /// Taking new Date From Input Bar
     let date=document.getElementById('taskDate');
     let dateValue=date.value;
     date.value='';

     let phone = document.getElementById('phone');
     let phoneNo = phone.value;
     phone.value = '';
     console.log(titleValue);
     createTask(titleValue, dateValue, phoneNo);

     /// Print New Task
     printTask();
}