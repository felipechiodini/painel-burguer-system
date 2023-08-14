<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! Parece que você se perdeu.</p>
    <router-link to="/">Voltar à Página Inicial</router-link>
  </div>
</template>

<style>

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 6rem;
  margin-bottom: 0;
  color: #e74c3c;
}

p {
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  text-align: center;
}

router-link {
  margin-top: 20px;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

router-link:hover {
  color: #2980b9;
}
</style>
