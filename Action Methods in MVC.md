If a user requests an URL then the ASP.NET MVC framework maps URLs to classes that are referred to as Controllers. Controllers process incoming requests using action methods. Action methods typically have a one-to-one mapping with user interactions. When a user enters a URL into the browser, the MVC application uses routing rules that are defined in the Global.asax file to parse the URL and to determine the path of the controller. The controller then determines the appropriate action method to handle the request. As per MSDN, a method must meet the following requirements:
<br />
<li>1.The method must be public.</li>
<li>2.The method cannot be a static method.</li>
<li>3.The method cannot be an extension method.</li>
<li>4.The method cannot be a constructor,getter, or setter.</li>
<li>5.The method cannot have open generic types.</li>
<li>6.The method is not a method of the controller base class.</li>
<li>7.The method cannot contain ref or out parameters</li>
<br />
We can create action methods that return an object of any type, such as a string, an integer, or a Boolean value. These return types are wrapped in an appropriate ActionResult type before they are rendered to the response stream. The ASP.NET MVC framework will convert any return type that is not an action result into a string and render the string to the browser. Create a simple controller as in the following code snippet:
<br />
<img src = "http://www.tutorialsteacher.com/Content/images/mvc/action-method.png" />

The successful execution of an MVC controller action will produce an object derived from ActionResult. Rendering a view and redirecting the browser to a new URL are both valid types of results we can get from our controller. The complete list of ActionResult derived types that can be an output of action method are as follows.

<br />

<img src = "https://github.com/Youngtrust/Notes/blob/master/methods.png" />

<h4>Overloading</h4>
MVC supports the method overloading but it doesn't support method overloading based solely on signature, so this will fail. If we have two actions like the following then it fails. 
<br />
<code>
  public string SayHello()
  {
  
      return "Hello from SayHello"; 
  }
  
  public string SayHello(string name)
  {
      return "Hello" + name + "from 'SayHello'"
  }
 </code>
 
 We need to decorate our action method with two attributes, like [HpptGet] and [HttpPost]. We can use the ActionName attribute to expose two methods with the same name as actions with different names.
<br />
<code>
  
public class HomeController : Controller  
{

    [ActionName("SayHelloWithOutName")]  
    public string SayHello()  
    {  
        return "Hello from 'SayHello(SayHelloWithOutName)'.";  
    }  
    public string SayHello(string name)  
    {  
        return "Hello " + name + " from 'SayHello' ";  
    }  
    public string SayHi()  
    {  
        return "hi from 'SayHi'.";  
    }  
}  

</code>
We can create our own ActionFilter derived from ActionMethodSelectorAttribute. Here we are checking the URL parameter then invoke the appropriate method.

<code>

public class MyActionSelectorAttribute : ActionMethodSelectorAttribute  
{ 

    public MyActionSelectorAttribute(string valueName)  
    {  
        ValueName = valueName;  
    }  
    public override bool IsValidForRequest(ControllerContext controllerContext, MethodInfo methodInfo)  
    {  
        return (controllerContext.HttpContext.Request[ValueName] != null);  
    }  
    public string ValueName { get; private set; }  
}

</code>
We need to decorate our method with the parameter MyActionSelectorAttribute as in the following code snippet:
<code>
  
public string SayHello()  
{

    return "Hello from 'SayHello'.";  
}  
[MyActionSelectorAttribute("name")]  
public string SayHello(string name)  
{
     return "Hello " + name + " from 'SayHello' ";  
}

</code>
