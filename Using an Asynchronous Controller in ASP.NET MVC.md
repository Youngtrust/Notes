
The AsyncController class enables you to write asynchronous action methods.
You can use asynchronous action methods for long-running, non-CPU bound requests. 
This avoids blocking the Web server from performing work while the request is being processed. 
A typical use for the AsyncController class is long-running Web service calls.

<hr />
<h4>How Requests Are Processed by the Thread Pool</h4>
On the Web server, the .NET Framework maintains a pool of threads that are used to service ASP.NET requests. 
When a request arrives, a thread from the pool is dispatched to process that request. 
If the request is processed synchronously, the thread that processes the request is blocked while the request is being processed, 
and that thread cannot service another request.

This might not be a problem, because the thread pool can be made large enough to accommodate many blocked threads. 
However, the number of threads in the thread pool is limited. 
In large applications that process multiple simultaneous long-running requests, all available threads might be blocked. 
This condition is known as thread starvation. When this condition is reached, the Web server queues requests. 
If the request queue becomes full, the Web server rejects requests with an HTTP 503 status (Server Too Busy).

<h4>Processing Asynchronous Requests</h4>
In applications where thread starvation might occur, you can configure actions to be processed asynchronously. 
An asynchronous request takes the same amount of time to process as a synchronous request. 
For example, if a request makes a network call that requires two seconds to complete, 
the request takes two seconds whether it is performed synchronously or asynchronously.
However, during an asynchronous call, the server is not blocked from responding to other requests while it waits for the first request to complete. 
Therefore, asynchronous requests prevent request queuing when there are many requests that invoke long-running operations.

When an asynchronous action is invoked, the following steps occur:

1.The Web server gets a thread from the thread pool (the worker thread) and schedules it to handle an incoming request. 
This worker thread initiates an asynchronous operation.

2.The worker thread is returned to the thread pool to service another Web request.

3.When the asynchronous operation is complete, it notifies ASP.NET.

4.The Web server gets a worker thread from the thread pool 
(which might be a different thread from the thread that started the asynchronous operation) 
to process the remainder of the request, including rendering the response.

<img src = "https://i-msdn.sec.s-msft.com/dynimg/IC371798.png" />

<h4>Converting Synchronous Action Methods to Asynchronous Action Methods</h4>
The sample code below shows a synchronous action method that is used to display news items from a portal controller. 
The request Portal/News?city=Seattle displays news for Seattle.


<code>
public class PortalController: Controller {
    public ActionResult News(string city) {
        NewsService newsService = new NewsService();
        ViewStringModel headlines = newsService.GetHeadlines(city);
        return View(headlines);
    }
}
</code>


<code>
public class PortalController : AsyncController {
    public void NewsAsync(string city) {

        AsyncManager.OutstandingOperations.Increment();
        NewsService newsService = new NewsService();
        newsService.GetHeadlinesCompleted += (sender, e) =>
        {
            AsyncManager.Parameters["headlines"] = e.Value;
            AsyncManager.OutstandingOperations.Decrement();
        };
        newsService.GetHeadlinesAsync(city);
    }

    public ActionResult NewsCompleted(string[] headlines) {
        return View("News", new ViewStringModel
        {
            NewsHeadlines = headlines
        });
    }
}
</code>

