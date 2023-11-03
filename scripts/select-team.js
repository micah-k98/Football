"use strict"

function getAllFootballTeams()
{
    return [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
       ];
}

window.onload = function()
{
    // trigger the changes using onclick event
    // const selectButton = document.getElementById("selectButton");
    // selectButton.onclick = selectButtonClicked;

    // or use the onsubmit event for the form
    const theForm = document.getElementById("theForm");
    theForm.onsubmit = selectButtonClicked;

    // or the onchange event for select element
    // document.getElementById("footballTeamList").onchange = selectButtonClicked;
    
    populateTeam();
}

function selectButtonClicked(event)
{
    event.preventDefault();

    // get the selected team code
    const teamCode = document.getElementById("footballTeamList").value;

    // compare the selected team code with the list of teams and get the team name
    // selectedTeam will be an array
    const selectedTeam = getSelectedTeam(teamCode);

    displayOutput(selectedTeam);
}

function getSelectedTeam(teamCode)
{
    // get the array/values for the list of teams
    const teamList = getAllFootballTeams();

    for (let team of teamList)
    {
        if (team.code == teamCode) return team;
    }
}

function populateTeam()
{
    const footballTeamList = document.getElementById("footballTeamList"); 
    const teamList = getAllFootballTeams();
    
    for (let team of teamList)
    {
        const option = new Option(team.name, team.code);
        footballTeamList.appendChild(option);
    }
}

function displayOutput(selectedTeam)
{
    if (selectedTeam == undefined)
    {
        document.getElementById("code").textContent = "";
        document.getElementById("footballTeam").textContent = "";
        document.getElementById("plays").textContent = "";
        document.getElementById("teamName").textContent = "";
        document.getElementById("state").textContent = "";
        document.getElementById("message").hidden = true;
    }
    else
    {
        document.getElementById("code").textContent = selectedTeam.code;
        document.getElementById("footballTeam").textContent = selectedTeam.name;
        document.getElementById("plays").textContent = selectedTeam.plays;
        document.getElementById("teamName").textContent = selectedTeam.name;
        document.getElementById("state").textContent = selectedTeam.plays;
        document.getElementById("message").hidden = false;
    }
}




