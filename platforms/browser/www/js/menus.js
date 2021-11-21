/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

let value = 0, curPage = 1;

var app = 
{
    // Application Constructor
    initialize: function() 
    {
        this.bindEvents();
    }
};

function extra_funcs() 
{
    if (document.getElementById("spc_code").disabled == true) {
        document.getElementById("spc_code").disabled = false;
        document.getElementById("spc_code").style.opacity = 1;
        document.getElementById("spc_code").style.marginTop = "10px";
    }  
    else if (document.getElementById("spc_code").disabled == false) {
        document.getElementById("spc_code").disabled = true;
        document.getElementById("spc_code").style.opacity = 0;
        document.getElementById("spc_code").style.marginTop = "-51px";
    }
}

function enter() 
{
    if(document.getElementById("spc_code").disabled == false) 
        window.location.href = "bossmenu.html";
       
    else window.location.href = "stdmenu.html";
}

function access(value) 
{
    if (value == 0) window.location.href = "insertmenu.html";
    //else if (value == 1) window.location.href = "searchmenu.html"; incomplete
    //else if (value == 2) window.location.href = "deletemenu.html"; incomplete
    //else if (value == 3) window.location.href = "editmenu.html"; incomplete
}

function checkAdmission(value) {
    if(value == 1) 
    {
        document.getElementById("ambulatory").style.display = "block";
        document.getElementById("ambulatory").disabled = false;
        document.getElementById("transferred").style.display = "none";
        document.getElementById("transferred").disabled = true;
        document.getElementById("other").style.display = "none";
        document.getElementById("other").disabled = true;
        document.getElementById("spacer").style.marginTop = "2.2%";
    }
    else if (value == 2) 
    {
        document.getElementById("ambulatory").style.display = "none";
        document.getElementById("ambulatory").disabled = true;
        document.getElementById("transferred").style.display = "block";
        document.getElementById("transferred").disabled = false;
        document.getElementById("other").style.display = "none";
        document.getElementById("other").disabled = true;
        document.getElementById("spacer").style.marginTop = "2.2%";
    }
    else if (value == 3) 
    {
        document.getElementById("ambulatory").style.display = "none";
        document.getElementById("ambulatory").disabled = true;
        document.getElementById("transferred").style.display = "none";
        document.getElementById("transferred").disabled = true;
        document.getElementById("other").style.display = "block";
        document.getElementById("other").disabled = false;
        document.getElementById("spacer").style.marginTop = "2.2%";
    }
    else 
    {
        document.getElementById("ambulatory").style.display = "none";
        document.getElementById("ambulatory").disabled = true;
        document.getElementById("transferred").style.display = "none";
        document.getElementById("transferred").disabled = true;
        document.getElementById("other").style.display = "none";
        document.getElementById("other").disabled = true;
        document.getElementById("spacer").style.marginTop = "11.3%";
    }
}

function toNextPage() 
{
    if(curPage < 36) // Check if the last page has been reached
        curPage += 1;
    
    nextPage();
}

