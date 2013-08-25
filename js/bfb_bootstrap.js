/* intial screen loading */
function initApp() {
	console.log('app init');
	bb.pushScreen('main.html', 'main');
}

/* screen for selecting the learning menu */
function learn() {
	console.log('Learn');
	bb.pushScreen('learn.html', 'learn');
}

/*Learning  Screen for Shapes*/
function areas() {
	console.log('Learn');
	bb.pushScreen('./Learn/anp.html', 'sum');
}

/* Learning Screen for Clock and Calender*/
function cnc() {
	console.log('Learn');
	bb.pushScreen('./Learn/cnc.html', 'sum');
}

/*Learning  Screen for Divisibility*/
function div() {
	console.log('Learn');
	bb.pushScreen('./Learn/div.html', 'sum');
}

/* Learning Screen for HCF and LCM*/
function hnl() {
	console.log('Learn');
	bb.pushScreen('./Learn/hnl.html', 'sum');
}

/*Learning  Screen for Number */
function num() {
	console.log('Learn');
	bb.pushScreen('./Learn/num.html', 'sum');
}

/* Learning Screen for Series */
function oo() {
	console.log('Learn');
	bb.pushScreen('./Learn/oo.html', 'sum');
}

/* Learning Screen for Profit and Loss*/
function pnl() {
	console.log('Learn');
	bb.pushScreen('./Learn/pnl.html', 'sum');
}

/* Learning Screen for Square and Cube root*/
function sac() {
	console.log('Learn');
	bb.pushScreen('./Learn/sac.html', 'sum');
}

/* Learning Screen for SI and CI*/
function sinci() {
	console.log('Learn');
	bb.pushScreen('./Learn/sinci.html', 'sum');
}

/* Learning Screen for Time and Distance */
function tnd() {
	console.log('Learn');
	bb.pushScreen('./Learn/tnd.html', 'sum');
}

/*Screen for Loading Selection for Playing */
function play()
{
console.log('Play');
bb.pushScreen('play.html', 'sum');
}

/* screen for shapes */
function areaplay() {
  
	window.open('./Quiz/area.html', '_parent');
}

/* screen for clock and calendar */
function cncs() {
  
	window.open('./Quiz/clocal.html', '_parent');
}

/* screen for Divisibility */
function divs() {
  
	window.open('./Quiz/Divisibility.html', '_parent');
}
/* screen for HCF and LCM */
function hnls() {
  
	window.open('./Quiz/hcflcm.html', '_parent');
}
/* screen for NUMBERS*/
function nums() {
  
	window.open('./Quiz/nume.html', '_parent');
}
/* screen for odd series */
function oos() {
  
	window.open('./Quiz/oddseries.html', '_parent');
}
/* screen for profit and loss */
function pnls() {
  
	window.open('./Quiz/prolos.html', '_parent');
}
/* screen for roots */
function sacs() {
  
	window.open('./Quiz/sc.html', '_parent');
}
/* screen for simple and compound interest */
function sincis() {
  
	window.open('./Quiz/sici.html', '_parent');
}

/* screen for time and distance */
function tnds() {
  
	window.open('./Quiz/tnd.html', '_parent');
}
