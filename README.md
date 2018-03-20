# Notes
<h3>.net interview notes concepts </h3>

<h3>MVC life cycle:</h3>
First the request comes from browser then Routing comes in to picture where UrlRoutingModule checks if the requested path matches with the routes configured.
Then we have MvcHandler that initiates the processing by using the ProcessRequest method.

Then MvcHandler invokes the Execute method on the controller. 

Then Controller executes the corresponding action method. 

Then the Result execution process kicks in. 

Here any type of actionresult such as ViewResult, Jsonresult,PartialViewResult are performed.

Then the corresponding view is located and rendering is done on to the browser with appropriate response.
