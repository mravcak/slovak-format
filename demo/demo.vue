<template>
	<div>
		<div>
			<textarea type="text" v-model="input" rows="5"></textarea>
			<br>
			<select v-model="selectedFn">
				<option v-for="(fn, name) in $options.slovakFormat" :key="name" :value="name">{{name}}</option>
			</select>
			<br>
			<button @click="process()">Process</button>
		</div>
		<div class="output" style="max-width: 330px" v-html="output"></div>
	</div>
</template>

<script>
import slovakFormat from '../src/';

export default {
	data() {
		return {
			input: '',
			output: '',
			selectedFn: '',
		}
	},
	slovakFormat: {
		...slovakFormat,
	},
	methods: {
		process() {
			this.output = this.$options.slovakFormat[this.selectedFn](this.input);
		}
	},
	mounted() {
		window.slovakFormat = slovakFormat;
	}
}
</script>