function nextPage() 
{
    
    if(curPage == 1) 
    {
        document.getElementById("personaldata").style.display = "grid";
        document.getElementById("hospitalization_data1").style.display = "none";
    }
    
    else if(curPage == 2) 
    {
        document.getElementById("personaldata").style.display = "none";
        document.getElementById("hospitalization_data1").style.display = "grid";
    }
    
    else if(curPage == 3) 
    {
        document.getElementById("hospitalization_data1").style.display = "none";
        document.getElementById("hospitalization_data2").style.display = "grid";
    }
    
    else if(curPage == 4) 
    {
        document.getElementById("hospitalization_data2").style.display = "none";
        document.getElementById("perspectives").style.display = "grid";
    }
    
    else if(curPage == 5) 
    {
        document.getElementById("perspectives").style.display = "none";
        document.getElementById("health_situation1_1").style.display = "grid";
    }
    
    else if(curPage == 6) 
    {
        document.getElementById("health_situation1_1").style.display = "none";
        document.getElementById("health_situation1_2").style.display = "grid";
    }
    
    else if(curPage == 7) 
    {
        document.getElementById("health_situation1_2").style.display = "none";
        document.getElementById("health_situation1_2_2").style.display = "grid";
    }
    
    else if(curPage == 8) 
    {
        document.getElementById("health_situation1_2_2").style.display = "none";
        document.getElementById("health_situation1_3").style.display = "grid";
    }
    
    else if(curPage == 9) 
    {
        document.getElementById("health_situation1_3").style.display = "none";
        document.getElementById("health_situation1_3_2").style.display = "grid";
    }
    
    else if(curPage == 10) 
    {
        document.getElementById("health_situation1_3_2").style.display = "none";
        document.getElementById("health_situation1_4").style.display = "grid";
    }
    
    else if(curPage == 11) 
    {
        document.getElementById("health_situation1_4").style.display = "none";
        document.getElementById("health_situation1_4_2").style.display = "grid";
    }
    
    else if(curPage == 12) 
    {
        document.getElementById("health_situation1_4_2").style.display = "none";
        document.getElementById("health_situation1_5").style.display = "grid";
    }
    
    else if(curPage == 13) 
    {
        document.getElementById("health_situation1_5").style.display = "none";
        document.getElementById("health_situation1_6").style.display = "grid";
    }
    
    else if(curPage == 14) 
    {
        document.getElementById("health_situation1_6").style.display = "none";
        document.getElementById("health_situation1_7").style.display = "grid";
    }
    
    else if(curPage == 15) 
    {
        document.getElementById("health_situation1_7").style.display = "none";
        document.getElementById("health_situation1_8").style.display = "grid";
    }
    
    else if(curPage == 16) 
    {
        document.getElementById("health_situation1_8").style.display = "none";
        document.getElementById("health_situation1_8_2").style.display = "grid";
    }
    
    else if(curPage == 17) 
    {
        document.getElementById("health_situation1_8_2").style.display = "none";
        document.getElementById("health_situation1_9").style.display = "grid";
    }
    
    else if(curPage == 18) 
    {
        document.getElementById("health_situation1_9").style.display = "none";
        document.getElementById("health_situation1_9_2").style.display = "grid";
    }
    
    else if(curPage == 19) 
    {
        document.getElementById("health_situation1_9_2").style.display = "none";
        document.getElementById("health_situation1_9_3").style.display = "grid";
    }
    
    else if(curPage == 20) // Stopped here with 1_10 = "grid"
    {
        document.getElementById("health_situation1_9_3").style.display = "none";
        document.getElementById("health_situation1_10").style.display = "grid";
    }
    
    else if(curPage == 21)
    {
        document.getElementById("health_situation1_10").style.display = "none";
        document.getElementById("health_situation1_10_2").style.display = "grid";

    }
    
    else if(curPage == 22)
    {
        document.getElementById("health_situation1_10_2").style.display = "none";
        document.getElementById("health_situation1_11").style.display = "grid";
    }
    
    else if(curPage == 23)
    {
        document.getElementById("health_situation1_11").style.display = "none";
        document.getElementById("health_situation1_12").style.display = "grid";
    }
    
    else if(curPage == 24)
    {
        document.getElementById("health_situation1_12").style.display = "none";
        document.getElementById("health_situation1_12_2").style.display = "grid";
    }
    
    else if(curPage == 25)
    {
        document.getElementById("health_situation1_12_2").style.display = "none";
        document.getElementById("health_situation1_13").style.display = "grid";
    }
    
    else if(curPage == 26)
    {
        document.getElementById("health_situation1_13").style.display = "none";
        document.getElementById("health_situation1_14").style.display = "grid";
    }
    
    else if(curPage == 27)
    {
        document.getElementById("health_situation1_14").style.display = "none";
        document.getElementById("health_situation2_1").style.display = "grid";
    }
    
    else if(curPage == 28)
    {
        document.getElementById("health_situation2_1").style.display = "none";
        document.getElementById("health_situation2_2").style.display = "grid";
    }
    
    else if(curPage == 29)
    {
        document.getElementById("health_situation2_2").style.display = "none";
        document.getElementById("health_situation2_3").style.display = "grid";
    }
    
    else if(curPage == 30)
    {
        document.getElementById("health_situation2_3").style.display = "none";
        document.getElementById("health_situation2_4").style.display = "grid";
    }
    
    else if(curPage == 31)
    {
        document.getElementById("health_situation2_4").style.display = "none";
        document.getElementById("health_situation2_5").style.display = "grid";
    }
    
    else if(curPage == 32)
    {
        document.getElementById("health_situation2_5").style.display = "none";
        document.getElementById("health_situation2_6").style.display = "grid";
    }
    
    else if(curPage == 33)
    {
        document.getElementById("health_situation2_6").style.display = "none";
        document.getElementById("health_situation2_7").style.display = "grid";
    }
    
    else if(curPage == 34)
    {
        document.getElementById("health_situation2_7").style.display = "none";
        document.getElementById("health_situation2_8").style.display = "grid";
    }
    
    else if(curPage == 35)
    {
        document.getElementById("health_situation2_8").style.display = "none";
        document.getElementById("health_situation3_1").style.display = "grid";
    }
    
    else if(curPage == 36)
    {
        document.getElementById("health_situation3_1").style.display = "none";
        document.getElementById("prontuary_overview").style.display = "grid";
    }
    
}

