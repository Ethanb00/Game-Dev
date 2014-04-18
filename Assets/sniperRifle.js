#pragma strict
var scopeCam: Camera; // drag the scope camera here
var enableAim: boolean = false; // set enableAim to true to aim
var crosshair : GameObject;
var gun : GameObject;
var targetScript : MouseLook_JS;
var originalSensitivity = 15;

function Start(){
	originalSensitivity = targetScript.sensitivityX;
	crosshair.SetActive(false);
}

function Update(){
	if (Input.GetMouseButtonDown(1)){
		gun.SetActive(false);
		scopeCam.enabled = true;
		crosshair.SetActive(true);
		targetScript.sensitivityX = 1;
    	targetScript.sensitivityY = 1;
		enableAim = true; // aim while the right mouse button is pressed
	}
	if (!Input.GetMouseButton(1)){
		crosshair.SetActive(false);
		gun.SetActive(true);
    	scopeCam.enabled = false;
		enableAim = false;
	    //Debug.Log("Done zoom");
	    targetScript.sensitivityX = originalSensitivity;
		targetScript.sensitivityY = originalSensitivity;
	}
}