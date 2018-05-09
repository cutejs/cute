import primitives from './primitives'
import Constructor from './constructor'
import Screen from './screen'
import Dispatch from './dispatch'
import NodeContext from './node'

const Cute = {}

Cute.canvas = document.createElement('canvas')
Cute.ctx = Cute.canvas.getContext('2d')

Cute.screen = new Screen(Cute.ctx)
Cute.dispatch = new Dispatch(Cute.canvas, Cute.screen)
Cute.scheduler = null

const Node = NodeContext(Cute.screen, Cute.scheduler, Cute.dispatch)

Cute.attach = function (RootComponent, parentElement, canvasWidth, canvasHeight) {
	this.canvas.width = canvasWidth
	this.canvas.height = canvasHeight
	parentElement.appendChild(this.canvas)
	this.canvas.setAttribute('tabindex', '0')
	this.canvas.focus()
	this.screen.setRootElement(RootComponent)
}

Cute.createElement = function (Type, props, ...children) {
	if (typeof Type === 'string') {
		return new Node(primitives._lookup(Type), props, children)
	}
	return new Node(Type, props, children)
}

Cute.Constructor = Constructor

export default Cute