function toPrevPage() 
{
    if(curPage > 1) // Check if the first page has been reached
        curPage -= 1;

    prevPage();
}

function prevPage() 
{
    
        
    
    if(curPage == 1) 
    {
        document.getElementById("personaldata").style.display = "grid";
        document.getElementById("hospitalization_data1").style.display = "none";
    }
    
    else if(curPage == 2) 
    {
        document.getElementById("hospitalization_data1").style.display = "grid";
        document.getElementById("hospitalization_data2").style.display = "none";
    }
    
    else if(curPage == 3) 
    {
        document.getElementById("hospitalization_data2").style.display = "grid";
        document.getElementById("perspectives").style.display = "none";

    }
    
    else if(curPage == 4) 
    {
        document.getElementById("perspectives").style.display = "grid";
        document.getElementById("health_situation1_1").style.display = "none";
    }
    else if(curPage == 5) 
    {
        document.getElementById("health_situation1_1").style.display = "grid";
        document.getElementById("health_situation1_2").style.display = "none";
    }
    
    else if(curPage == 6) 
    {
        document.getElementById("health_situation1_2").style.display = "grid";
        document.getElementById("health_situation1_2_2").style.display = "none";
    }
    
    else if(curPage == 7) 
    {
        document.getElementById("health_situation1_2_2").style.display = "grid";
        document.getElementById("health_situation1_3").style.display = "none";
    }
    
    else if(curPage == 8) 
    {
        document.getElementById("health_situation1_3").style.display = "grid";
        document.getElementById("health_situation1_3_2").style.display = "none";
    }
    
    else if(curPage == 9) 
    {
        document.getElementById("health_situation1_3_2").style.display = "grid";
        document.getElementById("health_situation1_4").style.display = "none";
    }
    
    else if(curPage == 10) 
    {
        document.getElementById("health_situation1_4").style.display = "grid";
        document.getElementById("health_situation1_4_2").style.display = "none";
    }
    
    else if(curPage == 11) 
    {
        document.getElementById("health_situation1_4_2").style.display = "grid";
        document.getElementById("health_situation1_5").style.display = "none";
    }
    
    else if(curPage == 12) 
    {
        document.getElementById("health_situation1_5").style.display = "grid";
        document.getElementById("health_situation1_6").style.display = "none";
    }
    
    else if(curPage == 13) 
    {
        document.getElementById("health_situation1_6").style.display = "grid";
        document.getElementById("health_situation1_7").style.display = "none";
    }
    
    else if(curPage == 14) 
    {
        document.getElementById("health_situation1_7").style.display = "grid";
        document.getElementById("health_situation1_8").style.display = "none";
    }
    
    else if(curPage == 15) 
    {
        document.getElementById("health_situation1_8").style.display = "grid";
        document.getElementById("health_situation1_8_2").style.display = "none";
    }
    
    else if(curPage == 16) 
    {
        document.getElementById("health_situation1_8_2").style.display = "grid";
        document.getElementById("health_situation1_9").style.display = "none";
    }
    
    else if(curPage == 17) 
    {
        document.getElementById("health_situation1_9").style.display = "grid";
        document.getElementById("health_situation1_9_2").style.display = "none";
    }
    
    else if(curPage == 18) 
    {
        document.getElementById("health_situation1_9_2").style.display = "grid";
        document.getElementById("health_situation1_9_3").style.display = "none";
    }
    
    else if(curPage == 19) 
    {
        document.getElementById("health_situation1_9_3").style.display = "grid";
        document.getElementById("health_situation1_10").style.display = "none";
    }
    
    else if(curPage == 20) 
    {
        document.getElementById("health_situation1_10").style.display = "grid";
        document.getElementById("health_situation1_10_2").style.display = "none";
    }
    
    else if(curPage == 21)
    {
        document.getElementById("health_situation1_10_2").style.display = "grid";
        document.getElementById("health_situation1_11").style.display = "none";
    }
    
    else if(curPage == 22)
    {
        document.getElementById("health_situation1_11").style.display = "grid";
        document.getElementById("health_situation1_12").style.display = "none";
    }
    
    else if(curPage == 23)
    {
        document.getElementById("health_situation1_12").style.display = "grid";
        document.getElementById("health_situation1_12_2").style.display = "none";
    }
    
    else if(curPage == 24)
    {
        document.getElementById("health_situation1_12_2").style.display = "grid";
        document.getElementById("health_situation1_13").style.display = "none";
    }
    
    else if(curPage == 25)
    {
        document.getElementById("health_situation1_13").style.display = "grid";
        document.getElementById("health_situation1_14").style.display = "none";
    }
    
    else if(curPage == 26)
    {
        document.getElementById("health_situation1_14").style.display = "grid";
        document.getElementById("health_situation2_1").style.display = "none";
    }
    
    else if(curPage == 27)
    {
        document.getElementById("health_situation2_1").style.display = "grid";
        document.getElementById("health_situation2_2").style.display = "none";
    }
    
    else if(curPage == 28)
    {
        document.getElementById("health_situation2_2").style.display = "grid";
        document.getElementById("health_situation2_3").style.display = "none";
    }
    
    else if(curPage == 29)
    {
        document.getElementById("health_situation2_3").style.display = "grid";
        document.getElementById("health_situation2_4").style.display = "none";
    }
    
    else if(curPage == 30)
    {
        document.getElementById("health_situation2_4").style.display = "grid";
        document.getElementById("health_situation2_5").style.display = "none";
    }
    
    else if(curPage == 31)
    {
        document.getElementById("health_situation2_5").style.display = "grid";
        document.getElementById("health_situation2_6").style.display = "none";
    }
    
    else if(curPage == 32)
    {
        document.getElementById("health_situation2_6").style.display = "grid";
        document.getElementById("health_situation2_7").style.display = "none";
    }
    
    else if(curPage == 33)
    {
        document.getElementById("health_situation2_7").style.display = "grid";
        document.getElementById("health_situation2_8").style.display = "none";
    }
    
    else if(curPage == 34)
    {
        document.getElementById("health_situation2_8").style.display = "grid";
        document.getElementById("health_situation3_1").style.display = "none";
    }
    
    else if(curPage == 35)
    {
        document.getElementById("health_situation3_1").style.display = "grid";
        document.getElementById("prontuary_overview").style.display = "none";
    }
    
    else if(curPage == 36)
    {
        document.getElementById("prontuary_overview").style.display = "grid";
    }
}

