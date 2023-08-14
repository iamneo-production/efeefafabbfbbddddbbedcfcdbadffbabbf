@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");

body {
  margin: 0;
  font-family: "Quicksand", sans-serif;
  background-color: #eceff1;
  color: #010b40;
}

.app {
  background-color: skyblue;
  margin: 0 auto;
  width: 300px;
  height: 200px;
  position: relative;
  border-radius: 10px;
}

h3 {
  color: white;
  text-align: center;
  padding-top: 8px;
  letter-spacing: 1.2px;
  font-weight: 500;
}

p {
  font-size: 28px;
}

.stopwatch-card {
  position: absolute;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 325px;
  height: 130px;
  top: 110px;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  outline: none;
  background: transparent;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 7px;
  color: black;
  cursor: pointer;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  width: 150px;
  margin: 0 auto;
  margin-top: 5px;
}