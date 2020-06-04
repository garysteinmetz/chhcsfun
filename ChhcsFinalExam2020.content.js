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
//advantages of libraries
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