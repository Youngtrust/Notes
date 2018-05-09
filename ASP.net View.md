Where is the route mapping code written?
The route mapping code is written in "RouteConfig.cs" file and registered using "global.asax" application start event.

Can we map multiple URL’s to the same action?
Yes, you can, you just need to make two entries with different key names and specify the same controller and action.


How can we maintain sessions in MVC?
Sessions can be maintained in MVC by three ways: tempdata, viewdata, and viewbag.

What is the difference between tempdata, viewdata, and viewbag?


Figure: Difference between tempdata, viewdata, and viewbag:
Temp data - Helps to maintain data when you move from one controller to another controller or from one action to another action. In other words when you redirect, tempdata helps to maintain data between those redirects. It internally uses session variables.
View data - Helps to maintain data when you move from controller to view.
View Bag - It’s a dynamic wrapper around view data. When you use Viewbag type, casting is not required. It uses the dynamic keyword internally.



“TempData” maintains data for the complete request while “ViewData” maintains data only from Controller to the view.


What are AJAX Helpers?
AJAX Helpers are used to create AJAX enabled elements. 
Like as Ajax enabled forms and links which performs request asynchronously.
Ajax helpers are extension methods of AjaxHelper class which exist in System.Web.Mvc namespace

