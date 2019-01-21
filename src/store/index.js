import Vue from "vue";
import Vuex from "vuex";
import { getTasks, sendTask } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    taskList: []
  },
  getters: {
    isModalVisible: state => state.showModal,
    todos: state => state.taskList,
    lastTaskId: state => {
      const lastTask = state.taskList[state.taskList.length - 1];

      return lastTask ? lastTask.id : 0;
    }
  },
  mutations: {
    TOGGLE_MODAL_STATUS(state) {
      state.showModal = !state.showModal;
    },
    ADD_TASK(state, payload) {
      state.taskList.push(payload.task);
    },
    UPDATE_TASKS(state, payload) {
      payload.tasks.map(task => {
        state.taskList.push(task);
      });
    },
    UPDATE_TASK_STATUS(state, payload) {
      state.taskList.find(task => task.id === payload.taskId).completed =
        payload.status;
    }
  },
  actions: {
    GET_TASKS({ commit }) {
      getTasks()
        .then(res => res.json())
        .then(data => data.filter(task => task.userId === 1))
        .then(tasks => {
          commit("UPDATE_TASKS", { tasks });
        })
        .catch(err => {
          console.log(err);
        });
    },
    SEND_TASK({ commit }, payload) {
      sendTask(payload).catch(err => console.log(err));
    }
  }
});
