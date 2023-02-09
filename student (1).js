let student=[{
    studentName:"Lavanya",
    rollNo:3,
    physicsMarks:67,
    chemistryMarks:67, 
    computerscienceMarks:67   
}];

console.log(student);

let student_Name=document.getElementById("name");
let rollNo=document.getElementById("rollNo");
let physics_Marks=document.getElementById("phy");
let  chemistry_Marks=document.getElementById("cm");
let computerscience_Marks=document.getElementById("cs");
       
      
      

 function DisplayDataIntoTable(){
   
        if(student_Name.value==""||rollNo.value==""||physics_Marks.value==""
        ||chemistry_Marks.value==""||computerscience_Marks.value==""){
            addBtn.removeEventListener("click",DisplayDataIntoTable);
            alert("fill the requried data")
            
         }


        else{

    document.getElementById("demo").innerHTML="";
    for(let i=0;i<student.length;i++){

    document.getElementById("demo").innerHTML+=
  
                   `<tr>
                   <td>${student[i].studentName}</td>
                   <td>${student[i].rollNo}</td>
                   <td>${student[i]. physicsMarks}</td>
                   <td>${student[i]. chemistryMarks}</td>
                   <td>${student[i].computerscienceMarks}</td>
                  
                   </tr>`
            }  
           
        }   

    }  
         



         function addButton(){
            if(student_Name.value==""||rollNo.value==""||physics_Marks.value==""
            ||chemistry_Marks.value==""||computerscience_Marks.value==""){
                alert("fill the requried data")
            }
              else{


                var finding=student.find(obj=>obj.rollNo==rollNo.value);
                console.log(finding)

                if(finding==undefined){
                    let variable= student.push({
                        studentName:student_Name.value,
                        rollNo:rollNo.value,
                        physicsMarks:physics_Marks.value,
                        chemistryMarks:chemistry_Marks.value,
                        computerscienceMarks: computerscience_Marks.value
            
                    });
                    DisplayDataIntoTable();
                }
      
    
      
    }
    }
          









// //           let addBtn=document.getElementById("addBtn");

// //           addBtn.addEventListener("click",PostDataIntoJson);
          
// // async function PostDataIntoJson(){
// //     let obj={
// //         "studentName":`${student_Name.value}`,
// //     " rollNo":`${rollNo.value}`,
// //      " physicsMarks":`${physics_Marks.value}}`,
// //      "chemistryMarks":`${chemistry_Marks.value}`,
// //       "computerscienceMarks":`${ computerscience_Marks.value}`}
    


// //       if(obj.studentName == ""||obj.rollNo==""||obj. physicsMarks == ""||
// //       obj.chemistryMarks == ""||obj.computerscienceMarks == ""){
// //         addBtn.removeEventListener("click",PostDataIntoJson);

// //     alert("fill the requried data")

// //     }
// //     else{

   
// //         let response=await fetch("http://localhost:3000/Student",{
// //             method:"POST",
// //             headers:{
// //               "Content-Type":"application/json"
            
// //           },
// //           body:JSON.stringify(obj)
// //               }
// //           )
          
// //          
// //           console.log(obj);
// //           DisplayDataIntoTable()
         

// //     }
    
    
    
 
    
// }



















// if(student_Name==""||rollNo==""||physics_Marks==""||chemistry_Marks==""||
// computerscience_Marks==""){
// alert("please fill  the required fields");

// }


          
                   






















































