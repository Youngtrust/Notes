SOAP(Simple Object Access Protocol)
REST(Represtentational State Transfer)

Unless you have a definitive reason to use SOAP use REST’”


REST
REST 的最佳场景(sweet spot)是当你通过互联网公开一个公共 API 来对数据的 CRUD 操作进行处理的时候。REST 专注于通过一个一致性接口访问命名资源。
SOAP
SOAP brings it’s own protocol and focuses on exposing pieces of application logic (not data) as services. SOAP exposes operations. SOAP is focused on accessing named operations, each implement some business logic through different interfaces.

Though SOAP is commonly referred to as “web services” this is a misnomer. SOAP has very little if anything to do with the Web. REST provides true “Web services” based on URIs and HTTP.

SOAP 提供了自己的协议并专注于公开某些应用逻辑(不是数据)为服务。SOAP 公开的是操作。SOAP 专注于访问通过不同的接口实现了某些业务逻辑的命名操作。
SOAP 常常被称作“web services”，这是一个误称。SOAP 和 web 基本上说不上话。REST 提供的才是真正的基于 URL 和 HTTP 的 “web services”。
以下是几个调用方式演示，并附以相关解释。

getUser(User);  

上面这是一个 REST 操作，因为你正在对一个资源(数据)进行访问。

switchCategory(User, OldCategory, NewCategory)  

由于你是在执行一个操作所以上面这是一个 SOAP 操作。
当然，上述两种调用都既可以用 SOAP 也可以用 REST。演示的目的是用来理解它们在概念上的区别。


<strong>WHY REST?</strong>

接下来解释为何 REST 几乎总是正确的答案。
REST 使用了标准 HTTP 因此它做什么都更加简单。创建客户端，开发 API，文档更易于理解，而且没有一件事用 REST 做起来不比 SOAP 更简单/更好。

REST 允许很多不同的数据格式而 SOAP 仅支持 XML。虽然这样看起来给 REST 增加了复杂度因为你需要处理多种格式，但以我的经验来看这样实际上有很多好处。
JSON 通常更适用于承载数据而且解析起来更快。由于其对 JSON 的支持，REST 允许我们更好地支持浏览器客户端。

REST 具备更好的性能和可扩展性(performance and scalability)。REST 读取可以被缓存起来，而基于 SOAP 的读取无法被缓存。

用来做论据不太好(权威)，但是值得一提的是 Yahoo 的包括 Flickr 和 del.ici.ous 在内的所有服务都使用了 REST。Amazon 和 Ebay 两种都有使用，尽管 Amazon 内部使用的几乎全都是 REST 资源。Google 曾经对于他们所有的服务仅提供 SOAP，但 2006 年起 Google 弃用了 SOAP 转投 REST 资源。有趣的是在 Amazon 内部是否也有过关于 REST Vs SOAP 的争议，但是最终还是 REST 主宰了他们 web services 的架构。



<strong>WHY SOAP<strong>
web services security
SOAP 不仅像 REST 一样支持 SSL，而且还支持增加了很多企业级安全特性的 WS-Security(WS = web services)。因此它能够提供通过中介的身份验证，而不仅仅是端对端的验证(SSL)。此外，SOAP 还提供了一个数据完整性和数据隐私性的标准实现。叫它“企业级”并不是说它更安全，它只是简单提供了典型互联网服务不需要的几个安全工具而已，事实上这些工具只有在很少的一些“企业级”场景下才能派的上用场。
web services AtomicTransaction
如果服务需要 ACID 事务的话，那么你就需要 SOAP 了。尽管 REST 也支持事务，但它并非完整性的而且不具备 ACID。幸运的是 ACID 事务对于互联网来说几乎没有任何意义。REST 受限于 HTTP，HTTP 本身无法提供两阶段提交分布式事务资源，但是 SOAP 可以。互联网应用一般不会需要这等级别的事务可靠性，企业级应用有时会需要。
web services ReliableMessaging
REST 不具备一个标准的消息体系，它期望客户端通过重试来处理通信失败。SOAP 具备内置的成功/重试逻辑并通过 SOAP 中介来提供端对端的可靠性。

总之，SOAP 显然是有用的，而且还很重要。例如，如果我去写一个连接到我的银行的 iPhone 应用那么我当然需要使用 SOAP。上述三点特性都是银行事务所必须的。比如，如果我将资金从一个账户转移到另外一个账户，我需要确定它的完成。<strong>如果第一次转账成功，但响应失败，这个时候的 REST 重试将会是灾难性的</strong>


