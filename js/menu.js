function showMenu()
{
    mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="m1"></div>
    <div class="m11">Menu</div>

    <button onclick="showreqPage()" class="m2">Requests</button>
    <button onclick="showDriver()" class="m3">Driver</button>
    <button onclick="showPassengerAppointment()" class="m3">Passenger</button><br>
    <button onclick="showProPage()" class="m4">Profile</button>
    <button onclick="startTour()" class="m5">Start tour</button>
    <button onclick="showTheHistory()" class="m5">History</button><br>

    <button onclick="showfrontPage(); logout();" class="m6">Log out</button>`;
    currentPage = 'meny';
    appAlert();
}
function logout()
{
    userID = null;
}
