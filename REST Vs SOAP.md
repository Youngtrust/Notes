SOAP(Simple Object Access Protocol)
REST(Represtentational State Transfer)

Only if you have a specific reason to use SOAP, otherwise, use REST

REST
REST 的最佳场景是当你通过互联网公开一个公共 API 来对数据的 CRUD 操作进行处理的时候。REST 专注于通过一个一致性接口访问命名资源。
SOAP
SOAP 提供了自己的协议并专注于公开某些应用逻辑(不是数据)为服务。SOAP 公开的是操作。SOAP 专注于访问通过不同的接口实现了某些业务逻辑的命名操作。
SOAP 常常被称作“web services”，这是一个误称。SOAP 和 web 基本上说不上话。REST 提供的才是真正的基于 URL 和 HTTP 的 “web services”。
以下是几个调用方式演示，并附以相关解释。
[java] view plain copy
getUser(User);  

上面这是一个 REST 操作，因为你正在对一个资源(数据)进行访问。
[java] view plain copy
switchCategory(User, OldCategory, NewCategory)  

由于你是在执行一个操作所以上面这是一个 SOAP 操作。
当然，上述两种调用都既可以用 SOAP 也可以用 REST。演示的目的是用来理解它们在概念上的区别。

