import Cute from './lib/cute'

const Cursor = Cute({
	render () {
		let fillColor = '#000000'
		//if (this.state.CreateSquares) {
			//fillColor = '#44ff44'
		//}
		//if (this.state.DestroySquares) {
			//fillColor = '#ff4444'
		//}

		return (
			<layer>
				<rect w={2} h={this.h} x={this.w / 4 - 1/2} y={0}>
					<fill color={fillColor} />
				</rect>
				<rect w={this.w} h={2} x={0} y={this.h / 4 - 1/2}>
					<fill color={fillColor} />
				</rect>
			</layer>
		)
	},
	states: {
		Ready () {
			this.on('mousemoveG', evt => {
				this.x = evt.canvasX - this.w / 2
				this.y = evt.canvasY - this.h / 2
			})
		},
		ChangeColors () {
			// nothing to do
		},
		CreateSquares () {
			// nothing to do
		},
		DestroySquares () {
			// nothing to do
			// maybe we shouldn't have to define these
		},
	},
})

export default Cursor
