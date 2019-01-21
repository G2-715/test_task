<template>
	<div class="fade">
		<div class="fade-modal">
			<button class="modal-close-btn" @click="closeModal"></button>
			<h1>Add new task</h1>
			<label>
				<input type="text" name="add-task" v-model="taskText" @keydown.enter="addTask">
			</label>
			<button class="modal-add-btn" @click="addTask">ok</button>
		</div>
	</div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Modal",
    data() {
      return {
        taskText: ""
      };
    },
    computed: {
      ...mapGetters(["lastTaskId"])
    },
    methods: {
      closeModal() {
        this.$store.commit("TOGGLE_MODAL_STATUS");
      },
      addTask() {
        if (this.taskText === "") return;

        const task = {
          userId: 1,
          id: this.lastTaskId + 1,
          title: this.taskText,
          completed: false
        };

        this.$store.commit("ADD_TASK", {task});

        this.taskText = "";

        this.$store.commit("TOGGLE_MODAL_STATUS");

        this.$store.dispatch("SEND_TASK", {task});
      }
    }
  };
</script>

<style scoped lang="less">
	.fade {
		position: fixed;
		text-align: center;
		padding-top: 306px;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(80, 227, 164, 0.8);

		&-modal {
			position: relative;
			display: inline-block;
			width: 750px;
			padding: 108px 107px 76px 108px;
			background-color: #ffffff;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			font-family: "Gotham Rounded - Book", sans-serif;

			h1 {
				margin: 0;
				color: #3e434f;
				font-size: 33px;
				font-weight: 400;
				line-height: 1;
				margin-bottom: 69px;
			}

			input {
				width: 535px;
				padding: 5px;
				margin-bottom: 62px;
				color: #3e434f;
				border: none;
				border-bottom: 3px solid #eef0f5;
				outline: none;
				font-size: 33px;
				-webkit-transition: all 0.3s;
				-moz-transition: all 0.3s;
				-ms-transition: all 0.3s;
				-o-transition: all 0.3s;
				transition: all 0.3s;
				font-family: inherit;

				&:focus {
					border-bottom: 3px solid #50e3a4;
				}
			}

			.modal-add-btn {
				border: none;
				outline: none;
				min-width: 352px;
				height: 59px;
				padding: 18px 18px 19px 18px;
				font-family: inherit;
				font-size: 30px;
				cursor: pointer;
				box-shadow: 0 3px 10px rgba(62, 192, 136, 0.8);
				border-radius: 30px;
				background-color: #50e3a4;
				line-height: 1;
				color: #ffffff;
				text-transform: uppercase;
				-webkit-transition: opacity 0.3s;
				-moz-transition: opacity 0.3s;
				-ms-transition: opacity 0.3s;
				-o-transition: opacity 0.3s;
				transition: opacity 0.3s;

				&:hover {
					opacity: 0.8;
				}
			}

			.modal-close-btn {
				position: absolute;
				top: 26px;
				right: 27px;
				border: none;
				outline: none;
				width: 59px;
				height: 59px;
				background-image: url("../assets/delete-button.png");
				cursor: pointer;
			}
		}
	}
</style>
