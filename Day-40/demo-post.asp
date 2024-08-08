<% ' Ensure the server is properly configured to handle ASP scripts

' Retrieve POST data dim fname, city fname=Request.Form("name") city=Request.Form("city") ' Respond with a message
Response.ContentType = "text/plain" ' Ensure the correct content type for plain text Response.Write("Dear " & fname & "
    . ")
Response.Write(" Hope you live well in " & city & " .") %>