function checkPainObs(value) 
{
    if(value == 0) 
    {
        document.getElementById("painregion").style.display = "none";
        document.getElementById("painspecs").style.display = "none";
        document.getElementById("spacer5").style.marginTop = "37.6%";
    }
    else if(value == 1) 
    {
        document.getElementById("painregion").style.display = "block";
        document.getElementById("painspecs").style.display = "block";
        document.getElementById("spacer5").style.marginTop = "18.2%";
    }
}

function checkSmoker()
{
    if(document.getElementsByName("smokercheckbox").valueOf == "Sim") 
    {
        document.getElementById("smoker").style.display = "none";
        document.getElementById("smoker2").style.display = "none";
        document.getElementById("smoker3").style.display = "none";
        document.getElementById("spacer8").style.marginTop = "11%";
        document.getElementsByName("smokercheckbox").valueOf = "Nao";
    }
    else 
    {
        document.getElementById("smoker").style.display = "block";
        document.getElementById("smoker2").style.display = "block";
        document.getElementById("smoker3").style.display = "block";
        document.getElementById("spacer8").style.marginTop = "1.3%";
        document.getElementsByName("smokercheckbox").valueOf = "Sim";
    }
}

function checkSkin(value)
{
    if(value === 1) 
    {
        document.getElementById("skincheck1").style.display = "block";
        document.getElementById("skincheck2").style.display = "none";
        document.getElementById("skincheck3").style.display = "none";
        document.getElementById("spacer10").style.marginTop = "8.4%";
    }
    else if(value === 2)
    {
        document.getElementById("skincheck1").style.display = "none";
        document.getElementById("skincheck2").style.display = "block";
        document.getElementById("skincheck3").style.display = "none";
        document.getElementById("spacer10").style.marginTop = "8.4%";
    }
    else if(value === 3)
    {
        document.getElementById("skincheck1").style.display = "none";
        document.getElementById("skincheck2").style.display = "none";
        document.getElementById("skincheck3").style.display = "block";
        document.getElementById("spacer10").style.marginTop = "8.4%";
    }
    else 
    {
        document.getElementById("skincheck1").style.display = "none";
        document.getElementById("skincheck2").style.display = "none";
        document.getElementById("skincheck3").style.display = "none";
        document.getElementById("spacer10").style.marginTop = "23%";
    }
}

