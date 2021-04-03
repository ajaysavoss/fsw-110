

document.getElementById("sub").addEventListener("click", display)

function display(){
    let firstName = document.getElementById("first")
    let lastName = document.getElementById("last")
    let age = document.getElementById("age")
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let location = document.getElementById("location")
    let restrict1 = document.getElementById("d1")
    let restrict2 = document.getElementById("d2")
    let restrict3 = document.getElementById("d3")

    let gender ;
        if (male.checked == true){
            gender = 'male';
        } else if (female.checked ==true){
            gender = "female";
        }
    
    let restrictions = "";
        if (restrict1.checked == true){
            restrictions = restrictions.concat(restrict1.value).concat(" ");
        }
        if (restrict2.checked == true){
            restrictions = restrictions.concat(restrict2.value).concat(" ");
        }
        if (restrict3.checked == true){
            restrictions = restrictions.concat(restrict3.value).concat(" ");
        }
    

    alert("First name: " + firstName.value + "\n" + 
            "Last name: " + lastName.value + "\n" +
            "Age: " + age.value + "\n" + 
            "Gender: " + gender + "\n" +
            "Location: " + location.value + "\n" +
            "Dietary Restrictions: " + restrictions + "\n");
}