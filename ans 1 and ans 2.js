
// CREAT YOUR RESUME DATA IN JASON FORMAT :

let myResume={
    "basics": {
      "name": "SURYA.R",
      "email": "suryasudhan2000@gmail.com",
      "phone": 9844733003,
      "degree": "B.E",
      "location": {
        "address": "13/a bennangur village",
        "postalCode": 635107,
        "city": "denkanikottai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/surya-undefined-ba2a0b241/",
          "github":"https://github.com/suryasudhan"
        }
      ]
    },
   
    "education": [
      {
        "institution": "hindusthan College Of Engineering and technology",
        "department": "Mechatronics",
        "studyType": "fulltime",
        "batch start year": 2018,
        "batch end year": 2022,
        "gpa": 8,
      }
    ],
    "skills": [
      {
        "name": "HTML,javascript",
        "level": "beginer",
        
        
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "WEB DEVELOPER,",
      }
    ]
  }
  console.log(myResume);


//   THE GIVEN JSON ITERATE OVER ALL FOR LOOPS (FOR,FOR IN , FOR FO)

var json = [{
    "id" : "surya1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of)",
    "task" : "zen portal task",
    "mail": "suryasudhan2000@gmail.com"
},
{
    "id" : "surya2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of)",
    "task" : "zen portal task",
    "mail": "suryasudhan2000@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
  console.log(text);