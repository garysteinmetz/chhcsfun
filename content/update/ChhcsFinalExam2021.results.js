
function isCompositeScoreHighEnoughForLeaderBoard(satMathScore, satVerbalScore) {
    return (satMathScore + satVerbalScore) >= 1000;
}

function getCertificateIssuingInstitution(satMathScore, satVerbalScore) {
    var outValue = "Camden County College";
    var compositeSatScore = satMathScore + satVerbalScore;
    if (compositeSatScore > 1550) {
        outValue = "California Institute of Technology";
    } else if (compositeSatScore > 1500) {
        outValue = "Carnegie Mellon University";
    } else if (compositeSatScore > 1450) {
        outValue = "University of California, Berkeley";
    } else if (compositeSatScore > 1400) {
        outValue = "The University of Texas at Austin";
    } else if (compositeSatScore > 1350) {
        outValue = "Rensselaer Polytechnic Institute";
    } else if (compositeSatScore > 1300) {
        outValue = "Rutgers University - New Brunswick";
    } else if (compositeSatScore > 1250) {
        outValue = "University of Delaware";
    } else if (compositeSatScore > 1200) {
        outValue = "Rowan University";
    } else if (compositeSatScore > 1150) {
        outValue = "Kansas State University";
    } else if (compositeSatScore > 1100) {
        outValue = "Stockton University";
    } else if (compositeSatScore > 1000) {
        outValue = "Kean University";
    }
    return outValue;
}