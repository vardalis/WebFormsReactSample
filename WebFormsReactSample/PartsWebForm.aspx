<%@ Page Title="React WebForm 1" Language="C#" MasterPageFile="~/Site.Master" 
    AutoEventWireup="true" CodeBehind="PartsWebForm.aspx.cs" Inherits="WebFormsReactSample.PartsWebForm" 
%>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div id="root"></div>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="PageScripts" runat="server">
    <script>
        window.baseUrl = '<%= ResolveUrl ("~") %>';
    </script>
    <script src="React/dist/parts.bundle.js" type="text/javascript"></script>
</asp:Content>