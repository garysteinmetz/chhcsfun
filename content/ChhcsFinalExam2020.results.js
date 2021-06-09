
function isCompositeScoreHighEnoughForLeaderBoard(satMathScore, satVerbalScore) {
    return (satMathScore + satVerbalScore) >= 1000;
}

function getCertificateIssuingInstitution(satMathScore, satVerbalScore) {
    var outValue = "Camden County College";
    var compositeSatScore = satMathScore + satVerbalScore;
    if (compositeSatScore > 1300) {
        outValue = "Rutgers University - New Brunswick";
    } else if (compositeSatScore > 1200) {
        outValue = "Rowan University";
    }
    return outValue;
}