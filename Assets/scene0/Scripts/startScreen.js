var mainmenuSkin : GUISkin; //skin
var areaWidth : float; //GUI area width
var areaHeight : float; //GUI area height

function OnGUI(){
	GUI.skin = mainmenuSkin;
	var ScreenX = ((Screen.width*0.5)-(areaWidth*0.5));
	var ScreenY = ((Screen.height) - (areaHeight*0.5));
	
	GUILayout.BeginArea (Rect (ScreenX, ScreenY, areaWidth, areaHeight));
	if(GUILayout.Button ("Play")){
		Application.LoadLevel("scene1");
	}
	if(GUILayout.Button ("Quit")){
		Application.Quit();
	}
	GUILayout.EndArea();
}