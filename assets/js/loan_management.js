const firebaseConfig = {
  apiKey: "AIzaSyA1Uh1I-4hpJMdXQjIAWehSjqbeZmc-UqU",
  authDomain: "loan-6072b.firebaseapp.com",
  databaseURL: "https://loan-6072b-default-rtdb.firebaseio.com",
  projectId: "loan-6072b",
  storageBucket: "loan-6072b.appspot.com",
  messagingSenderId: "271808395369",
  appId: "1:271808395369:web:6cd9f8454eb28c79940af8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var alluser = firebase.database().ref().child("loan");

var totaluser = firebase.database().ref().child("loan");


var total = '';
var ploan = '';

var stimage = '';
var stimage2 = '';
var stimage3 = '';
var sigImage = '';

var ke = '';
var ke2 = '';

var phone = '';
var name4 = '';
var name5 = '';
var nid = '';
var content15 = '';

var balance = '';
var date = '';
var status = '';
var status2 = '';
var id = '';
var rdate = '';

var accnumber = '';
var bankname = '';
var branchname = '';
var username = '';




var friendnumber = '';
var nomineenumber = '';
var usernumber = '';



var car = '';
var education = '';
var family = '';
var home = '';
var job = '';
var purpose = '';
var income = '';
var w_code = '';


var amount = '';
var amount2 = '';
var month = '';
var month2 = '';
var kisti = '';
var kisti2 = '';
var loan ='';
var loan2 = '';


var vdate = '';
var vdate2 = '';
var vstatus = '';
var vstatus2 = '';
var vphone = '';
var vphone2 = '';
var notif = '';
var notif2 = 'No Notification';

var gender = 'd';



var aggrement2 = firebase.database().ref().child("aggrement").child('1');


var hone2 = '';
var oneoptiona2 = '';
var oneoptionb2 = '';
var oneoptionc2 = '';
var htwo2 = '';
var twooptiona2 = '';
var twooptionb2 = '';
var hthree2 = '';
var hthreecom2 = '';
var hfour2 = '';
var hfourcom2 = '';
var hfive2 = '';
var hfivecom2 = '';
var hsix2 = '';
var hsixcom2 = '';
var hseven2 = '';
var hsevencom2 = '';
var height = '';
var heightcom2 = '';
var hnine2 = '';
var hninecom2 = '';



var hten2 = '';
var htencom2 = '';
var heleven2 = '';
var helevencom2 = '';
var htwelve2 = '';
var htwelvecom2 = '';
var hthirteen2 = '';
var hthirteencom2 = '';


var sigImage = '';



aggrement2.on("value", function (snapshot4) {
  if (snapshot4.exists()) {






      hone2 = snapshot4.val().headone;
      oneoptiona2 = snapshot4.val().headoneoptionA;
      oneoptionb2 = snapshot4.val().headoneoptionB;
      oneoptionc2 = snapshot4.val().headoneoptionC;
      htwo2 = snapshot4.val().headtwo;
      twooptiona2 = snapshot4.val().headtwooptionA;
      twooptionb2 = snapshot4.val().headtwooptionB;
      hthree2 = snapshot4.val().headthree;
      hthreecom2 = snapshot4.val().hthreecom;
      hfour2 = snapshot4.val().headfour;
      hfourcom2 = snapshot4.val().hfourcom;
      hfive2 = snapshot4.val().headfive;
      hfivecom2 = snapshot4.val().hfivecom;
      hsix2 = snapshot4.val().headsix;
      hsixcom2 = snapshot4.val().hsixcom;
      hseven2 = snapshot4.val().headseven;
      hsevencom2 = snapshot4.val().hsevencom;
      height2 = snapshot4.val().headeight;
      heightcom2 = snapshot4.val().heightcom;
      hnine2 = snapshot4.val().headnine;
      hninecom2 = snapshot4.val().hninecom;



      hten2 = snapshot4.val().headten;
      htencom2 = snapshot4.val().htencom;
      heleven2 = snapshot4.val().headeleven;
      helevencom2 = snapshot4.val().helevencom;
      htwelve2 = snapshot4.val().headtwelve;
      htwelvecom2 = snapshot4.val().htwelvecom;
      hthirteen2 = snapshot4.val().headthirteen;
      hthirteencom2 = snapshot4.val().hthirteencom;




  }



 


});






totaluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    total = snapshot.numChildren();

    snapshot.forEach(function (data) {




      // content11 = snapshot.numChildren();


    });

    console.log('total user ' + total);



    $('#user').html('Total User : ' + total);



  }


});




alluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      var tt = val.status;





      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.uname + '</td>';
      content += '<td >' + val.uphone + '</td>';
      content += '<td >' + val.amount + '</td>';
      content += '<td >' + val.loan + '</td>';
      content += '<td >' + val.month + '</td>';
      content += '<td >' + val.date + '</td>';
      content += '<td id="aa">' + val.status + '</td>';
      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + '<a href="#" data-tip="delete" style="color: green;"  onclick=stats("' + data.key + '")><i class="fa fa-eye" aria-hidden="true"></i></a>' +
        '<a href="#" data-tip="edit" style="color: rgb(28, 81, 214);" onclick=edit("' + data.key + '") ><i class="fa fa-edit"></i></a>' +
        '<a href="#" data-tip="delete" style="color: #4ad9c4;" onclick=addam("' + data.key + '")><i class="fa fa-plus" aria-hidden="true"></i></a>' + '<a href="#" data-tip="delete" style="color: #db8412;" onclick=dtl("' + data.key + '")><i class="fa fa-print" aria-hidden="true"></i></a>' +


        "</td>";


      content += '</tr>';


    });







    $('#atttbl_posts_body').html(content);


    let currentPage = 1;
    let rowsPerPage = 10;
    let totalPages;
    const pageNumbers = document.getElementById("pageNumbers");

    function paginateTable() {
      let table = document.getElementById("myTable");
      let rows = Array.from(table.rows).slice(1);
      totalPages = Math.ceil(rows.length / rowsPerPage);

      rows.forEach(row => row.style.display = "none");

      let start = (currentPage - 1) * rowsPerPage;
      let end = start + rowsPerPage;
      rows.slice(start, end).forEach(row => row.style.display = "");
      pageNumbers.innerHTML = "";
      createPageLink("<<", 1);
      createPageLink("<", currentPage - 1);

      let startPageNumber = currentPage < 5 ? 1 : (currentPage > totalPages - 2 ? totalPages - 4 : currentPage - 2);
      let endPageNumber = totalPages < 5 ? totalPages : (currentPage <= totalPages - 2 ? startPageNumber + 4 : totalPages);
      for (let i = startPageNumber; i <= endPageNumber; i++) {
        createPageLink(i, i);
      }
      createPageLink(">", currentPage + 1);
      createPageLink(">>", totalPages);

      setActivePageNumber();
      from.innerHTML = (currentPage - 1) * rowsPerPage + 1;
      to.innerHTML = currentPage === totalPages ? rows.length : (currentPage) * rowsPerPage;
      totalTableEntries.innerHTML = rows.length;

    }

    paginateTable();

    function changePage(e, pageNumber) {
      if ((pageNumber == 0) || (pageNumber == totalPages + 1)) return;
      e.preventDefault();
      currentPage = pageNumber;
      pageNumberInput.value = "";
      paginateTable();
    }

    function setActivePageNumber() {
      document.querySelectorAll("#pageNumbers a").forEach(a => {
        if (a.innerText == currentPage) {
          a.classList.add("active");
        }
      });
    }

    function createPageLink(linkText, pageNumber) {
      let pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.innerHTML = linkText;
      pageLink.addEventListener("click", function (e) {
        changePage(e, pageNumber);
      });
      pageNumbers.appendChild(pageLink);
    }

    goToPageButton.addEventListener("click", (e) => {
      changePage(e, pageNumberInput.value);
    });
  }


});


function stats(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det3").style.display = "block"

  var arr = document.getElementsByName('x').value;

  console.log(arr);



  ke2 = key;

  var ref51 = firebase.database().ref().child("loan").child(key);

  var ref101 = firebase.database().ref().child("notification").child(key);

  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      loan2 = snapshot4.val().loan;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;


      

      //  sec = snapshot4.val().section;





    }





console.log(vstatus2)


    $('#pstatus').html(vstatus2);
   





  });

  ref101.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      notif = snapshot4.val().nitification;



      //  sec = snapshot4.val().section;





    }





console.log(notif)


    $('#pstatus').html(vstatus2);


    if(notif==''){
      $('#noti').val(notif2);
      return false;
    }
    else{
      $('#noti').val(notif);
    }
   
   // $('#noti').val(notif)




  });
}







