//
var ChhcsFinalExam2020 = {
  title: "CHHCS - Web Applications and Cloud Computer - Final Exam for School Year 2019-2020",
  sections: []
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
  $(div).text(sectionAbbreviation + "." + currentQuestion + " "
    + formatRightAnswer(template, getCandidateAnswers(question)[0]));
}
function constructPartPreamble(sectionId, preamble, sectionAbbreviation, startQuestion, endQuestion) {
  if (preamble) {
    var reference = preamble.reference;
    var body = preamble.body;
    var compositePreamble = (reference ? reference : []).concat((body ? body : []));
    console.log("ZZZ sectionId - " + sectionId);
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
    for (var i = 0; i < compositePreamble.length; i++) {
      if (i > 0) {
        var br = document.createElement( "br" );
        $(div).append(br);
      }
      var span = document.createElement( "span" );
      $(div).append(span);
      $(span).text(compositePreamble[i]);
    }
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
  var finalExam = $("#finalExam");
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
function constructFinalExam() {
  var div = document.createElement( "div" );
  var h1 = document.createElement( "h1" );
  $(document.body).append(div);
  $(div).attr("id", "finalExam");
  $(div).append(h1);
  //var div = $(document.body).append("<div/>");
  //var h1 = $(div).append("<h1>big</h1>");
  $(h1).text(getExamTitle());
  console.log("getSectionCount() = " + getSectionCount())
  console.log(ChhcsFinalExam2020);
  for (var i = 0; i < getSectionCount(); i++) {
    var section = getSection(i);
    constructSection(section);
  }
}
