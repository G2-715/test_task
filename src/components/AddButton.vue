<template>
	<button class="add-btn" @click="showModal"><span>+</span></button>
</template>

<script>
  export default {
    name: "Button",
    methods: {
      showModal() {
        this.$store.commit("TOGGLE_MODAL_STATUS");
      }
    }
  };
</script>

<style scoped lang="less">

	.add-btn {
		width: 180px;
		height: 180px;
		display: flex;
		padding: 0;
		align-items: center;
		position: absolute;
		left: calc(50% - 90px);
		bottom: -90px;
		box-shadow: 0 3px 10px rgba(62, 192, 136, 0.8);
		background-color: #50e3a4;
		border-radius: 50%;
		border: none;
		outline: none;
		cursor: pointer;
		-webkit-transition: opacity 0.3s;
		-moz-transition: opacity 0.3s;
		-ms-transition: opacity 0.3s;
		-o-transition: opacity 0.3s;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.8;
		}

		span {
			height: 80px;
			width: 100%;
			text-align: center;
			margin-left: 5px;
			font-family: 'GothamRounded-Book', sans-serif;
			font-size: 100px;
			font-weight: 400;
			line-height: 100%;
			text-transform: uppercase;
			letter-spacing: 4px;
			color: #46be8b;
		}
	}
</style>
