var phoneNumberP;
var EmailP;
var PickupP;
var statusP;
var phoneT;
var emailT;
var pickupT;
var statusT;
var passT;
var passTC; 

function profileEdit() 
{
        var mainContentDiv = document.getElementById('mainContent');
        mainContentDiv.innerHTML = `
    
        <div class="backtop"></div>        
        <div class="backheadpassreq">   Profile    </div>
        <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
        <a href="index.html"><div class="backbutton"></div></a>
        <div class="lele2"><h2></h2></div>    
        <div class="backgroundkaos"></div>      
        <div class="profileBilde"><img src=img/bildetest.png style="max-width: 230px; max-height: 250px;"></div>
        <div class="ProfileEdit">       
                <div class="profilePhone"><input type="text" id="phoneT" name="Number" placeholder="Phone Number" style="border: none; text-align: center;"></div>
                <div class="profileEmail"><input type="text" id="emailT"  name="Mail" placeholder="Email Adress"  style="border: none; text-align: center;"></div>
                <div class="profilePickup"><input type="text" id="pickupT" name="Point" placeholder="Pick up Point" style="border: none; text-align: center;"></div>
                <div class="profileStatus"><input type="text" id="statusT" name="Status" placeholder="Driver Status" style="border: none; text-align: center;"></div>
                <div class="profilePassword"><input type="password" id="passT" name="Password" placeholder="New Password" style="border: none; text-align: center;"></div>
                <div class="profileConfirm"><input type="password" id="passTC" name="PassAgain" placeholder="New Password Again" style="border: none; text-align: center;"></div>
                <div class="profileSave" id="feilsokk" onclick="saveP()">Save Changes</div>
        </div>
        `;
}
function saveP()
{               
        var mainContentDiv = document.getElementById('mainContent');
        phoneNumberP = PhoneCP;
        EmailP = EmailCP;
        PickupP = PickupCP;
        statusP = statusCP;
        phoneT = document.getElementById('phoneT').value;
        emailT = document.getElementById('emailT').value;
        pickupT = document.getElementById('pickupT').value;
        statusT = document.getElementById('statusT').value;
        passT = document.getElementById('passT').value;
        passTC = document.getElementById('passTC').value;
        if(passT == passTC && !passT == '')
        {
                mainContentDiv.innerHTML = `
  
   
                <div class="backtop"></div>        
                <div class="backheadpassreq">   Profile    </div>
                <div onclick="showMenu()" class="backbuttonsymbol">&lt;&lt</div></a>
                <div onclick="showMenu()" class="backbutton"></div></a>
                       
                   <div class="lele2"><h2></h2></div>    
                   <div class="backgroundkaos"></div>      
                   <div class="profileBilde"><img src=img/bildetest.png style="max-width: 230px; max-height: 250px;"></div>
                   <div class="ProfileBoks">  
                       
                           <div id="Navn" class="profileNavn">Houng Dajin</div>
                           <div class="profile1">Phone Number<br><div id="nummer" class="profileInfo">` + phoneT + `</div></div>
                           <div class="profile2">Email <br><div id="mail" class="profileInfo">` + emailT + `</div></div>
                           <div class="profile3">Pick up Point <br><div id="point" class="profileInfo">` + pickupT + `</div></div>
                           <div class="profile4">Driver Status<br><div id="status" class="profileInfo">` + statusT + `</div></div>
                           <div id="lar"></div>
                           <div id="lar2"></div>
                           <div class="profile5" onclick="profileEdit()">Edit Profile</div>
                   
                   </div>
                   
                `;
        }
        else
        {
                document.getElementById('feilsokk').innerHTML = '<font color="red">Passordene er forskjellige!</font>';
        }

}