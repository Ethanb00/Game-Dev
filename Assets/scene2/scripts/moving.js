var lastPosition : Vector3;

var myTransform : Transform;

var isMoving : boolean;

 

function Start()

{

     myTransform = transform;

     lastPosition = myTransform.position;

     isMoving = false;

}

 

function Update()

{

    if ( myTransform.position != lastPosition ){

          isMoving = true;
          animation.Play("humanoid_walkForward_faceForward");
	}
    else

          isMoving = false;

 

     lastPosition = myTransform.position;

}