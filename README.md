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

 
