var letterPause = 0.2;
var word = "Test"; // change this one in the inspector
private var currentWord = "";
private var style : GUIStyle;
public var myStyle : GUIStyle;
var objectWithTheScript : GameObject;
private var myGUI : myGUI;

function Start ()
{
		TypeText (word);
}

function Update(){
	//Debug.Log("finished typetext");
	//if (Input.GetKeyDown("space")){
    //	Camera.main.SendMessage("fadeOut");
	//}
}
 
function AddText(newText : String)
{
    word = newText;
    TypeText(word);
}
 
private function TypeText (compareWord : String) {
    for (var letter in word.ToCharArray()) {
        if (word != compareWord) break;
        currentWord += letter;
        yield WaitForSeconds (letterPause);
    }
}
 
function OnGUI()
{
     GUI.Label(new Rect(0,0, Screen.width, Screen.height), currentWord, myStyle);
}
