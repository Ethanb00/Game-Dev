var targetScript : sniperRifle;
var shotSound: AudioClip; // drag a shot sound here, if any
var bullet : GameObject;
var player : GameObject;
var force : float = 2000;
var shootForce : float = 1000;

function Start () {

}

function Update () {
	if (targetScript.enableAim){
		if (Input.GetMouseButtonDown(0)){
			Debug.Log("shooting");
			if (shotSound) 
				audio.PlayOneShot(shotSound); // play the shot soun
//			var fwd = transform.TransformDirection (Vector3.forward);
//			var hit : RaycastHit;
//			if (Physics.Raycast (transform.position, fwd, 1000)) {
//				//print(hit.collider);
//				//print(hit.collider.gameObject.name);
//				print ("There is something in front of the object!");
			fire();
		}
	}
}


 
function fire(){
    var instanceBullet = Instantiate(bullet,transform.position,Quaternion.identity);
    instanceBullet.rigidbody.AddForce(transform.forward*shootForce);
}