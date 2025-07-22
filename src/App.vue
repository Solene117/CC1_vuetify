<template>
  <v-app>
    <v-container>
      <v-btn to="/" text>Accueil</v-btn>
      <v-btn to="/tasks" text>Liste des tâches</v-btn>
      <router-view />
    </v-container>
  </v-app>
</template>
