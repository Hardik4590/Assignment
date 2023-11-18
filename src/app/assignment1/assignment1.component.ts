import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  imageUrl: SafeResourceUrl='';

  ngOnInit(): void {
    //this.showQuestion(this.currentQuestionIndex);
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('C:\Users\HARDIK\Desktop\Academics\Sem 5\IWP\Assignment');
  }

  QnA=[
     {
        que : 'What is REST API?',
        ans1 : 'Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, simple and flexible making it more suitable for internet usage. Its used to fetch or give some information from a web service. All communication done via REST API uses only HTTP request.',
        ans2 : 'Working: A request is sent from client to server in the form of a web URL as HTTP GET or POST or PUT or DELETE request. After that, a response comes back from the server in the form of a resource which can be anything like HTML, XML, Image, or JSON. But now JSON is the most popular format being used in Web Services. ',
        ans3 : '',
        ans4 : '',
     },

     {
        que : ' What are http and https protocols? Explain in detail the following http methods.',
        ans1 : 'HTTP and HTTPS Protocols: <br> HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) are protocols used for communication between a client (typically a web browser) and a server (a web server or other resources on the internet). They define how data is transmitted over the internet and are the foundation of the World Wide Web.',
        ans2 : 'HTTP (Hypertext Transfer Protocol):<br>HTTP is the standard protocol used for transmitting data over the internet. It operates on top of the TCP/IP (Transmission Control Protocol/Internet Protocol) suite, which ensures reliable data transmission. HTTP is a text-based protocol, and it uses a client-server model, where the client sends requests, and the server responds with data.',
        ans3 : 'HTTPS (HTTP Secure):<br>HTTPS is a secure version of HTTP. It uses the same basic principles as HTTP but adds an extra layer of security through the use of SSL/TLS (Secure Sockets Layer/Transport Layer Security) encryption. This encryption ensures that data transmitted between the client and server is encrypted and cannot be easily intercepted or tampered with by malicious actors.',
     },

     {
        que :  'a. GET',
        ans1 : 'The GET method is used to request data from a specified resource. When a client (usually a web browser) sends a GET request to a server, it is asking the server to retrieve a resource identified by a URL (Uniform Resource Locator) and return it to the client. GET requests are typically used for fetching web pages, images, documents, or other types of data from a server.',
        ans2 : 'Key characteristics of the GET method:<br> 1)It is idempotent, meaning that making multiple identical GET requests will not have different effects than making a single request.',
        ans3 : '2)It should not have a request body. Data is typically included in the URL as query parameters.'
     },

     {
        que : 'b. POST',
        ans1 : 'The POST method is used to submit data to be processed to a specified resource. When a client sends a POST request to a server, it typically includes a request body that contains data to be processed by the server. POST requests are commonly used for submitting forms, uploading files, or performing actions that change the state of the server.',
        ans2 : 'Key characteristics of the POST method:<br> 1)It is not idempotent, meaning that making multiple identical POST requests may have different effects each time.',
        ans3 : '2)It can include a request body that contains data to be processed by the server.',
     },

     {
        que : 'c. PUT',
        ans1 : 'The PUT method is used to update or create a resource at a specified URL. When a client sends a PUT request to a server, it is telling the server to replace the resource at the given URL with the provided data. If the resource does not exist, it can be created. PUT requests are used to update or create resources in a idempotent manner.',
        ans2 : 'Key characteristics of the PUT method:<br>1)It is idempotent, meaning that making multiple identical PUT requests will have the same effect as making a single request.',
        ans3 : '2)It typically includes a request body that contains the new data to replace the existing resource.',
     },

     {
        que : 'd. DELETE',
        ans1 : 'The DELETE method is used to request the removal of a resource identified by a URL. When a client sends a DELETE request to a server, it instructs the server to delete the resource at the specified URL. DELETE requests are idempotent, meaning that making multiple identical DELETE requests will have the same effect as making a single request.',
        ans2 : 'Key characteristics of the DELETE method:<br> 1) It is idempotent',
        ans3 : '2)It does not typically include a request body since its focused on resource removal.',
     },

     {
        que : 'Explain the following with a component diagram (png image): 3-tier architecture',
        ans1: 'A 3-tier architecture is a common software architecture pattern used in the development of web applications and other software systems. It divides the application into three logical tiers or layers: the presentation tier, the application or logic tier, and the data tier. Each tier serves a specific purpose and communicates with the other tiers in a well-defined manner.',
        ans2: 'Presentation Tier (User Interface):This is the topmost layer that interacts directly with the end-users.Components in this tier include web browsers, mobile app interfaces, and desktop application user interfaces.It is responsible for handling user input, displaying information to users, and receiving and sending requests to the application tier.',
        ans3: 'Application Tier (Logic Tier):Also known as the business logic or application logic tier.This tier contains the core logic of the application.Components in this tier handle tasks such as processing user requests, executing business rules, and managing application workflows.Common components in this tier include application servers, web servers, and middleware.',
        ans4 : 'Data Tier (Data Storage):This is the bottommost layer responsible for managing and storing data.Components in this tier include databases, data warehouses, and data storage systems.It handles data retrieval, storage, and management, allowing the application tier to access and manipulate data.<br> <img src="assets/image.png"></img>'
     },

     {
        que : 'What are different array methods in javascript? Explain with examples',
        ans1 : '1)push(): Adds one or more elements to the end of an array and returns the new length of the array. <br> const fruits = ["apple", "banana"];<br>fruits.push("orange");<br>// fruits is now ["apple", "banana", "orange"]<br>2)pop(): Removes the last element from an array and returns that element.<br>const fruits = ["apple", "banana", "orange"];<br>const lastFruit = fruits.pop(); // "orange"<br>// fruits is now ["apple", "banana"]',
        ans2 : '3)unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.const fruits = ["banana", "orange"];<br>fruits.unshift("apple");<br>// fruits is now ["apple", "banana", "orange"]<br>4)shift(): Removes the first element from an array and returns that element.<br>const fruits = ["apple", "banana", "orange"];<br>const firstFruit = fruits.shift(); // "apple"<br>// fruits is now ["banana", "orange"]',
        ans3 : '5)concat(): Combines two or more arrays and returns a new array.<br>const fruits = ["apple", "banana"];<br>const moreFruits = ["orange", "grape"];<br>const allFruits = fruits.concat(moreFruits);<br>// allFruits is ["apple", "banana", "orange", "grape"]<br>6)join(): Joins all elements of an array into a string, optionally with a specified separator.<br>const fruits = ["apple", "banana", "orange"];<br>const fruitString = fruits.join(", "); // "apple, banana, orange"',
        ans4 : 'There are many more like slice(),forEach(),map(),filter(),reduce(),etc.',
    },

    {
        que : 'What is difference between let, var and const in javascript?',
        ans1 : 'var:<br>Variables declared with var are function-scoped, meaning they are only accessible within the function in which they are defined or globally if defined outside of any function.Var variables are hoisted, which means they are moved to the top of their containing function or global scope during the compilation phase. However, their initialization remains in place, so they can be used before they are declared but will have an initial value of undefined.var variables can be redeclared within the same scope, and their values can be changed.',
        ans2 : 'let:<br>Variables declared with let have block scope, meaning they are only accessible within the block (enclosed by curly braces) in which they are defined.let variables are also hoisted, but unlike var, they are not initialized until they are actually declared in the code. This results in a ReferenceError if you try to access them before their declaration.let variables cannot be redeclared within the same block scope, but their values can be changed.',
        ans3 : 'const:<br>Variables declared with const are also block-scoped, just like let.Unlike let, const variables cannot be reassigned after they are initialized. They are meant for declaring constants, hence the name.const variables must be initialized when declared, and you will get an error if you try to declare them without an initial value.const variables are also hoisted like let, but they are not accessible before their declaration.',
    },

    /*{
        que : 'What is AJAX? Explain with examples.',
        ans1 : 'AJAX, which stands for "Asynchronous JavaScript and XML," is a set of web development techniques that allows you to create interactive and dynamic web applications by sending and receiving data from a web server without having to reload the entire web page. AJAX leverages a combination of technologies, including JavaScript, XML (though JSON is more commonly used today), and HTTP requests, to achieve this asynchronous communication.',
    },

    {
       que: 'What is a single page application?',
       ans1: 'A Single Page Application (SPA) is a web application or website that operates within a single web page. Unlike traditional multi-page web applications, where each interaction with the website typically involves loading a new web page from the server, SPAs load a single HTML page and dynamically update the content as the user interacts with the application. This approach provides a more fluid and responsive user experience.',
       ans2: '',
    },

    {
        que : 'What is a component in angular?',
        ans1: 'In Angular, a component is one of the fundamental building blocks of an application. It is a TypeScript class that is decorated with the @Component decorator and is responsible for defining a part of the user interface (UI) and its behavior. Components are used to encapsulate specific sections or features of a web application, making it easier to manage and maintain the codebase.',
        ans2: ''
    },

    {
        que: 'Explain with syntax the following directives: a) ngFor',
        ans1: '<p><strong>ngFor</strong> is a structural directive in Angular used for iterating over a collection of items.<br>It has the following syntax:</p><pre>&lt;div *ngFor="let item of items"&gt;<br>{{ item }}<br>&lt;/div&gt;<br></pre>',
    },

    {
        que : 'b) ngIf',
        ans1: '<p><strong>ngIf</strong> is a structural directive used for conditionally rendering elements.<br>It has the following syntax:</p><pre>&lt;div *ngIf="condition"&gt;<br>Content to display when condition is true.<br>&lt;/div&gt;</pre>',
    },*/


  ];

  /*currentQuestionIndex = 0;

  questionVisibility: boolean[] = [];
  

  navigateToPrevious() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.showQuestion(this.currentQuestionIndex);
    }
  }

  navigateToNext() {
    if (this.currentQuestionIndex < this.QnA.length - 1) {
      this.currentQuestionIndex++;
      this.showQuestion(this.currentQuestionIndex);
    }
  }

  showQuestion(index: number) {
    // Set visibility for each question in the array
    this.questionVisibility = this.QnA.map((_, i) => i === index);
    
    //this.questionVisibility = this.QnA.map((_, i) => i === index ? 'qa-visible' : '');
  }*/

}
