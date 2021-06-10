
function isLoggedIn() {
}
function getUserInfo(callback) {
    $.get(
        {
            url: "/userInfo",
            success: function(data, status) {
                if (callback) {
                    callback(data, status);
                }
            }
        }
    );
}
function generateLoginDomStructure(targetId) {
    $.get(
        {
            url: "/userInfo",
            success: function(data, status) {
                generateLoginDomStructureImpl(targetId, data);
            }
        }
    );
}
function generateLoginDomStructureImpl(targetId, userInfo) {
    var baseDiv = $("#" + targetId)
    var div = document.createElement( "div" );
    $(baseDiv).append(div);
    //
    //var userDisplayName = getCookie('userDisplayName');
    if (userInfo.isLoggedIn) {
        //console.log("ZZZ userInfo - " + JSON.stringify(userInfo));
        $(div).text("Hello " + userInfo.username + "!");
        //alert('Here');
    } else {
        //alert('There');
        var redirectUrl = "&redirect_uri=" + encodeURIComponent(window.location.origin + "/login");
        var state = "&state=" + encodeURIComponent(document.URL);
        //
        //var href = baseUrl + path + standardParams + redirectUrl + state;
        //var href = getCookie("loginUrl") + redirectUrl + state;
        var a = document.createElement( "a" );
        $(div).append(a);
        $(a).attr("href", "/login?url=" + encodeURIComponent(document.URL));
        $(a).text("Login Now");
    }
}
function getCookie(name) {
    var outValue = '';
    var re = new RegExp('[; ]' + name + '=([^\\s;]*)');
    var sMatch = (' ' + document.cookie).match(re);
    if (sMatch) {
        outValue = unescape(sMatch[1]);
    }
    return outValue;
}
function sendData(appName, appData, callback) {
    $.post(
        {
            url: "/appState/" + appName,
            data: {appData: JSON.stringify(appData)},
            success: function(data, status) {
                if (callback) {
                    callback(data, status);
                }
                //console.log("ZZZ sendData - " + status);
            }
        }
    );
}
function getData(appName, callback) {
    $.get(
        {
            url: "/appState/" + appName,
            success: function(data, status) {
                if (callback) {
                    callback(data, status);
                }
                //console.log("ZZZ sendData - " + status);
                //console.log("ZZZ data - " + JSON.stringify(data));
            }
        }
    );
}
function getRandomWholeNumberUnder(range) {
    return Math.floor(Math.random()*range);
}
function randomizeArray(input) {
    var copyOfInput = [];
    for (var i = 0; i < input.length; i++) {
        copyOfInput.push(input[i]);
    }
    var output = [];
    for (var i = 0; i < input.length; i++) {
        var nextIndex = getRandomWholeNumberUnder(copyOfInput.length);
        output.push(copyOfInput[nextIndex]);
        copyOfInput.splice(nextIndex, 1);
    }
    return output;
}
function getLoginInformation() {
}