<template>
  <div class="card">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="256"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 256"
        width="256"
      >
        <path
          d="m204.8 0h51.2l-128 220.8-128-220.8h50.56 47.36l30.08 51.2 29.44-51.2z"
          fill="#41b883"
        />
        <path
          d="m0 0 128 220.8 128-220.8h-51.2l-76.8 132.48-77.44-132.48z"
          fill="#41b883"
        />
        <path
          d="m50.56 0 77.44 133.12 76.8-133.12h-47.36l-29.44 51.2-30.08-51.2z"
          fill="#35495e"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped>
.card {
  border: 1px solid red;
  background-color: #ff000020;
  padding: 50px;
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.logo {
  padding: 20px;
}

@media (prefers-reduced-motion: no-preference) {
  .logo {
    animation: slide 5s infinite linear;
  }
}

@keyframes slide {
  0% {
    margin-left: -100px;
  }
  50% {
    margin-left: 100px;
  }
  100% {
    margin-left: -100px;
  }
}
</style>
