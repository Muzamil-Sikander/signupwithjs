function validateForm() {
    let x = document.getElementById("naame").value;
    if (x == "") {
      alert("UserName must be filled out");
      return false;
    }


    let m = document.getElementById("emmail").value;
    if (m == "") {
      alert("email must be filled out");
      return false;
    }

    let p = document.getElementById("pass").value;
    if (p == "") {
      alert("password must be filled out");
      return false;
    }

    let cp = document.getElementById("confirm").value;
    if (cp == "") {
      alert("confirm password must be filled out");
      return false;
    }

    let a = document.getElementById("address").value;
    if (a == "") {
      alert(" address must be filled out");
      return false;
    }

    let n = document.getElementById("numm").value;
    if (n == "") {
      alert("Number must be filled out");
      return false;
    }
   

    let code = document.getElementById("postal").value;
    if (code == "") {
      alert("postal Code must be filled out");
      return false;
    }


  }