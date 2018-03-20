
Is there some easy way to handle multiple submit buttons from the same form? Example:

<% Html.BeginForm("MyAction", "MyController", FormMethod.Post); %>
<input type="submit" value="Send" />
<input type="submit" value="Cancel" />
<% Html.EndForm(); %>
