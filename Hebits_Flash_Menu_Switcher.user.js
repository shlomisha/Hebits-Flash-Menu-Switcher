// ==UserScript==
// @id             Hebits_Flash_Menu_Switcher
// @name           Hebits Flash Menu Switcher
// @version        1.0
// @namespace      shlomisha
// @author         shlomisha
// @description    Changes the disgusting flash menu to clean HTML one
// @include        https://hebits.net/*
// @grant          GM_addStyle
// @run-at         document-end
// ==/UserScript==

GM_addStyle(
	"#menu ul { overflow: hidden; list-style-type: none; text-align: center; }\
	#menu ul li { display: inline-block; text-align: center; margin-top: 5px; width: 150px; border: 2px solid #00fff6; color: #5a9eb4; }\
	#menu ul li:hover { background-color: #00fff6; }\
	#menu ul li a { display: block; padding: 3px; }\
	#menu ul li:hover a { color: black; }");
	
var menu = document.getElementById("menu");
if (menu != null)
{
	menu.innerHTML =	"<ul>\
							<li><a href=\"/\">עמוד הבית</a></li>\
							<li><a href=\"/browse.php\">טורנטים</a></li>\
							<li><a href=\"/\">מוזיקה</a></li>\
							<li><a href=\"/upload.php\">העלאה</a></li>\
							<li><a href=\"/mirc.php\">צ'אט</a></li>\
							<li><a href=\"/forums/\">פורום</a></li>\
							<li><a href=\"/allgames.php\">משחקים</a></li>\
							<li><a href=\"/staff.php\">צוות</a></li>\
						</ul>";
}
