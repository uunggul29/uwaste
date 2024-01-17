// Inisialisasi Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAA8XU1ZHlXjFuxRVauGH0BtLVx40G3ENk",
  authDomain: "uwaste-4f273.firebaseapp.com",
  databaseURL: "https://uwaste-4f273-default-rtdb.firebaseio.com",
  projectId: "uwaste-4f273",
  storageBucket: "uwaste-4f273.appspot.com",
  messagingSenderId: "631518771734",
  appId: "1:631518771734:web:cb05008ed0575486245337"
});

function fetchData() {
  var dataContainer = document.getElementById('data-container');
  database.ref('/uwaste').once('value').then(function(snapshot) {
    // Loop
    snapshot.forEach(function(childSnapshot) {
      var data = childSnapshot.val();
      // Tambahkan elemen HTML sesuai kebutuhan Anda
      var dataElement = document.createElement('div');
      dataElement.innerHTML = '<p>' + data.name + ': ' + data.delivery +':' + data.type + ':' + data.weight + ':' + data.phone + '</p>'; //nama database nya
      dataContainer.appendChild(dataElement);
    });
  });
}

fetchData();

// Buat referensi database
const database = firebase.database();

// Dapatkan URL REST API
const url = database.ref("uwaste").getUrl();

// Buat permintaan GET
const request = new XMLHttpRequest();
request.open("GET", url);

// Kirim permintaan
request.send();

// Tampilkan respons
request.onload = () => {
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    console.log(response);
  }
};