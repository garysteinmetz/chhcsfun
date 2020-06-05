//difference between 'console.log()' and 'alert()'
addSingleQuestionToMath(
  null,
  "%s is when a program tries to %s.",
  [
    ["Duck typing", "figure out what an object is by checking some of its characteristics"],
    ["Duck and cover", "overload an external system then disconnect from that system"],
    ["Duck dinner", "provision the maximum resources that it can"],
    ["Duck, duck, goose", "identify which component is offline"],
    ["Duck eggs", "collect integration test results"]
  ]
);
addSingleQuestionToMath(
  null,
  "For coding, programmers primarily interact with %s where each character entered from the keyboard corresponds to %s in source code files.",
  [
    ["text files", "exactly one character"],
    ["word processor files", "exactly one character"],
    ["text files", "an XML element"],
    ["word processor files", "an XML element"],
    ["word processor files", "a JSON object"]
  ]
);
addSingleQuestionToMath(
  null,
  "Commonly-used text editors for various operating systems include %s for Windows, %s for Mac, and %s for Linux/Unix.",
  [
    ["Notepad", "TextEdit", "vi"],
    ["Notepad", "vi", "TextEdit"],
    ["Word", "Pages", "LibraOffice"],
    ["PowerPoint", "Pages", "LibraOffice"],
    ["Word", "Pages", "Google Docs"]
  ]
);
addSingleQuestionToMath(
  null,
  "%s (which is an IDE which stands for %s) is an advanced text editor made especially for software engineers which has powerful features like %s.",
  [
    ["IntelliJ", "'Integrated Development Environment'", "debugging and easy integration with Git"],
    ["Notepad", "'Integrated Development Environment'", "Windows integration"],
    ["IntelliJ", "'Integrated Development Environment'", "Bitcoin mining"],
    ["Notepad", "'Isometric Debugging Environment'", "debugging and easy integration with Git"],
    ["IntelliJ", "'Isometric Debugging Environment'", "debugging and easy integration with Git"]
  ]
);
addSingleQuestionToMath(
  null,
  "A %s is a sequence of %s commands within a file that %s.",
  [
    ["shell script", "command-line", "can be conveniently run over and over"],
    ["Java file", "encryption", "is used to support the HTTPS protocol"],
    ["JSON file", "execution", "can be run from the command line"],
    ["text message", "social", "used for network graphs"],
    ["code review", "review", "reorders a pull request"]
  ]
);
addSingleQuestionToMath(
  createPreamble(null, ["Consider a shell script with just this one line in it -", "", "echo Hello World"]),
  "Running this shell script would %s. It's file extension on Windows would be %s and on Unix it would be %s.",
  [
    ["print 'Hello World' to the console", "*.bat", "*.sh"],
    ["copy message 'Hello World' to a remote server", "*.bat", "*.sh"],
    ["copy message 'Hello World' to a remote server", "*.sh", "*.bat"],
    ["confirm the value 'Hello World' in a database", "*.bat", "*.sh"],
    ["confirm the value 'Hello World' in a database", "*.sh", "*.bat"]
  ]
);
addSingleQuestionToMath(
  null,
  "The term '%s' refers to %s.",
  [
    ["whitespace", "keyboard characters like space, tab, and enter/return that fill a text file but aren't visible"],
    ["invisospace", "keyboard characters like space, tab, and enter/return that fill a text file but aren't visible"],
    ["voidspace", "unused disk space"],
    ["invisospace", "unused disk space"],
    ["whitespace", "unused disk space"]
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider a file with the contents below -",
      "",
      "<my_mind today=\"February 14\">",
      "  <!-- this is a comment and therefore ignored -->",
      "  <thoughts type=\"random\">",
      "    <thought>It's cold outside</thought>",
      "  </thoughts>",
      "  <thoughts type=\"organized\">",
      "    <thought>Go to work</thought>",
      "    <thought>Buy flowers</thought>",
      "    <thought>Take spouse out to dinner</thought>",
      "  </thoughts>",
      "  <thoughts type=\"politics\" />",
      "</my_mind>"
    ]),
  [
    createSingleQuestion(
      "This is %s which is a %s file that represents a %s data structure.",
      [
        ["XML", "text", "hierarchical"],
        ["JSON", "text", "hierarchical"],
        ["SQL", "binary", "graph"],
        ["JSON", "binary", "hierarchical"],
        ["XML", "binary", "hierarchical"]
      ]),
    createSingleQuestion(
      "The 'type' %s is assigned to each 'thoughts' %s.",
      [
        ["attribute", "tag"],
        ["tag", "attribute"],
        ["comment", "tag"],
        ["comment", "attribute"],
        ["tag", "comment"]
      ]),
     createSingleQuestion(
       "'<thoughts type=\"random\">', '<thoughts type=\"organized\">', and '<thoughts type=\"politics\" />' each contain %s, %s, and %s elements, respectively.",
       [
         ["1", "3", "0"],
         ["1", "3", "infinite"],
         ["0", "0", "0"],
         ["1", "3", "undefined"],
         ["1", "3", "1"]
       ]),
     createSingleQuestion(
       "Overall, a good explanation of what this document represents is your %s on Valentine's Day (February 14) - %s.",
       [
         ["thoughts", "you notice how cold the day is, go to work then celebrate with your spouse without any thought of politics"],
         ["thoughts", "your mind is clear"],
         ["family", "you miss being with them"],
         ["thoughts", "notice how cold the day is, go to work then celebrate with your spouse some thought of politics"],
         ["thoughts", "you're mostly thinking about politics"]
       ])
  ]
);
addSingleQuestionToMath(
  null,
  "HTML files, which are used for %s, are a lot like %s files but in HTML %s like 'table' always mean the same thing.",
  [
    ["web pages", "XML", "tags"],
    ["databases", "CSV", "attributes"],
    ["configurations", "property", "properties"],
    ["invisospace", "unused disk space"],
    ["whitespace", "unused disk space"]
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider an HTML file with the contents below -",
      "",
      "<html>",
      "  <head>",
      "    <script>",
      "      alert('Hello World!');",
      "    </script>",
      "    <script>",
      "      alert('Hello World Again!');",
      "    </script>",
      "  </head>",
      "  <body>",
      "    Wow, those 'alert' commands are annoying!",
      "  </body>",
      "</html>"
    ]),
  [
     createSingleQuestion(
       "A well-formed HTML page will have '%s' as its root element while styling and JavaScipt functions will generally be defined within the '%s' element while the visible components of the page will be embedded in the '%s' element.",
       [
         ["html", "head", "body"],
         ["html", "script", "body"],
         ["xhtml", "script", "div"],
         ["xhtml", "head", "body"],
         ["xhtml", "script", "div"]
       ]),
     createSingleQuestion(
       "A Production web page generally %s use 'alert' commands because they %s.",
       [
         ["does not", "create generic and annoying pop-up messages"],
         ["does", "informative"],
         ["does not", "require an encryption file"],
         ["does", "provide valuable troubleshooting information"],
         ["does", "they track the user's actions with cookies"]
       ]),
     createSingleQuestion(
       "The hierarchical arrangement of %s on a web page is referred to as the %s.",
       [
         ["elements", "DOM (Document Object Model)"],
         ["stylings", "SHA (Styling Hierarchical Arrangement)"],
         ["alerts", "AR (Alert Repository)"],
         ["scripts", "AC (Action Dynamic)"],
         ["tables", "TG (Table Grid)"]
       ])
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider an HTML file with the contents below -",
      "",
      "<html>",
      "  <head>",
      "    <style>",
      "      p {",
      "        font-size: 18pt;",
      "      }",
      "      p.blue_text {",
      "        color: blue;",
      "      }",
      "      p#C {",
      "        font-style: italic;",
      "      }",
      "    </style>",
      "  </head>",
      "  <body>",
      "    <p id=\"A\">All paragraphs have large text</p>",
      "    <p id=\"B\" class=\"blue_text\">Some paragraphs have blue text</p>",
      "    <p id=\"C\" class=\"blue_text\">Just this paragraph has italicized text</p>",
      "  </body>",
      "</html>"
    ]),
  [
    createSingleQuestion(
      "The contents written within 'style' tags are written in %s language.",
      [
        ["CSS (Cascading Style Sheet)"],
        ["JavaScript"],
        ["SO (Styling Overdraft)"],
        ["FT (Font Transform)"],
        ["HA (HTML Arrangement)"]
      ]),
    createSingleQuestion(
      "For an HTML element, the value of its 'id' attribute %s.",
      [
        ["shouldn't be shared by any other element on the web page"],
        ["should be shared by other elements on the web page"],
        ["should always be a number"],
        ["must be in hexadecimal"],
        ["should be encrypted"]
      ]),
    createSingleQuestion(
      "The 'p.blue_text' declaration means that all 'p' tags %s will display their text in blue.",
      [
        ["with 'class=\"blue_text\"'"],
        ["without 'class=\"blue_text\"'"],
        ["with 'class=\"blue_text\"' but without an 'id' attribute"],
        ["with 'id' attribute equaling 'A'"],
        ["without exception"]
      ])
  ]
);
addSingleQuestionToMath(
  null,
  "For UI web developers, the '%s' tag is preferable to the '%s' tag because the '%s' tag %s.",
  [
    ["div", "table", "div", "allows greater styling flexibility, including having different web page layouts for laptops and mobile devices"],
    ["table", "div", "table", "allows greater styling flexibility, including having different web page layouts for laptops and mobile devices"],
    ["div", "table", "div", "can make AJAX calls but the 'table' tag can't"],
    ["table", "div", "table", "has been used by web developers for a longer time"],
    ["table", "div", "table", "has a very rigid layout"]
  ]
);
addSingleQuestionToMath(
  null,
  "The '%s', '%s', and '%s' tags are used for %s, %s, and %s, respectively.",
  [
    ["span", "img", "a", "inline styling", "displaying images", "declaring hyperlinks"],
    ["span", "img", "a", "declaring hyperlinks", "displaying images", "inline styling"],
    ["hr", "img", "a", "declaring hyperlinks", "inline styling", "displaying images"],
    ["span", "hr", "a", "displaying images", "inline styling", "declaring hyperlinks"],
    ["span", "img", "hr", "inline styling", "displaying images", "declaring hyperlinks"]
  ]
);
addSingleQuestionToMath(
  null,
  "Cloud computing is renting computer capacity instead of buying and maintaining it yourself.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "Cloud computing allows a company to focus on its 'core competencies' and quickly change its computing capacity.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "AWS is Amazon's cloud computer service and, as of late 2019, its largest source of profit.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "The advantages of hosting an application in multiple AWS regions include faster response times and resiliency.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "S3 is the AWS service that acts as a cloud-based file system.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "Source code is the raw material for a project but generally doesn't include media, library, and compiled files.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "Source-code repositories allow developers on the same team to coordinate their file changes to a software project.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "Git is the distributed source-code repository, which means that all project users get a complete copy of the repository.",
  [
    []
  ]
);
addSingleQuestionToMath(
  null,
  "Git makes working on new features ('branching') and then integrating them ('merging') easy.",
  [
    []
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "@media screen and (max-width: 500px)"
    ]),
  "The above statement allows CSS to change the layout of a web page for screen widths no greater than 500 pixels.",
  [
    []
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider the following JavaScript function -",
      "",
      "function getWeatherForecast(cloudCoveragePercentage) {",
      "  if (cloudCoveragePercentage < 10) {",
      "    return \"sunny\";",
      "  } else if (cloudCoveragePercentage < 40) {",
      "    return \"partly cloudy\";",
      "  } else if (cloudCoveragePercentage < 75) {",
      "    return \"mostly cloudy\";",
      "  } else {",
      "    return \"cloudy\";",
      "  }",
      "}"
    ]),
  [
    createSingleQuestion(
      "If 'cloudCoveragePercentage' equals %s, then this function will return \"%s\".",
      [
        ["5", "sunny"],
        ["5", "mostly cloudy"],
        ["60", "sunny"],
        ["60", "cloudy"],
        ["60", "partly cloudy"]
      ]),
    createSingleQuestion(
      "If 'cloudCoveragePercentage' equals %s, then this function will return \"%s\".",
      [
        ["60", "mostly cloudy"],
        ["60", "sunny"],
        ["60", "cloudy"],
        ["5", "cloudy"],
        ["5", "partly cloudy"]
      ]),
    createSingleQuestion(
      "If 'cloudCoveragePercentage' equals %s, then this function will return \"%s\".",
      [
        ["90", "cloudy"],
        ["90", "sunny"],
        ["90", "cloudy"],
        ["35", "cloudy"],
        ["35", "sunny"]
      ])
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider the following JavaScript function -",
      "",
      "function getRandomWholeNumberUnder(range) {",
      "    return Math.floor(Math.random()*range);",
      "}"
    ]),
  [
    createSingleQuestion(
      "The function 'Math.random()' returns a random number from %s.",
      [
        ["0 up to but not including 1"],
        ["1 up to infinity"],
        ["negative infinity to infinity"],
        ["0 to infinity"],
        ["0 up to but not including 10"]
      ]),
    createSingleQuestion(
      "'Math.floor(0)', 'Math.floor(1.1)', 'Math.floor(7.99)', and 'Math.floor(8.5) will return %s, %s, %s, and %s, respectively'.",
      [
        ["0", "1", "7", "8"],
        ["0", "0", "0", "0"],
        ["0", "1", "8", "8"],
        ["0", "1", "8", "9"],
        ["0", "2", "8", "9"]
      ]),
    createSingleQuestion(
      "If 'range' has a value of 10, this function will return %s.",
      [
        ["a random whole number (no decimal) between 0 and 9"],
        ["a random whole number (no decimal) between 1 and 9"],
        ["a random decimal between 0 and up to but not including 10"],
        ["a random whole number (no decimal) between 0 and 10"],
        ["a random decimal between 0 and up to but not including 9"]
      ])
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider the following HTML file -",
      "",
      "<html>",
      "  <head>",
      "  </head>",
      "  <body>",
      "    <img id=\"p\" onclick=\"console.log('Welcome')\"/>",
      "    <div id=\"m\"/>",
      "    <script>",
      "      document.getElementById('p').src = 'https://www.si.edu/sites/default/files/historic-castle-400.jpg';",
      "      document.getElementById('m').innerHTML = 'Hello Friends!';",
      "    </script>",
      "  </body>",
      "</html>"
    ]),
  [
    createSingleQuestion(
      "The above JavaScript statements will %s and %s.",
      [
        ["display a picture of a castle", "display 'Hello Friends!' on the web page"],
        ["downloads text about a castle", "display 'Hello Friends!' on the web page"],
        ["downloads text about a castle", "open a pop-up window"],
        ["downloads text about a castle", "set the page title to 'Hello Friends!'"],
        ["display a picture of a castle", "set the page title to 'Hello Friends!'"]
      ]),
    createSingleQuestion(
      "In Chrome, clicking the mouse on the %s will display 'Welcome' %s.",
      [
        ["picture", "in Developer Tools"],
        ["text", "in a pop-up window"],
        ["text", "in the page title"],
        ["text", "just after 'Hello Friends!'"],
        ["picture", "in a pop-up window'"]
      ])
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider the following JavaScript statement -",
      "",
      "var person = {",
      "  \"name\": \"Prince Harry\",",
      "  \"hairColor\": \"red\",",
      "  \"isWorkday\": function(dayOfWeek) {",
      "    return (dayOfWeek != \"Saturday\" && dayOfWeek != \"Sunday\");",
      "  },",
      "  \"royalty\": true,",
      "  \"yearOfBirth\": 1984,",
      "  \"siblings\": [",
      "    {",
      "      \"name\": \"Prince William\"",
      "    }",
      "  ],",
      "};"
    ]),
  [
    createSingleQuestion(
      "'console.log(person.name)' + will print '%s'.",
      [
        ["Prince Harry"],
        ["red"],
        ["[string]"],
        ["undefined"],
        ["person"]
      ]),
    createSingleQuestion(
      "'console.log(\"I \" + ((person.royalty)? \"am\" : \"am not\") + \" royalty.\")' will print '%s'",
      [
        ["I am royalty."],
        ["I am not royalty."],
        ["[string]"],
        ["undefined"],
        ["true"]
      ]),
    createSingleQuestion(
      "'console.log(person.siblings.length)' will print '%s'.",
      [
        ["1"],
        ["0"],
        ["14"],
        ["4"],
        ["undefined"]
      ]),
    createSingleQuestion(
      "'console.log(person.isWorkday(\"Wednesday\"))' will print '%s'.",
      [
        ["true"],
        ["Wednesday"],
        ["Saturday"],
        ["Sunday"],
        ["undefined"]
      ])
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "Consider the following JavaScript statements -",
      "",
      "var a = /^hello/;",
      "console.log(a.test('hello there'));",
      "console.log(a.test('hi and good morning'));"
    ]),
  "The variable 'a' represents %s which is quite useful for %s, these statements will print %s.",
  [
    ["a regular expression", "pattern matching", "'true' then 'false'"],
    ["a regular expression", "pattern matching", "'false' then 'true'"],
    ["assortment", "pattern matching", "'true' twice"],
    ["assortment", "pattern matching", "'false' twice"],
    ["a regular expression", "hashing", "two hexadecimal numbers"]
  ]
);
addSingleQuestionToMath(
  null,
  "In software development, libraries are %s used because they %s.",
  [
    ["heavily", "save time, improve quality, new team members require less training"],
    ["hardly", "save time, improve quality, new team members require less training"],
    ["heavily", "software departments have an incentive to spend their budgets"],
    ["hardly", "software engineers want to have full control over all aspects of the application"],
    ["hardly", "slow down the build process"]
  ]
);
addSingleQuestionToMath(
  null,
  "While libraries %s, frameworks (like %s) %s.",
  [
    ["assist developers in getting something done", "React and Angular", "direct developers how it will be done"],
    ["make software development harder", "Lodash", "make it easier"],
    ["make software development harder", "React and Angular", "make it easier"],
    ["are hard to learn", "Lodash", "are easier to learn"],
    ["are hard to learn", "React and Angular", "are easier to learn"]
  ]
);
addSingleQuestionToMath(
  null,
  "Concerning software projects, business requirements %s while technical specifications %s.",
  [
    ["state what should be done", "how it will be done"],
    ["identify budget", "determine budget allocation"],
    ["largely ignored by everyone", "determine where coding will take place"],
    ["are written by MBAs", "are written by PhDs"],
    ["are supposed to be written after project completion", "should be approved before a project starts"]
  ]
);
addSingleQuestionToMath(
  null,
  "Wireframes provide a %s to understand %s in a proposed application.",
  [
    ["simplified picture of how a web page should look and are used", "what's important and missing"],
    ["simplified picture of how a web page should look and are used", "how to code"],
    ["tutorial", "how to code"],
    ["schedule", "time commitments"],
    ["statement of work", "budget allocation"]
  ]
);
addSingleQuestionToMath(
  null,
  "For larger software projects involving several teams, it's important that everyone %s.",
  [
    ["generally agrees about its goals and deliverables"],
    ["wears the same uniform"],
    ["went to the same school"],
    ["stops work at the same time of day"],
    ["agrees to use tabs or spaces for indentation"]
  ]
);
addSingleQuestionToMath(
  null,
  "%s are the hardware components on machines that allow %s and each one is assigned %s.",
  [
    ["Network Interface Cards (NICs)", "them to communicate over the Internet", "a 12-digit hexadecimal number"],
    ["No Intruder Cards (NICs)", "them prevent security breaches", "a 12-digit hexadecimal number"],
    ["Network Interface Cards (NICs)", "them to communicate over the Internet", "a 5-digit numbers"],
    ["No Intruder Cards (NICs)", "them prevent security breaches", "a 5-digit numbers"],
    ["No Intruder Cards (NICs)", "them prevent security breaches", "encrypted passwords"]
  ]
);
addSingleQuestionToMath(
  null,
  "Hexadecimal is a lot like decimal, %s each digit position is %s the one that proceeded it with letters %s representing numbers %s, respectively.",
  [
    ["except that", "16 times greater than ", "A, B, C, D, E, and F", "10, 11, 12, 13, 14, and 15"],
    ["except that", "12 times greater than ", "A and B", "10 and 11"],
    ["with", "still being 10 times greater than", "5, 6, 7, 8, 9, and 15", "A, B, C, D, E, and F"],
    ["except that", "8 times greater than ", "A, B, C, D, E, F, G, and H", "0, 1, 2, 3, 4, 5, 6, and 7"],
    ["except that", "14 times greater than ", "A, B, C, and D", "10, 11, 12, and 13"]
  ]
);
addSingleQuestionToMath(
  null,
  "DHCP is a protocol that assigns %s to %s.",
  [
    ["an IP address", "a NIC"],
    ["a NIC", "a computer"],
    ["a screen", "a computer"],
    ["an email address", "a user account"],
    ["a printer", "the network"]
  ]
);
addSingleQuestionToMath(
  null,
  "The command 'ipconfig -a' on Windows ('ifconfig -a' on Mac/Linux) lists %s including '%s' which is a special IP address meaning '%s'.",
  [
    ["a machine's network configuration settings", "127.0.0.1 (loopback address)", "this machine"],
    ["a machine's network configuration settings", "192.168.0.0 (loopback address)", "this machine"],
    ["a machine's network configuration settings", "192.168.0.0 (loopback address)", "network gateway"],
    ["a machine's network configuration settings", "admin.reset", "restart gateway"],
    ["directory contents", "/etc/hosts", "IP address index"]
  ]
);
addSingleQuestionToMath(
  null,
  "The command '%s google.com' will %s 'google.com'.",
  [
    ["nslookup", "print the IP address of domain name"],
    ["sendcookies", "send cookies to"],
    ["getcookies", "get cookies from"],
    ["synccookies", "both send cookies to and receive cookies from"],
    ["restrictip", "prevent access to"]
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "Consider the following diagram where a browser searches for 'weather' and the search engine then contacts the National Weather Service to get weather information to send back to the browser -",
      "",
      "Browser",
      "  -- Search 'weather' -->",
      "                       Search Engine",
      "                         -- Get weather forecast -->",
      "                                                  National Weather Service",
      "                         <--   Weather forecast   --",
      "                       Search Engine",
      "  <-- Weather HTML Page --",
      "Browser"
    ]),
  "When receiving the request from the browser, the search engine acts as a %s. When making the request to the National Weather Service, the search engine acts as a %s.",
  [
    ["server", "client"],
    ["localhost", "server"],
    ["client", "client"],
    ["client", "server"],
    ["localhost", "client"]
  ]
);
addSingleQuestionToMath(
  null,
  "The '%s' command will make %s, but won't %s.",
  [
    ["curl", "HTTP calls just like a browser", "present the responses in a format that people can interact with"],
    ["snarl", "sounds", "speak"],
    ["snarl", "new files", "delete old ones"],
    ["snarl", "files smaller", "remove content"],
    ["curl", "files smaller", "remove content"]
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider what would happen when entering in the following URL into a browser's address bar -",
      "",
      "https://www.google.com:443/search?q=best+songs+by+Hall+%26+Oates"
    ]),
  [
    createSingleQuestion(
      "The browser will use the HTTPS protocol (%s) to call the %s for 'www.google.com'.",
      [
        ["the encrypted version of HTTP", "IP address"],
        ["the unencrypted version of HTTP", "mock server"],
        ["the unencrypted version of HTTP", "gateway"],
        ["the unencrypted version of HTTP", "cloud"],
        ["the unencrypted version of HTTP", "MAC address"]
      ]),
    createSingleQuestion(
      "The ':443' part of the URL refers to the target %s which %s necessary because %s is the default %s for HTTP",
      [
        ["port", "isn't", "443", "port"],
        ["port", "is", "80", "port"],
        ["caching strategy", "is", "80", "caching strategy"],
        ["timeout setting", "isn't", "443", "timeout setting"],
        ["timeout setting", "is", "80", "timeout setting"]
      ]),
    createSingleQuestion(
      "If the '/search' %s and 'q' %s are the correct way to perform a search, this URL will search for '%s'.",
      [
        ["path", "query parameter", "best songs by Hall & Oates"],
        ["path", "query parameter", "best+songs+by+Hall+%26+Oates"],
        ["query parameter", "path", "best songs by Hall & Oates"],
        ["query parameter", "path", "best+songs+by+Hall+%26+Oates"],
        ["query parameter", "path", "best+songs+by+Hall+&+Oates"]
      ])
  ]
);
addSingleQuestionToMath(
  null,
  "The four major 'CRUD' ('%s') operations for HTTP are in order %s, with %s by far being the most common for casual browser usage.",
  [
    ["Create, Read, Update, Delete", "Post, Get, Put, and Delete", "Get"],
    ["Create, Read, Update, Delete", "Post, Get, Put, and Delete", "Put"],
    ["Curl, Rest, Undo, Dismiss", "Post, Get, Put, and Delete", "Get"],
    ["Curl, Rest, Undo, Dismiss", "Create, Read, Update, and Delete", "Delete"],
    ["Curl, Rest, Undo, Dismiss", "Create, Read, Update, and Delete", "Update"]
  ]
);
addSingleQuestionToMath(
  null,
  "After downloading the web page, if it references other internet files like media, JavaScript, and CSS, the browser will %s.",
  [
    ["immediately make individual HTTP calls to get those things"],
    ["not render the page at all (page will be blank)"],
    ["close"],
    ["present a menu of options"],
    ["open a tab"]
  ]
);
addSingleQuestionToMath(
  null,
  "Both HTTP requests and responses %s include %s.",
  [
    ["can", "headers and a body"],
    ["can", "headers but not a body"],
    ["can", "a body but not headers"],
    ["can't", "headers and a body"],
    ["can't", "text"]
  ]
);
addSingleQuestionToMath(
  null,
  "%s of '%s' and '%s' correspond to %s and %s, respectively.",
  [
    ["Mime types", "text/html", "application/json", "HTML", "JSON"],
    ["Encryption types", "text/html", "application/json", "HTML", "JSON"],
    ["Mime types", "microsoft/word", "application/json", "Word", "JavaScript"],
    ["Encryption types", "microsoft/word", "application/json", "Word", "JavaScript"],
    ["Computer types", "microsoft/word", "application/json", "Word", "JavaScript"]
  ]
);
addSingleQuestionToMath(
  null,
  "An HTTP response code from 200-299 indicates %s, with 200 meaning '%s'.",
  [
    ["Success", "OK"],
    ["Success", "Defined"],
    ["Failure", "Error"],
    ["Failure", "Rejection"],
    ["Failure", "Unauthorized"]
  ]
);
addSingleQuestionToMath(
  null,
  "An HTTP response code from 400-499 indicates %s, with 400, 401, 403, and 404 meaning '%s', '%s', '%s', and '%s', respectively.",
  [
    ["Client Error", "Bad Request", "Unauthorized", "Forbidden", "Not Found"],
    ["Server Error", "Bad Gateway", "No Response", "Busy", "Unexpected Error"],
    ["Success", "OK", "Done", "No Content", "Accepted"],
    ["Server Error", "Bad Request", "Unauthorized", "Forbidden", "Not Found"],
    ["General Error", "Bad Gateway", "No Response", "Busy", "Unexpected Error"],
  ]
);
addSingleQuestionToMath(
  null,
  "An HTTP response code from 500-599 indicates %s, with 500 meaning '%s' (%s).",
  [
    ["Server Error", "Internal Server Error", "commonly used to indicate an unexpected problem, like a software bug"],
    ["Client Error", "Bad Request", "like invalid input"],
    ["Failure", "Bad Certificate", "self-signed"],
    ["Success", "OK", "call was successful"],
    ["General Error", "Unknown Cause", "to be determined"],
  ]
);
addSingleQuestionToMath(
  null,
  "%s are a way of %s HTTP calls.",
  [
    ["Cookies", "maintaining state and session between"],
    ["Targets", "specializing"],
    ["Habits", "standardizing"],
    ["Rentals", "classifying"],
    ["Qubits", "simplifying"],
  ]
);
addSingleQuestionToMath(
  null,
  "Node.js, the %s version of JavaScript, uses 'npm' to organize projects and prevent '%s'.",
  [
    ["non-browser", "cowboy coding"],
    ["commercial", "public distribution"],
    ["Windows", "tampering"],
    ["Java", "type errors"],
    ["Unix", "vendor lock-in"],
  ]
);
addSingleQuestionToMath(
  null,
  "The 'npm install express --save' command will %s.",
  [
    ["downloads the 'express' (web server library) and indicates that the project depends on it in the 'package.json' file"],
    ["quickly completes the installation of 'npm' and saves the configuration file to repeat the installation"],
    ["uploads the 'express' library to a Maven repository"],
    ["open up a command prompt to enter JavaScript commands"],
    ["install files that improve the speed of 'npm'"],
  ]
);
//https://jsonplaceholder.typicode.com/todos/1
addPartToMath(
  createPreamble(
    null,
    [
      "Consider these contents at https://jsonplaceholder.typicode.com/todos/1 -",
      "",
      "{",
      "  \"userId\": 1,",
      "  \"id\": 1,",
      "  \"title\": \"delectus aut autem\",",
      "  \"completed\": false",
      "}",
      "",
      "Consider this jQuery statement -",
      "",
      "$(document).ready(function() {",
      "  $.get(",
      "    {",
      "      url: \"https://jsonplaceholder.typicode.com/todos/1\",",
      "      success: function(data, status) {",
      "        console.log(data.title);",
      "      }",
      "    }",
      "  );",
      "});"
    ]),
  [
    createSingleQuestion(
      "It will make %s call %s the page is downloaded.",
      [
        ["an AJAX (Asynchronous JavaScript and XML)", "after"],
        ["an AJAX (Asynchronous JavaScript and XML)", "before"],
        ["RAM (Random Access Memory)", "after"],
        ["RAM (Random Access Memory)", "before"],
        ["RAM (Random Access Memory)", "while"]
      ]),
    createSingleQuestion(
      "If the call %s, it will %s.",
      [
        ["is successful", "print 'delectus aut autem'"],
        ["is successful", "print '1'"],
        ["is successful", "print a string representation of a JSON object"],
        ["fails", "print 'delectus aut autem'"],
        ["fails", "print a string representation of a JSON object"]
      ]),
    createSingleQuestion(
      "This class of call allows a browser %s.",
      [
        ["to update a web page and send client actions to a server without reloading the whole web page"],
        ["to update a web page and send client actions to a server causing the whole web page to reload"],
        ["wait for user input"],
        ["open tabs without the user's permission"],
        ["to send client actions to a server causing the whole web page to reload"]
      ])
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "Consider the following Java program -",
      "",
      "public class sample12 {",
      "  public static void main(String[] args) {",
      "    System.out.println(\"Hello World!\");",
      "  }",
      "}"
    ]),
  "This program will %s but it highlights %s.",
  [
    ["print 'Hello World!'", "a common complaint that Java requires 'too much ceremony' to get anything done"],
    ["crash", "the robustness of Java"],
    ["fail to compile because of missing libraries", "the modularity of the Java language"],
    ["send a message to a queue", "the simplicity of Java"],
    ["hang", "the power of Java"]
  ]
);
addSingleQuestionToMath(
  null,
  "For a Spring Boot project, running the Maven command 'clean package spring-boot:repackage' will %s.",
  [
    ["create a ready-to-run 'fat JAR' containing everything necessary (including libraries) to run an application"],
    ["create a ready-to-run 'fat JAR' containing everything necessary (except libraries) to run an application"],
    ["create a specification file that other languages to use to interface with the application"],
    ["delete the application from source control"],
    ["deploy the application to a production server"]
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider these Spring Boot classes which are running on a local server with base URL http://localhost:8080 -",
      "",
      "//Class 1",
      "package com.example.demo;",
      "",
      "import org.springframework.stereotype.Service;",
      "",
      "@Service",
      "public class SuperComputer {",
      "    public int addNumbers(int numberOne, int numberTwo) {",
      "        return numberOne + numberTwo;",
      "    }",
      "}",
      "",
      "//Class 2",
      "package com.example.demo;",
      "",
      "import org.springframework.beans.factory.annotation.Autowired;",
      "import org.springframework.stereotype.Controller;",
      "import org.springframework.web.bind.annotation.GetMapping;",
      "import org.springframework.web.bind.annotation.RequestParam;",
      "import org.springframework.web.bind.annotation.ResponseBody;",
      "",
      "@Controller",
      "public class DemoController {",
      "",
      "    @Autowired",
      "    SuperComputer superComputer;",
      "",
      "    @GetMapping(\"/addNumbers\")",
      "    @ResponseBody",
      "    public String addNumbers(",
      "            @RequestParam(name = \"numberOne\") int numberOne,",
      "            @RequestParam(name = \"numberTwo\") int numberTwo) {",
      "        return \"The answer to your question is \"",
      "                + superComputer.addNumbers(numberOne, numberTwo);",
      "    }",
      "}"
    ]),
  [
    createSingleQuestion(
      "If 'http://localhost:8080/addNumbers?numberOne=5&numberTwo=2' is entered into the browser address bar, it will display %s.",
      [
        ["'The answer to your question is 7'"],
        ["nothing"],
        ["a JSON object"],
        ["an error message"],
        ["'The answer to your question is null'"]
      ]),
    createSingleQuestion(
      "The '@Autowired' annotation is an example of '%s' which has the advantages of %s.",
      [
        ["inversion of control", "clearer code and making components more interchangeable"],
        ["inversion of control", "reducing licensing fees"],
        ["inversion of control", "users in control of the system"],
        ["self-documenting code", "generating documentation and specifications for web services"],
        ["self-documenting code", "will generate the functionality of 'SuperComputer' from specifications"]
      ])
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider this class -",
      "",
      "package com.example.demo;",
      "",
      "import org.junit.jupiter.api.Assertions;",
      "import org.junit.jupiter.api.Test;",
      "import org.mockito.Mockito;",
      "",
      "import static org.mockito.ArgumentMatchers.eq;",
      "import static org.mockito.Mockito.when;",
      "",
      "public class DemoControllerTest {",
      "    @Test",
      "    public void testController() {",
      "        //",
      "        SuperComputer superComputer = Mockito.mock(SuperComputer.class);",
      "        when(superComputer.addNumbers(eq(1), eq(2))).thenReturn(3);",
      "        //",
      "        DemoController demoController = new DemoController();",
      "        demoController.superComputer = superComputer;",
      "        //",
      "        String response = demoController.addNumbers(1, 2);",
      "        Assertions.assertEquals(\"The answer to your question is 3\", response);",
      "    }",
      "}"
    ]),
  [
    createSingleQuestion(
      "This class is a %s for the %s class.",
      [
        ["unit test", "DemoController"],
        ["unit test", "SuperComputer"],
        ["live test", "DemoController"],
        ["live test", "SuperComputer"],
        ["load test", "SuperComputer"]
      ]),
    createSingleQuestion(
      "The %s class is %s.",
      [
        ["SuperComputer", "mocked (like a crash test dummy)"],
        ["DemoController", "mocked (like a crash test dummy)"],
        ["SuperComputer", "instantiated (an actual super computer is used)"],
        ["Assertions", "mocked (like a crash test dummy)"],
        ["DemoControllerTest", "mocked (like a crash test dummy)"]
      ])
  ]
);
//Verbal
addPartToVerbal(
  createPreamble(
    [
      "Reference - https://www.bloomberg.com/opinion/articles/2019-11-12/millennials-approach-middle-age-without-benefit-of-economic-boom"
    ],
    [
      "Article entitled 'Millennials on the Cusp of Middle Age Missed Their Boom' -",
      "",
      "\"...",
      "Why have so many millennials experienced failure to launch? ...",
      "...",
      "So for many aging millennials, the lifestyle of extended adolescence -- living with parents or roommates, finding dates <casually>, starting relationships and breaking up again -- <part removed>\"",
    ]),
  [
    createSingleQuestion(
      "The term 'failure to launch' means %s.",
      [
        ["a young adult that hasn't become self-sufficient yet"],
        ["a Google search that hasn't completed"],
        ["a company not matching an employees retirement contribution"],
        ["a failed production deployment"],
        ["a signed rental lease that hasn't started yet"]
      ]),
    createSingleQuestion(
      "The '<part removed>' represents '%s'",
      [
        ["is probably beginning to seem less like a never-ending party than a trap."],
        ["an improvement over previous generations."],
        ["allows them to pay off student-loan debt more quickly."],
        ["makes them the most social generation ever."],
        ["prevents them from saving more money for retirement."]
      ])
  ]
);
addSingleQuestionToVerbal(
  createPreamble(["Reference - https://www.getrichslowly.org/you-can-negotiate-anything/"], null),
  "The %s of any negotiation %s.",
  [
    ["3 components", "are power, information, and time"],
    ["2 components", "are charm and determination"],
    ["only component", "is money"],
    ["endgame", "is to make more money"],
    ["3 components", "preparation, demands, and achievement"]
  ]
);
//Rule of 72
//Einstein quote about compound interest
//vanguard investing