#pragma strict
var spawn : Transform;
var player : Transform;

function OnTriggerEnter (other : Collider) {
	Debug.Log("contact1");
	other.transform.position = spawn.position;
	Debug.Log("respawned");
}