function checkEdema(value)
{
    if(value === 1) 
    {
        document.getElementById("edemalocaltxt").style.display = "block";
        document.getElementById("spacer13").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("edemalocaltxt").style.display = "none";
        document.getElementById("spacer13").style.marginTop = "14.8%";
    }
}

function checkHydro(value)
{
    if(value === 1) 
    {
        document.getElementById("waterrestrictiondesc").style.display = "block";
        document.getElementById("spacer14").style.marginTop = "1.8%";
    }
    else 
    {
        document.getElementById("waterrestrictiondesc").style.display = "none";
        document.getElementById("spacer14").style.marginTop = "16.6%";
    }
}

function checkOstomy(value)
{
    if(value === 1) 
    {
        document.getElementById("ostomydesc").style.display = "block";
        document.getElementById("spacer16").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("ostomydesc").style.display = "none";
        document.getElementById("spacer16").style.marginTop = "14.8%";
    }
}

function checkDental(value)
{
    if(value === 1) 
    {
        document.getElementById("dentalprostdesc").style.display = "block";
        document.getElementById("spacer17").style.marginTop = "0.8%";
    }
    else 
    {
        document.getElementById("dentalprostdesc").style.display = "none";
        document.getElementById("spacer17").style.marginTop = "15.6%";
    }
}

function checkLax(value)
{
    if(value === 1) 
    {
        document.getElementById("laxusedesc").style.display = "block";
        document.getElementById("spacer19").style.marginTop = "12.6%";
    }
    else 
    {
        document.getElementById("laxusedesc").style.display = "none";
        document.getElementById("spacer19").style.marginTop = "27.4%";
    }
}

function checkVesSound(value)
{
    if(value === 1) 
    {
        document.getElementById("vessounddesc").style.display = "block";
        document.getElementById("spacer20").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("vessounddesc").style.display = "none";
        document.getElementById("spacer20").style.marginTop = "14.8%";
    }
}

