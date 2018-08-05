import Cute from '../lib/cute'

const Arc = Cute({
	render() {
		return (
			<path>
				<arc x={0} y={0} r={this.props.r} sa={this.props.sa} ea={this.props.ea} ccw={this.props.ccw}>
					<fill color={this.data.color} />
					<stroke color={"red"} />
				</arc>
			</path>
		)
	},
	data() {
		return {
			color: this.randomColor(),
		}
	},
	methods: {
		randomColor() {
			return '#' + Math.floor(Math.random() * 16777215).toString(16)
		},
	},
	states: {
		ChangeColors() {
			this.on('click', () => {
				this.data.color = this.randomColor()
			})
		},
		CreateArcs() {
			// nothing to do
		},
		DestroyArcs() {
			// console.log(this.props.handleDestroy)
			// this is the same pattern as in React: pass a handler down as a prop
			this.on('click', this.props.handleDestroy)
		},
	},
})

export default Arc