function edit(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det").style.display = "block"

  ke = key;

  var ref5 = firebase.database().ref().child("loan").child(key);

  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      name4 = snapshot4.val().uname;


      amount = snapshot4.val().amount;
      loan = snapshot4.val().loan;
      month = snapshot4.val().month;
      kisti = snapshot4.val().kisti;
      vdate = snapshot4.val().date;
      vstatus = snapshot4.val().status;
      vphone = snapshot4.val().uphone;



    }




    $('#cname').html(name4);

    $('#ploan').html(amount);

    $('#camount').val(amount);
    $('#cmonth').val(month);


    console.log('jeeee' + month);


  });
}


function addam(key) {

  document.getElementById("mainp").style.display = "none"
  document.getElementById("frm").style.display = "none"
  document.getElementById("user").style.display = "none"
  document.getElementById("clos").style.display = "block"
  document.getElementById("det2").style.display = "block"

  ke2 = key;

  var ref51 = firebase.database().ref().child("loan").child(key);

  ref51.on("value", function (snapshot4) {
    if (snapshot4.exists()) {


      name5 = snapshot4.val().uname;


      amount2 = snapshot4.val().amount;
      month2 = snapshot4.val().month;
      kisti2 = snapshot4.val().kisti;
      vdate2 = snapshot4.val().date;
      vstatus2 = snapshot4.val().status;
      vphone2 = snapshot4.val().uphone;
      loan2 = snapshot4.val().loan;


      

      //  sec = snapshot4.val().section;





    }








    $('#camount2').val(amount2);
    $('#total').val(amount2);





  });
}




function myclose() {
  // get user input
  document.getElementById("mainp").style.display = "block"
  document.getElementById("frm").style.display = "block"
  document.getElementById("user").style.display = "block"
  document.getElementById("clos").style.display = "none"
  document.getElementById("det").style.display = "none"
  document.getElementById("det2").style.display = "none"
  document.getElementById("det3").style.display = "none"
   document.getElementById("det4").style.display = "none"

  notif = '';


}



function validate() {

 // var mocname = document.getElementById("cname").value;
  var camount = document.getElementById("camount").value;
  var cmonth = document.getElementById("cmonth").value;



  var ref7 = firebase.database().ref().child("loan");

  var didConfirm = confirm("Are you sure You want to submit??");

  var valu = parseInt(camount);
  var valu2 = parseInt(cmonth);
  var newloan = Math.ceil(valu+(valu*0.5)/100);
  var kk = newloan / valu2;
  console.log('jjjjjj' + valu);
  var d = Math.ceil(kk);
  
  let text = valu.toString();
  let text2 = newloan.toString();
  let text3 = d.toString();


  if (didConfirm == true) {

    ref7.child(ke).set({
      "amount": text,
      "date": vdate,
      'loan':text2,
      'kisti': text3,
      'month': cmonth,
      'status': vstatus,
      'uname': name4,
      'uphone': vphone,

    });



    location.reload();

  



  } else {
    return false;
  }
  




}


function validate3() {

  // var mocname = document.getElementById("cname").value;
   var camount2 = document.getElementById("total").value;
  
 
 
 
   var ref8 = firebase.database().ref().child("loan");
 
   var didConfirm = confirm("Are you sure You want to submit??");
 
   var valu = parseInt(camount2);
   var valu2 = parseInt(month2);

   var nloan = Math.ceil(valu+(valu*0.5)/100);
   
   var kk = nloan / valu2;
   console.log('jjjjjj' + valu);
   console.log('jeeee' + month2);
   var d = Math.ceil(kk);

   let text = valu.toString();
   let text2 = nloan.toString();
   let text3 = d.toString();

   console.log(d);
 

   if (didConfirm == true) {
 
     ref8.child(ke2).set({
       "amount": camount2,
       "date": vdate2,
       'kisti': text3,
       'month': month2,
       'status': vstatus2,
       'uname': name5,
       'uphone': vphone2,
       'loan':text2,
 
     });
 
 
 
     location.reload();
 
   
 
 
 
   } else {
     return false;
   }
   
 
 
 
 
 }


function findTotal() {
  var arr = document.getElementsByName('qty');

  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value))
      tot += parseInt(arr[i].value);
  }
  document.getElementById('total').value = tot;
};
document.addEventListener("DOMContentLoaded", function (event) {
  findTotal();
});



