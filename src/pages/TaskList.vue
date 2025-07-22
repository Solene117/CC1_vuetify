<template>
  <v-container>
    <v-card class="pa-5">
      <h1 class="text-h5 mb-4">Liste des Tâches</h1>
      <v-form @submit.prevent="addTask">
        <v-text-field
          v-model="newTask"
          label="Nouvelle tâche"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary">Ajouter</v-btn>
      </v-form>

      <v-list class="mt-4">
        <v-list-item v-for="(task, index) in tasks" :key="index">
          <v-list-item class="d-flex align-center justify-space-between">
            <div class="d-flex align-center flex-grow-1">
              <v-list-item-action>
                <v-checkbox v-model="task.done" />
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': task.done }"
                >
                  {{ task.name }}
                </v-list-item-title>
              </v-list-item-content>

              <v-btn icon @click="removeTask(index)">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  mounted() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      this.tasks = JSON.parse(saved);
    }
  },
  watch: {
    tasks: {
      handler(newVal) {
        localStorage.setItem("tasks", JSON.stringify(newVal));
      },
      deep: true,
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ name: this.newTask.trim(), done: false });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
