let history = JSON.parse(localStorage.getItem("history")) //ambil data history dari local storage
if (!history){//jika blm ada data, bikin objek kosong
    history = {}
}

//ambil elemen html
const sidebar = document.getElementById("sidebar") 
const content = document.getElementById("content")

//AMBIL SEMUA KEY TANGGAL DARI HISTORY, KEMUDIAN LOOP
Object.keys(history).forEach(function(tanggal){
    const btn = document.createElement("button") //buat tombol
    btn.textContent = tanggal
    sidebar.appendChild(btn)

    //EVENT KETIKA TOMBOL DIKLIK   
    btn.addEventListener("click", function(){
        let tasks = history[tanggal]
        content.innerHTML = ""

    //RENDER TASKS KE CONTENT
        tasks.forEach(function(task){
        const li = document.createElement("li")

        let teks = task.title + " - " + (task.done ? "✅" : "❌")

        if (task.note && task.note.trim() !== "") {
            teks += " | Note: " + task.note
        }

        li.textContent = teks
        content.appendChild(li)
        })

    })
    
})