function validate33() {
  gender = document.querySelector('input[name = optionsRadios]:checked').value;

  }


  function validate34() {

    var noti = document.getElementById("noti").value;
   
  if (noti == "") {
    alert("Notification must be filled out");
    return false;
  }

  if (gender == "d") {
    alert("Status must be filled out");
    return false;
  }
    
  var didConfirm = confirm("Are you sure You want to submit??");
  var ref9 = firebase.database().ref().child("loan");
  var ref10 = firebase.database().ref().child("notification");

  if (didConfirm == true) {

    ref9.child(ke2).set({
      "amount": amount2,
      "date": vdate2,
      'kisti': kisti2,
      'month': month2,
      'status': gender,
      'uname': name5,
      'uphone': vphone2,
      'loan':loan2,

    });


    ref10.child(ke2).set({
      "nitification": noti,
      "date": vdate2,
      'uname': name5,
      'uphone': vphone2,


    });
 
    

    console.log(gender);

     location.reload();

  



  } else {
    return false;
  }
    
    }




    function myFunction() {
      // get user input
      const userInput = document.getElementById("myInput").value.trim().toUpperCase();
    
      document.querySelectorAll('tr[name="bc"]').forEach((item) => {
        const tdTxt = [...item.querySelectorAll('td')].map(elem => elem.textContent.trim().toUpperCase()).join(',');
    
        if (tdTxt.indexOf(userInput) === -1) {
          item.style.display = "none"
        } else {
          item.style.display = "";
        }
    
      })
    }










    function dtl(key) {

     
     // document.getElementById("mainp").style.display = "none"
     // document.getElementById("frm").style.display = "none"
     // document.getElementById("user").style.display = "none"
    //  document.getElementById("clos").style.display = "block"
    //  document.getElementById("det4").style.display = "block"
    
      ke = key;

    
      var ref51 = firebase.database().ref().child("loan").child(key);
      var signature = firebase.database().ref().child("signature").child(key);

      signature.on("value", function (snapshot4) {
        if (snapshot4.exists()) {
    
    
          sigImage = snapshot4.val().image;
    
        }
    
        else {
          sigImage = 'assets/img/no-image-available.jpg';
    
        }
    
    
      //  document.getElementById("fron4").src = sigImage;
    
    
    
      });
    
      
    
      ref51.on("value", function (snapshot4) {
        if (snapshot4.exists()) {
    
    
          name5 = snapshot4.val().uname;
    
    
          amount2 = snapshot4.val().amount;
          month2 = snapshot4.val().month;
          kisti2 = snapshot4.val().kisti;
          vdate2 = snapshot4.val().date;
          vstatus2 = snapshot4.val().status;
          vphone2 = snapshot4.val().uphone;
    
    
          
    
          //  sec = snapshot4.val().section;
    
    
    
    
    
        }

        var style = "<style>";
        style = style + "table {width: 98%;font: 17px Calibri;margin-bottom: 10px;margin-left:10px;margin-right:10px;}";
        style = style + "table, th, td {border: solid 1px #302e2e; border-collapse: collapse;margin-left:10px;";
        style = style + "padding: 2px 3px;}";
        style = style + "h2 {padding-left:10px;}";
        style = style + "h3 {margin-top:20px;padding-left:10px;}";
        style = style + '.content { display: flex;margin-top:10px;margin-bottom:10px;}';
        style = style + '.content img {margin-right: 10px; display: block;}';
        style = style + '.content h3,.content p {margin: 0;}';
        style = style + '';
        style = style + "</style>";
    
    
        var win = window.open('height=700,width=700');

        win.document.write('<html><head>');
        //  win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write('<div style="border-style: dashed;">');
        win.document.write('<div class="content">');
        
        // win.document.write('<p id="h"  class="h4">' + cls + '</p>');
      
        win.document.write('<h2 style="text-align: center;font-weight: bold;margin-left:44%;">চুক্তিপত্র</h2>');
   
       
        win.document.write('</div>');
        // win.document.write('<div id="photo" style="text-align: center"><img style="vertical-align:middle" src="img/logo-removebg-preview.png" height="50" width= "50" alt="" ><p style="vertical-align:middle">Dream Stair School</p> </div>');
  
        // win.document.write(message);              // THE TABLE CONTENTS INSIDE THE BODY TAG.
  
  
        //  console.log(message);
      
        win.document.write('<table>' + '<tr><td style="padding-left:10px;">' + 'গ্রাহকের নাম' + '</td><td style="padding-left:10px;">' + name5 + '</td>'  + '<tr>' + '<tr><td style="padding-left:10px;">' + 'আবেদনের তারিখ' + '</td><td style="padding-left:10px;">' + vdate2 + '</td>'  + '<tr>'+ '<tr><td style="padding-left:10px;">' + 'গ্রাহকের ফোন নম্বর' + '</td><td style="padding-left:10px;">' + vphone2 + '</td>'  + '<tr>'+'<tr><td style="padding-left:10px;">' + 'ঋণের পরিমাণ' + '</td><td style="padding-left:10px;">' + amount2+" tk"  + '</td>'  + '<tr>'+'<tr><td style="padding-left:10px;">' + 'ঋণের কিস্তি' + '</td><td style="padding-left:10px;">' + kisti2+" tk" + '</td>'  + '<tr>'+'<tr><td style="padding-left:10px;">' + 'মোট কিস্তি' + '</td><td style="padding-left:10px;">' + month2 + '</td>'  + '<tr>'+'<tr><td style="padding-left:10px;">' + 'মাসিক সুদের হার' + '</td><td style="padding-left:10px;">' + '০.৫%' + '</td>'  + '<tr>'+'<tr>'+'<tr><td style="padding-left:10px;">' + 'ঋণের কিস্তি' + '</td><td style="padding-left:10px;">' + 'Actual Amount' + '</td>'  + '<tr>'+'<tr><td style="padding-left:10px;">' + 'মোট কিস্তি' + '</td><td style="padding-left:10px;">' + 'Actual Amount' + '</td>'  + '<tr>'+'<tr><td style="padding-left:10px;">' + 'পেমেন্টের তারিখ' + '</td><td style="padding-left:10px;">' + 'প্রতি মাসের ৫-১৫ তারিখের মধ্যে' + '</td>'  + '<tr>'+  '</table>');
        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hone2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;margin-bottom:-10px;">'+oneoptiona2+'</p>');
        win.document.write(' <p style="text-align:left;padding-left:10px;margin-bottom:-10px;">'+oneoptionb2+'</p>');
        win.document.write(' <p style="text-align:left;padding-left:10px;">'+oneoptionc2+'</p>');




        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+htwo2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;margin-bottom:-10px;">'+twooptiona2+'</p>');
        win.document.write(' <p style="text-align:left;padding-left:10px;">'+twooptionb2+'</p>');



        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hthree2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+hthreecom2+'</p>');


        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hfour2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+hfourcom2+'</p>');



        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hfive2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+hfivecom2+'</p>');



        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hsix2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+hsixcom2+'</p>');


        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hseven2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+hsevencom2+'</p>');



        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+height2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+heightcom2+'</p>');



        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hnine2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+hninecom2+'</p>');


        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hten2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+htencom2+'</p>');


        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+heleven2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+helevencom2+'</p>');


        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+htwelve2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+htwelvecom2+'</p>');


        win.document.write(' <h4 style="text-align:left;padding-left:10px;margin-top:36px;">'+hthirteen2+'</h4>');
        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;">'+hthirteencom2+'</p>');



        win.document.write(' <p style="text-align:left;padding-left:10px;padding-right:10px;margin-top:20px">'+'আমার স্বাক্ষর এবং অফিস সীল দ্বারা সাক্ষ্য'+'</p>');

        win.document.write('<table>' + '<tr><td style="padding-left:10px;">' + 'ঋণগ্রহীতার স্বাক্ষর' + '</td><td style="padding-left:10px;">' + '<img src="'+sigImage+'" class="nidimg" alt="Paris" id="fron4" height="100" width="120" style="padding:20px">' + '</td>'  + '<tr>' + '<tr><td style="padding-left:10px;">' + 'ঋণদাতার স্বাক্ষর' + '</td><td style="padding-left:10px;">' + '<img src="assets/img/bd.png" class="nidimg" alt="Paris" id="fron4" height="100" width="120" style="padding:20px">' + '</td>'  + '<tr>' + '<tr><td style="padding-left:10px;">' + '</td>'  +   '</table>');



        
        win.document.write('</div>');
        win.document.write('</body></html>');
  
        // CLOSE THE CURRENT WINDOW.
  
        // win.print();
  
        win.document.close();
      
    
    
    
      });


     
    
  
    }