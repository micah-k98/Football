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
    const selectButton = document.getElementById("selectButton");
    selectButton.onclick = selectButtonClicked;

    populateTeam();
}

function selectButtonClicked(event)
{
    event.preventDefault();

    // get the selected team code
    const teamCode = document.getElementById("footballTeamList").value;

    const selectedTeam = getSelectedTeam(teamCode);

    displayOutput(selectedTeam);
}

function getSelectedTeam(teamCode)
{
    const teamList = getAllFootballTeams();

    for (let team of teamList)
    {
        if (team.code == teamCode) return team;
    }
}

function populateTeam()
{
    const footballTeamList = document.getElementById("footballTeamList");
    const footballTeam = getAllFootballTeams();
    
    for (let team of footballTeam)
    {
        const option = new Option(team.name, team.code);
        footballTeamList.appendChild(option);
    }
}

function displayOutput(selectedTeam)
{
    document.getElementById("code").textContent = selectedTeam.code;
    document.getElementById("footballTeam").textContent = selectedTeam.name;
    document.getElementById("plays").textContent = selectedTeam.plays;
}




