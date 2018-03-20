# Notes
<h3>.net interview notes concepts </h3>
<hr />
<h3>MVC life cycle:</h3>
First the request comes from browser then Routing comes in to picture where UrlRoutingModule checks if the requested path matches with the routes configured.
Then we have MvcHandler that initiates the processing by using the ProcessRequest method.

Then MvcHandler invokes the Execute method on the controller. 

Then Controller executes the corresponding action method. 

Then the Result execution process kicks in. 

Here any type of actionresult such as ViewResult, Jsonresult,PartialViewResult are performed.

Then the corresponding view is located and rendering is done on to the browser with appropriate response.
<hr />
<h3>Authentication in MVC</h3>
form based authentication
Some of the things we need for Authentication include:

·        Login Page for user Login functionality, make sure you have strong password requirement.

·        Business logic for checking username/password against database.

·        Always perform hashing of passwords with salt so that no two password hashes are same.

·        Limit the number of times a user can attempt invalid login credentials.

·        Have Account lock mechanism, temporary password, Security questions mechanisms in the application

·        Always encrypt any sensitive information like SSN, payment info(credit cards etc.) or any PI(Personal Information)

·        In ASP.NET use Forms Based Authentication
<hr />
<h3>Http methods: </h3>
put get delete post
<hr />
<h3>Diff btw patch and post?</h3>
POST for creating a resource….

The POST method can be used for sending partial updates to a resource. 

The main difference between the POST and the PATCH method is that the POST method can only be used when it is written to support the applications or the applications support its semantics 
<br />
whereas the PATCH method can be used in a generic way and does not require application support. If the outcome of using the PATCH method is not known then the POST method is preferred.
<hr />
<h3>Areas in ASP.NET MVC</h3>
Areas are smaller functional units in an asp.net MVC project. It allows us to divide the big web application project into smaller functional units. Each Area has its own controllers, models, and views.

<hr />
<h3>Explain $q service, deferred and promises?</h3>
Promises are<strong> POST PROCESSING LOGICS </strong>which you want to execute after some operation / action is completed. 
While deferred helps to control how and when those promise logics will execute.<br />
<strong>
We can think about promises as “WHAT” we want to fire after an operation is completed 
while deferred controls “WHEN” and “HOW” those promises will execute.
</strong><br />
For example after an operation is complete you want to a send a mail, log in to log file and so on. So these operations you will define using promise. And these promise logics will be controlled by deferred.


So once some action completes deferred gives a signal “Resolve”, “Reject” or “Notify” and depending on what kind of signal is sent the appropriate promise logic chain fires.

“$q” is the angular service which provides promises and deferred functionality.

Using promises, deferred and “q” service is a 4 step process:-

Step 1:- Get the “q” service injected from Angular.

Step 2 :- Get deferred object from “q” service object.

Step 3 :- Get Promise object from deferred object.

Step 4 :- Add logics to the promise object.

<hr />
<h3>What is asynchronous controller?</h3>
Asynchronous action methods are useful when an action must perform several independent long running operations.

<blockquote>A typical use for the AsyncController class is long-running Web service calls.
</blockquote>

Should my database calls be asynchronous ?

The IIS thread pool can often handle many more simultaneous blocking requests than a database server. If the database is the bottleneck, asynchronous calls will not speed up the database response. Without a throttling mechanism, efficiently dispatching more work to an overwhelmed database server by using asynchronous calls merely shifts more of the burden to the database. If your DB is the bottleneck, asynchronous calls won’t be the magic bullet.

You should have a look at 1 and 2 references

Derived from @PanagiotisKanavos comments:
<blockquote>
Moreover, async doesn't mean parallel. Asynchronous execution frees a valuable threadpool thread from blocking for an external resource, for no complexity or performance cost. This means the same IIS machine can handle more concurrent requests, not that it will run faster.

You should also consider that blocking calls start with a CPU-intensive spinwait. During stress times, blocking calls will result in escalating delays and app pool recycling. Asynchronous calls simply avoid this
</blockquote>
<hr />

<h3>What is http verbs methods you have use?</h3>

<h3>What is patch?</h3>


<h3>How you used action filters? Where you used?</h3>


<h3>How do you Authentication in MVC? How it works??</h3>


<h3>How do you perform authorization?</h3>


<h3>What is bundling?</h3>


<h3>Diff btw action result and view result?</h3>


<h3>How do you perform validation in MVC?</h3>

