#pragma strict

var letterPause = 0.2;
var word = "Test"; // change this one in the inspector
private var currentWord = "";
private var style : GUIStyle;
public var myStyle : GUIStyle;
var objectWithTheScript : GameObject;
private var myGUI : myGUI;
var displayTime = 5.0;
private var timerActive = false;
private var timer = 0.0;
var done = false;
var objective : GameObject;

function Start ()
{
		TypeText (word);
}

function Update(){
	if (done == true)
		Wait();
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
    done = true;
}

function Wait () { // A custom WaitForSeconds coroutine that can be reset
	if (done == true){
		timerActive = true;
		timer = 0.0;
		while (timer < displayTime) {
			timer += Time.deltaTime;
			yield;
		}
		timerActive = false;
		objective.SetActive(false);
	}	
}

function OnGUI()
{
     GUI.Label(new Rect(2,2, Screen.width, Screen.height), currentWord, myStyle);
}

