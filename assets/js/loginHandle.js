const handleLogin = () => {
  const user = [
    {
      username: "admin",
      password: "admin123",
    },
    {
      username: "user",
      password: "user123",
    },
  ];
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  user.map(usr => {
    if(username === usr.username && password === usr.password) {
      if(username === user[0].username) {
        window.location.href = '../../src/admin/updateKamar.html'
      } else {
        window.location.href = '../../src/home.html'
      }
    }
  })
};
