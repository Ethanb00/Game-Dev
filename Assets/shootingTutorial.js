#pragma strict
var collisionObject : GameObject;

function OnCollisionEnter(collision : Collision){
	if (gameObject.tag == "Player" ){
 		Debug.Log("player collided");
    	renderer.material.color = Color.red;
    }
		//var myController : CharacterController = GetComponent(CharacterController);
		//Destroy(myController);
		//gameObject.AddComponent(CharacterController);
}