function checkAbPain(value)
{
    if(value === 1) 
    {
        document.getElementById("abpaindesc").style.display = "block";
        document.getElementById("spacer21").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("abpaindesc").style.display = "none";
        document.getElementById("spacer21").style.marginTop = "14.8%";
    }
}

function checkExFreq(value)
{
    if(value === 1) 
    {
        document.getElementById("exfreqdesc").style.display = "block";
        document.getElementById("spacer22").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("exfreqdesc").style.display = "none";
        document.getElementById("spacer22").style.marginTop = "14.8%";
    }
}

function checkExPain(value)
{
    if(value === 1) 
    {
        document.getElementById("expaindesc").style.display = "block";
        document.getElementById("spacer23").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("expaindesc").style.display = "none";
        document.getElementById("spacer23").style.marginTop = "14.8%";
    }
}

function checkSleep(value)
{
    if(value === 1) 
    {
        document.getElementById("sleepproblemdesc").style.display = "block";
        document.getElementById("spacer26").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("sleepproblemdesc").style.display = "none";
        document.getElementById("spacer26").style.marginTop = "9.8%";
    }
}

function checkSleepPill(value)
{
    if(value === 1) 
    {
        document.getElementById("sleeppilldesc").style.display = "block";
        document.getElementById("spacer27").style.marginTop = "0.8%";
    }
    else 
    {
        document.getElementById("sleeppilldesc").style.display = "none";
        document.getElementById("spacer27").style.marginTop = "10.6%";
    }
}

function checkCarie(value)
{
    if(value === 1) 
    {
        document.getElementById("cariedesc").style.display = "block";
        document.getElementById("spacer28").style.marginTop = "2%";
    }
    else 
    {
        document.getElementById("cariedesc").style.display = "none";
        document.getElementById("spacer28").style.marginTop = "16.8%";
    }
}

function checkCleanDependency(value)
{
    if(value === 1) 
    {
        document.getElementById("cleandependencydesc").style.display = "block";
        document.getElementById("spacer29").style.marginTop = "37%";
    }
    else 
    {
        document.getElementById("cleandependencydesc").style.display = "none";
        document.getElementById("spacer29").style.marginTop = "51.8%";
    }
}

function checkSecurity(value)
{
    if(value === 1) 
    {
        document.getElementById("securitydesc").style.display = "block";
        document.getElementById("spacer30").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("securitydesc").style.display = "none";
        document.getElementById("spacer30").style.marginTop = "14.8%";
    }
}

function checkIsolation(value)
{
    if(value === 1) 
    {
        document.getElementById("isolationdesc").style.display = "block";
        document.getElementById("spacer31").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("isolationdesc").style.display = "none";
        document.getElementById("spacer31").style.marginTop = "12.8%";
    }
}

function checkSpeech(value)
{
    if(value === 1) 
    {
        document.getElementById("speechdisturbdesc").style.display = "block";
        document.getElementById("spacer33").style.marginTop = "10%";
    }
    else 
    {
        document.getElementById("speechdisturbdesc").style.display = "none";
        document.getElementById("spacer33").style.marginTop = "24.8%";
    }
}

function checkHealthEd(value)
{
    if(value === 1) 
    {
        document.getElementById("healtheddesc").style.display = "block";
        document.getElementById("spacer40").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("healtheddesc").style.display = "none";
        document.getElementById("spacer40").style.marginTop = "14.8%";
    }
}

function checkSpiritual(value)
{
    if(value === 1) 
    {
        document.getElementById("spiritualdesc").style.display = "block";
        document.getElementById("spacer42").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("spiritualdesc").style.display = "none";
        document.getElementById("spacer42").style.marginTop = "14.8%";
    }
}

function checkSpiritualPresence(value)
{
    if(value === 1) 
    {
        document.getElementById("spiritpresdesc").style.display = "block";
        document.getElementById("spacer43").style.marginTop = "0%";
    }
    else 
    {
        document.getElementById("spiritpresdesc").style.display = "none";
        document.getElementById("spacer43").style.marginTop = "14.8%";
    }
}