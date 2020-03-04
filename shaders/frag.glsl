#ifdef GL_ES
precision mediump float;
#endif

uniform float e;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform float u_w0;
uniform float u_w1;
uniform float u_w2;

float random(vec2 st){
	return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

float sigmoid(float x) {
  if (x >= 1.0) return 1.0;
  else if (x <= -1.0) return 0.0;
  else return 0.5 + x * (1.0 - abs(x) * 0.5);	// return 1.;
}

float gate(vec2 p){
	// return bool(step(.5,));
	float z = u_w0 + u_w1 * p.x + u_w2 * p.y;
	// float z = p.y;
	return sigmoid(z);
	// return bool(step(.5, sigmoid(1.6)));
	// return bool(step(.5,u_w0));
	// float b=random(p);
	// return b>.5;
}

void main(){
	// point on canvas
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	// vec2 test = vec2(.9,.9);

	vec3 color = vec3(0.);
	float value = gate(st);

	color=vec3(value);
	
	// if(is_activated(st)){
	// 	// if(is_activated(st)){
	// 	color = vec3(0.5255, 0.9529, 0.651);
	// }
	
	// vec3 color=vec3(0.);
	
	// // bottom-left
	// vec2 bl=step(vec2(.1),st);
	// float pct=bl.x*bl.y;
	
	// // top-right
	// vec2 tr=step(vec2(.1),1.-st);
	// pct*=tr.x*tr.y;
	
	// color=vec3(pct);
	
	gl_FragColor=vec4(color,1.);
}
	