let hariIni = new Date().toLocaleDateString() //variabel tanggal sekarang

//MENTYIMPAN TASK KE LOCAL STORAGE
function saveToLocalStorage(){
    let history = JSON.parse(localStorage.getItem("history")) //ambil data history dari local storage(JSON parsing into object)
    if (!history){// jika belum ada data, inisialisasi object kosong
        history = {}
    } 
    history[hariIni] = tasks //simpan  tasks hari ini ke history
    localStorage.setItem("history", JSON.stringify(history)) //untuk simpan bentuk string
}

let tasks = [ //array data dari tiap checklist
    { title: "Belajar JavaScript", done: false, note: "" },
    { title: "Gym / Boxing", done: false, note: "" },
    { title: "Belajar Cyber", done: false, note: "" },
    { title: "Nugas", done: false, note: "" }
];

let history = JSON.parse(localStorage.getItem("history")) //ambil seluruh history dari local storage
if (!history){ //jika blm ada history, bikin object kosong
        history = {}
    } 
if (history[hariIni]){//jika sudah ada data, tampilkan
    tasks = history[hariIni]
    }
const taskList = document.getElementById("task-list") //ambil elemen html

//LOOP UNTUK NAMPILIN TASK SATU PERSATU
tasks.forEach(function(task, index){
    // bikin elemen ke html dinamis
    const li = document.createElement("li") // container
    const checkbox = document.createElement("input") //variabel centang
    checkbox.type = "checkbox" 
    const text = document.createTextNode(task.title) //variabel isi task detailnya
    
    //input catatan
    const noteInput = document.createElement("input") 
    noteInput.type = "text"
    noteInput.placeholder = "catatan..."

    noteInput.style.display = "none" //default disembunyikan (muncul kalau tasks selesai)

    //sinkronisasi data awal
    checkbox.checked = task.done //apakah sudah dicentang
    noteInput.value = task.note // isi catatan sebelumnya

    //tampilkan / sembunyikan note
    if (task.done) {
        noteInput.style.display = "inline"
    } else {
        noteInput.style.display = "none"
    }

    //event checkbox 
    checkbox.addEventListener("change", function(){
        task.done = checkbox.checked //update status task

        if (checkbox.checked) { // tampilkan/sembunyikan note
            noteInput.style.display = "inline"
        } else {
            noteInput.style.display = "none"
        }
        saveToLocalStorage() //simpan ke localStorage
    })

    //EVENT INPUT CATATAN
    noteInput.addEventListener("input", function(){//menghubungkan Fungsi ke event listener
        task.note = noteInput.value //update isi note di data
        saveToLocalStorage()
    })

    //MASUKKAN KE DOM
    li.appendChild(checkbox)
    li.appendChild(text)
    li.appendChild(noteInput)
    //checkbox + text + input -> masuk ke <li>
    taskList.appendChild(li) //<li> masuk ke <ul>

})

// tasks → kumpulan semua task
// task → satu item dari tasks
// task.done → ngatur checkbox
// task.note → isi input catatan
// history → nyimpen semua tasks berdasarkan tanggal
// hariIni → jadi penanda data hari ini di history