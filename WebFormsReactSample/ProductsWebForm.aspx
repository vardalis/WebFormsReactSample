<%@ Page Title="React WebForm 2" Language="C#" MasterPageFile="~/Site.Master" 
    AutoEventWireup="true" CodeBehind="ProductsWebForm.aspx.cs" Inherits="WebFormsReactSample.ProductsWebForm" 
%>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <!-- This is where the React application will be rendered -->
    <div id="root"></div>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PageScripts" runat="server">
    <!-- We are passing the baseUrl to React. All Urls will be based on that. Helps as web app installation Url may vary -->
    <script>
        window.baseUrl = '<%= ResolveUrl ("~") %>';
    </script>
    <script src="React/dist/products.bundle.js" type="text/javascript"></script>
</asp:Content>