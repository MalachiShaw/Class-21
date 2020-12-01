function collisionDetection(object1,movingRect)
{
  if (movingRect.x - object1.x < object1.width/2 + movingRect.width/2
    && object1.x - movingRect.x < object1.width/2 + movingRect.width/2
    && movingRect.y - object1.y < object1.height/2 + movingRect.height/2
    && object1.y - movingRect.y < object1.height/2 + movingRect.height/2) {
 return true;
}
else {
  return false;
}
}