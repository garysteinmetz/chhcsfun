//
var ChhcsFinalExam2020Context;
var ChhcsFinalExam2020 = {
  title: "CHHCS - Web Applications and Cloud Computer - Final Exam for School Year 2020-2021",
  sections: [],
  answerKey: {}
};
var satMath = {
  title: "SAT Math",
  parts: []
};
var satVerbal = {
  title: "SAT Verbal",
  parts: []
}
ChhcsFinalExam2020.sections.push(satMath);
ChhcsFinalExam2020.sections.push(satVerbal);
//
function getFinalExamAnswerKey() {
  return JSON.parse(JSON.stringify(ChhcsFinalExam2020.answerKey));
}
function uploadFinalExamWipResults() {
  sendData('app11', JSON.stringify(scoreFinalExam()), null);
}
function scoreFinalExam() {
  var finalScore = {};
  finalScore.answerKey = getFinalExamAnswerKey();
  finalScore.sectionScores = {};
  //finalScore.compositeScore = 0;
  //
  var sections = Object.keys(finalScore.answerKey);
  for (var i = 0; i < sections.length; i++) {
    var sectionScore = 0;
    var nextSectionName = sections[i];//finalScore.answerKey[sections[i]];
    //if (!finalScore.sectionScores[nextSectionName]) {
    //  finalScore.sectionScores[nextSectionName] = {};
    //}
    console.log("nextSectionName");
    console.log(nextSectionName);
    var questions = Object.keys(finalScore.answerKey[nextSectionName]);
    for (var j = 0; j < questions.length; j++) {
      var nextQuestion = finalScore.answerKey[nextSectionName][questions[j]];
      console.log("nextSectionName - " + nextSectionName + ", nextQuestion - " + questions[j] + ", nextQuestion - " + nextQuestion.optionCount);
      var radioValue = $("input[name='" + questions[j] + "']:checked").val();
      console.log("radioValue = " + radioValue);
      if (radioValue) {
        nextQuestion.submittedAnswer = radioValue;
        if (radioValue === questions[j]) {
          sectionScore++;
        } else {
          sectionScore = sectionScore - (1.0/nextQuestion.optionCount);
        }
      }
    }
    //
    sectionScore = 200 + ((600.0/questions.length)*sectionScore);
    finalScore.sectionScores[nextSectionName] = sectionScore;
  }
  //
  return finalScore;
}
function addToFinalExamAnswerKey(section, correctAnswerHash, optionCount) {
  if (!ChhcsFinalExam2020.answerKey[section]) {
    ChhcsFinalExam2020.answerKey[section] = {};
  }
  var obj = {};
  (ChhcsFinalExam2020.answerKey[section])[correctAnswerHash] = obj;
  obj.optionCount = optionCount;
}
//
function addPart(section, preamble, questions) {
  var part = {
    preamble: preamble,
    questions: questions
  };
  section.parts.push(part);
}
function addPartToMath(preamble, questions) {
  addPart(satMath, preamble, questions);
}
function addPartToVerbal(preamble, questions) {
  addPart(satVerbal, preamble, questions);
}
function addSingleQuestionToMath(preamble, template, candidateAnswers) {
  var singleQuestion = createSingleQuestion(template, candidateAnswers);
  addPartToMath(preamble, [singleQuestion]);
}
function addSingleQuestionToVerbal(preamble, template, candidateAnswers) {
  var singleQuestion = createSingleQuestion(template, candidateAnswers);
  addPartToVerbal(preamble, [singleQuestion]);
}
function createSingleQuestion(template, candidateAnswers) {
  return {template: template, candidateAnswers: candidateAnswers};
}
function createPreamble(reference, body) {
  return {reference: reference, body: body};
}
//
function getExamTitle() {
  return ChhcsFinalExam2020.title;
}
function getSectionCount() {
  return ChhcsFinalExam2020.sections.length;
}
function getSection(index) {
  return ChhcsFinalExam2020.sections[index];
}
function getSectionTitle(section) {
  return section.title;
}
function getPartCount(section) {
  return section.parts.length;
}
function getPart(section, index) {
  return section.parts[index];
}
function getPartPreamble(part) {
  return part.preamble;
}
function getQuestions(part) {
  return part.questions;
}
function getQuestionCount(questions) {
  return questions.length;
}
function getQuestion(questions, index) {
  return questions[index];
}
function getTemplate(question) {
  return question.template;
}
function getCandidateAnswers(question) {
  return question.candidateAnswers;
}
//
function getSectionAbbreviation(value) {
  var outValue = "";
  var parts = value.split(" ");
  for (var i = 0; i < parts.length; i++) {
    var nextPart = (parts[i]).toLowerCase();
    if (nextPart.length > 0) {
      outValue = outValue + nextPart.substring(0, 1).toUpperCase();
    }
  }
  return outValue;
}
function toLowerCamelCase(value) {
  var outValue = "";
  var parts = value.split(" ");
  for (var i = 0; i < parts.length; i++) {
    var nextPart = (parts[i]).toLowerCase();
    if (nextPart.length > 0) {
      if (i > 0) {
        outValue = outValue + nextPart.substring(0, 1).toUpperCase() + nextPart.substring(1);
      } else {
        outValue = outValue + nextPart;
      }
    }
  }
  return outValue;
}
//
function formatRightAnswer(template, candidateAnswerZero) {
  for (var i = 0; i < candidateAnswerZero.length; i++) {
    template = template.replace("%s", candidateAnswerZero[i]);
  }
  return template;
}
function formatRightQuestion(template, length) {
  for (var i = 0; i < length; i++) {
    template = template.replace("%s", "???");
  }
  return template;
}
function calculateQuestionAnswerHash(template, candidateAnswer) {
  var grandHash = "";
  var hash = sha256.create();
  hash.update(template);
  grandHash = grandHash + hash.hex();
  for (var i = 0; i < candidateAnswer.length; i++) {
    hash = sha256.create();
    hash.update(candidateAnswer[i]);
    grandHash = grandHash + "|" + hash.hex();
  }
  hash = sha256.create();
  hash.update(grandHash);
  return hash.hex();
}
function constructQuestion(sectionId, question, preamble, sectionAbbreviation, currentQuestion) {
  if (preamble) {
    constructPartPreamble(sectionId, preamble, sectionAbbreviation, currentQuestion, currentQuestion);
  }
  //
  var template = getTemplate(question);
  var sectionElement = $('#' + sectionId);
  var div = document.createElement( "div" );
  $(sectionElement).append(div);
  $(div).addClass("question");
  var candidateAnswers = getCandidateAnswers(question);
  if (isFinalExamActive()) {
    //
    var correctHash = calculateQuestionAnswerHash(template, candidateAnswers[0]);
    //
    addToFinalExamAnswerKey(sectionAbbreviation, correctHash, candidateAnswers.length);
    //
    $(div).text(sectionAbbreviation + "." + currentQuestion + " "
      + formatRightQuestion(template, (candidateAnswers[0]).length));
    //
    candidateAnswers = randomizeArray(candidateAnswers);
    for (var i = 0; i < candidateAnswers.length; i++) {
      var nextCandidateAnswer = candidateAnswers[i];
      var answerHash = calculateQuestionAnswerHash(template, nextCandidateAnswer);
      //
      var br = document.createElement( "br" );
      $(div).append(br);
      //
      var radioButton = document.createElement( "input" );
      $(radioButton).attr("type", "radio");
      $(radioButton).attr("name", correctHash);
      $(radioButton).attr("value", answerHash);
      if (!isReadOnlyShowResultsMode()) {
        $(radioButton).change(function() {uploadFinalExamWipResults();});
      } else {
        $(radioButton).attr("disabled", true);
      }
      $(div).append(radioButton);
      //
      var span = document.createElement( "span" );
      if (answerHash === correctHash) {
        $(span).css('color', 'green');
      }
      $(div).append(span);
      var formattedCandidateAnswer = "";
      //console.log("Checking - " + formatRightQuestion(template, (candidateAnswers[0]).length));
      for (var j = 0; j < nextCandidateAnswer.length; j++) {
        formattedCandidateAnswer = formattedCandidateAnswer + " (";
        formattedCandidateAnswer = formattedCandidateAnswer + nextCandidateAnswer[j];
        formattedCandidateAnswer = formattedCandidateAnswer + ")";
      }
      $(span).text(formattedCandidateAnswer);
    }
  } else {
    $(div).text(sectionAbbreviation + "." + currentQuestion + " "
      + formatRightAnswer(template, candidateAnswers[0]));
  }
}
function constructPartPreamble(sectionId, preamble, sectionAbbreviation, startQuestion, endQuestion) {
  if (preamble) {
    var reference = preamble.reference;
    var body = preamble.body;
    var showReferences = !isFinalExamActive() || isReadOnlyShowResultsMode();
    var compositePreamble = ((reference && showReferences) ? reference : []).concat((body ? body : []));
    var sectionElement = $('#' + sectionId);
    //
    var preambleHeader = document.createElement( "div" );
    $(preambleHeader).addClass("preambleHeader");
    if (startQuestion == endQuestion) {
      $(preambleHeader).text("Consider the following information for question "
        + sectionAbbreviation + "." + startQuestion + " -");
    } else {
      $(preambleHeader).text("Consider the following information for questions "
        + sectionAbbreviation + "." + startQuestion + " to " + sectionAbbreviation + "." + endQuestion + " -");
    }
    $(sectionElement).append(preambleHeader);
    //
    var div = document.createElement( "div" );
    $(div).addClass("preamble");
    $(sectionElement).append(div);
    //
    var pre = document.createElement( "pre" );
    $(div).append(pre);
    var preambleText = "";
    for (var i = 0; i < compositePreamble.length; i++) {
      if (i > 0) {
        preambleText = preambleText + "\n";
      }
      preambleText = preambleText + compositePreamble[i];
    }
    $(pre).addClass("preamble");
    $(pre).text(preambleText);
  }
}
function constructPart(sectionId, part, sectionAbbreviation, processedQuestionCount) {
  var questions = getQuestions(part);
  if (getQuestionCount(questions) > 1) {
    constructPartPreamble(sectionId, getPartPreamble(part), sectionAbbreviation,
      processedQuestionCount + 1, processedQuestionCount + getQuestionCount(questions));
    for (var i = 0; i < getQuestionCount(questions); i++) {
      constructQuestion(sectionId, getQuestion(questions, i), null,
        sectionAbbreviation, processedQuestionCount + 1 + i);
    }
  } else if (getQuestionCount(questions) == 1) {
    constructQuestion(sectionId, getQuestion(questions, 0), getPartPreamble(part),
      sectionAbbreviation, processedQuestionCount + 1);
  } else {
    //do nothing
  }
}
function constructSection(section) {
  //
  //console.log("Lodash - " + _);
  //console.log(Object.keys(_));
  //console.log("Lodash - " + _.camelCase('Foo Bar'));
  //var sectionTitleId = _.camelCase(getSectionTitle(section));
  //
  var finalExam = $("#finalExamInner");
  var div = document.createElement( "div" );
  var h2 = document.createElement( "h2" );
  $(finalExam).append(div);
  //$(div).attr("id", "finalExam");
  var title = getSectionTitle(section);
  var sectionAbbreviation = getSectionAbbreviation(title);
  $(div).attr("id", toLowerCamelCase(title));
  $(div).append(h2);
  $(h2).text(title);
  var processedQuestionCount = 0;
  for (var i = 0; i < getPartCount(section); i++) {
    var part = getPart(section, i);
    constructPart(toLowerCamelCase(title), part, sectionAbbreviation, processedQuestionCount);
    var questions = getQuestions(part);
    processedQuestionCount = processedQuestionCount + getQuestionCount(questions);
  }
}
function isFinalExamActive() {
    return (ChhcsFinalExam2020Context.active === true);
}
function getFinalExamEndTime() {
    return ChhcsFinalExam2020Context.endTime;
}
function displayFinalExamMessage(message) {
    $("#finalExamMessageInner").text(message);
}
function isFinalExamTimeUp() {
    return (new Date()).getTime() > ChhcsFinalExam2020Context.endTime;
}
function isReadOnlyShowResultsMode() {
    return ChhcsFinalExam2020Context.readOnlyShowResultsMode;
}
function setFinalExamShowField(value) {
    ChhcsFinalExam2020Context.showField = value;
}
function getFinalExamShowField() {
    return ChhcsFinalExam2020Context.showField;
}
function updateFinalExamShowField() {
    if (getFinalExamShowField()) {
        $("#finalExamInner").css("display", "block");
    } else {
        $("#finalExamInner").css("display", "none");
    }
}
function constructFinalExam(finalExamContext) {
  ChhcsFinalExam2020Context = finalExamContext;
  setFinalExamShowField(false);
  //
  //
  var div = document.createElement( "div" );
  $(div).attr("id", "finalExam");
  $(document.body).append(div);
  //
  var h1 = document.createElement( "h1" );
  $(div).append(h1);
  $(h1).text(getExamTitle());
  //
  var messageDiv = document.createElement( "div" );
  $(div).append(messageDiv);
  $(messageDiv).attr("id", "finalExamMessage");
  var messageDivInner = document.createElement( "div" );
  $(messageDiv).append(messageDivInner);
  //
  var userPane = document.createElement( "div" );
  $(messageDivInner).append(userPane);
  $(userPane).attr("id", "user_pane");
  //generateLoginDomStructure("user_pane");
  //
  var messageDivInnerH2 = document.createElement( "h2" );
  $(messageDivInner).append(messageDivInnerH2);
  $(messageDivInnerH2).attr("id", "finalExamMessageInner");
  //$(messageDivInnerH2).text('abc');
  //displayFinalExamMessage("abc");
  //
  var innerDiv = document.createElement( "div" );
  $(div).append(innerDiv);
  $(innerDiv).attr("id", "finalExamInner");
  updateFinalExamShowField();
  //var div = $(document.body).append("<div/>");
  //var h1 = $(div).append("<h1>big</h1>");
  console.log("getSectionCount() = " + getSectionCount())
  console.log(ChhcsFinalExam2020);
  for (var i = 0; i < getSectionCount(); i++) {
    var section = getSection(i);
    constructSection(section);
  }
  //
  setInterval(renderCorrectDisplay, 10*1000);
}
function renderCorrectDisplay() {
  var outValue = true;
  if (isReadOnlyShowResultsMode()) {
    displayFinalExamMessage("The correct answer to each question is colored green.");
  } else if (isFinalExamTimeUp()) {
    outValue = false;
    setFinalExamShowField(false);
    updateFinalExamShowField();
    displayFinalExamMessage("Time's up, put your pencils down!");
    //sendData('garysteinmetz', 'chhcsfinalexam2020final', JSON.stringify(scoreFinalExam()), null);
  } else {
    displayFinalExamMessage(
      "There are " + ((ChhcsFinalExam2020Context.endTime - (new Date()).getTime())/1000) + " seconds left.");
  }
  return outValue;
}
