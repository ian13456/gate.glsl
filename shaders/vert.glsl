// our vertex data
attribute vec3 aPosition;

void main(){
  
  // copy the position data into a vec4, using 1.0 as the w component
  vec4 positionVec4=vec4(aPosition,1.);
  positionVec4.xy=positionVec4.xy*2.-1.;
  
  // send the vertex information on to the fragment shader
  gl_Position=positionVec4;
}