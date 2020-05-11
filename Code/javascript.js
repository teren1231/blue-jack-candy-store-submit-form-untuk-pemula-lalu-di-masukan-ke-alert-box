function isLetter(s)
{
  return s.match("^[a-zA-Z\(\)]+$");    
}


function validate(){
    var nama = document.getElementById("nama");
    var candytype = document.getElementById("candytypes").value;
    var quantity = document.getElementById("quantity").value;
    var package = document.getElementById("Package").value;
    var address = document.getElementById("address").value;

    console.log(nama);
    if(nama(isLetter(nama)))
    {
        alert(nama)
        return true;
    }

    return false;
}




