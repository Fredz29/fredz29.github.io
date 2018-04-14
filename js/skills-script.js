
const SKILLSETS = [
    {
        name : 'javascript',
        value : 300,
        color : '002953',
        id : 'javascript-skills',
        description : 'js'
    },
    {
        name : 'html',
        value : 300,
        color : 'c7f464',
        id : 'html-skills',
        description : 'html ra ni'
    },
    {
        name : 'css',
        value : 300,
        color : 'ff6b6b',
        id : 'css-skills',
        description : 'css ra pud ni'
    },
    {
        name : 'sql',
        value : 300,
        color : '95d4f3',
        id : 'sql-skills',
        description : 'sql jud ni'
    },
    {
        name : 'others',
        value : 300,
        color : 'f1bb1b',
        id : 'other-skills',
        description : 'others ni cea'
    }
]

/**
 * function showSkillsData , display/populate graph for skills
 * @author Ftangpos
 */
function showSkillsData() {
    let otherSkillsData = {
        graphID : "other-skills",
        graphColor : "f1bb1b",
        graphValue : 300
    }

    let jsSkillsData = {
        graphID : "javascript-skills",
        graphColor : "002953",
        graphValue : 250
    }

    let htmlSkillsData = {
        graphID : "html-skills",
        graphColor : "c7f464",
        graphValue : 350
    }

    let cssSkillsData = {
        graphID : "css-skills",
        graphColor : "ff6b6b",
        graphValue : 400
    }

    let sqlSkillsData = {
        graphID : "sql-skills",
        graphColor : "95d4f3",
        graphValue : 300
    }

    displayGraph(otherSkillsData)
    displayGraph(jsSkillsData)
    displayGraph(htmlSkillsData)
    displayGraph(cssSkillsData)
    displayGraph(sqlSkillsData)

    disableShowDataBtn()
}

/**
 * function displayGraph display graphical representation of skills
 * @param arrGraphDetails
 */
function displayGraph(arrGraphDetails) {
    let baseElement  = document.getElementById(arrGraphDetails.graphID)
    let elementObj = baseElement.querySelector('.skills-graph')

    let graphColor = arrGraphDetails.graphColor
    let graphValue = arrGraphDetails.graphValue
    loadInterVal(elementObj,graphColor,graphValue)
}

/**
 * function loadInterVal initiate setinterval function for animation during graphics display
 * @param elementObj element where to append the colors
 * @param graphColor stick color on graph
 * @param graphValue stick value, indicates when the animation has to stop
 */
function loadInterVal(elementObj,graphColor, graphValue){
    let counter = 0;
    let element = '<div style="height: 1px;background-color: #'+ graphColor + '; width: 100%;">'
    let intervalID = setInterval(function (graphValue) {
        counter ++ ;
        if(counter <= graphValue){
            elementObj.insertAdjacentHTML('beforeend',element)
        }else {
            clearInterval(intervalID)
        }
    },0,graphValue)

}

/**
 * function disableShowDataBtn disable show data button
 */
function disableShowDataBtn(){
    let btn = document.getElementById("showData-btn")
    btn.setAttribute("disabled",true)
}

/**
 * function getSkillDetails display the skills details
 * @param element current element
 */
function getSkillDetails(element){
    let skillName = element.getAttribute("skill")
    if(skillName == 'javascript'){

    }else if(skillName == 'html'){

    }else if(skillName == 'css'){

    }else if(skillName == 'sql'){

    }else if(skillName == 'other'){

    }

    document.getElementById("details-skill-name").innerHTML = skillName

}
