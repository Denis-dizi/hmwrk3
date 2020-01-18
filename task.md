HM#3 - FizzBuzz page

Generate with Javascript 100 div elements within main tag
Divs should have unique id such "myid1" until "myid100"
Divs should have 4 different CSS classes depending on the following:

id number(1 to 100) divides evenly with 3 and 5 (15,30, etc)
id number(1 to 100) divides evenly with 3 ONLY (3,6,9)
id number(1 to 100) divides evenly with 5 ONLY (5,10)
id number(1 to 100) does not divide with 3 nor 5 (for example 4,7 etc)
InnerText should contain the following:
id number(1 to 100) divides evenly with 3 and 5 (15,30, etc) : "FizzBuzz"
id number(1 to 100) divides evenly with 3 ONLY (3,6,9) : "Fizz"
id number(1 to 100) divides evenly with 5 ONLY (5,10) : "Buzz"
id number(1 to 100) does not divide with 3 nor 5 (for example 4,7 etc) : 4,7 etc any number

CSS you can make as fancy or plain as you want, each div should be fixed height and width BUT should respond to resizing browser window (for example 1 column 100 rows on small mobile, 5x20 on tablet, and 10x10 on large HD screen).

BONUS:
Add 4 Controls (TextBoxes, Sliders, etc) to control:
Starting Value(default = 1)
Ending Value (default = 100)
Fizz Value (default = 3)
Buzz Value (default = 5)
Add Control(button) to Clear All the generated Divs!
Add Control(button) to Generate Divs (based on the 4 controls ABOVE)

Piemēri no iepriekšējiem kursiem:
https://akuznecovs.github.io/RCS-Project3/
https://edgarssevcovs.github.io/HW3/

Noderīgi linki:

Vanilla JS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

DOM API
https://developer.mozilla.org/en-US/docs/Web/API/Element/id
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild (especially example on how to remove ALL children)

Events (3 ways of adding them! all are acceptable for this homework, but prefer in .js):
https://developer.mozilla.org/en-US/docs/Web/Events
https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers

var izmanot JS bibliotēkas, tādas kā jQuery: https://api.jquery.com/ (arī https://www.w3schools.com/jquery/) bet Vanilla JS būtu labāk.
