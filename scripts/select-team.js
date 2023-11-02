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
    const selectButton = document.getElementById("selectButoon");
    // selectButton.onclick = selectButtonClicked;

    populateTeam();
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
