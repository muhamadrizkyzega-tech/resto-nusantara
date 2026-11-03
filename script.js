// Konfigurasi Firebase Realtime Database
const firebaseConfig = {
  apiKey: "AIzaSyDrP932DMs6nXp7PKp_5GBJ5bFi11mr1VuM",
  authDomain: "resto-nusantara-3d1de.firebaseapp.com",
  databaseURL: "https://resto-nusantara-3d1de-default-rtdb.firebaseio.com",
  projectId: "resto-nusantara-3d1de",
  storageBucket: "resto-nusantara-3d1de.firebasestorage.app",
  messagingSenderId: "464442083138",
  appId: "1:464442083138:web:d21976fbacb3d194496adb",
  measurementId: "G-R98C6G2995"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const menuItems = [
    { id: 1, name: "Nasi Goreng Spesial Nusantara", price: 16000, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 2, name: "Mie Goreng Pedas Manis", price: 13000, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 3, name: "Mie Bangladesh Otentik", price: 17000, img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 4, name: "Mie Aceh Daging Sapi", price: 22000, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 5, name: "Ayam Penyet Sambal Terasi", price: 19000, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 6, name: "Ayam Geprek Mozzarella", price: 21000, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 7, name: "Ayam Sambel Hijau Padang", price: 20000, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 8, name: "Soto Ayam Kampung Kuah Kuning", price: 18000, img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4850?auto=format&fit=crop&w=500&q=80", type: "food" },
    { id: 9, name: "Pecak Ikan Gurame/Lele", price: 23000, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80", type: "food" },

    { id: 10, name: "Udang Keju Krispi (Isi 4)", price: 15000, img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80", type: "snack" },
    { id: 11, name: "Dimsum Mentai Original", price: 18000, img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80", type: "snack" },
    { id: 12, name: "Fudge Brownies Panggang", price: 16000, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80", type: "snack" },
    { id: 13, name: "Es Krim Vanila Klasik", price: 10000, img: "https://images.unsplash.com/photo-1570197781417-0a5f9b5bba93?auto=format&fit=crop&w=500&q=80", type: "snack" },
    { id: 14, name: "Es Krim Coklat Belgia", price: 10000, img: "https://images.unsplash.com/photo-1559703248-dcaaec9fac92?auto=format&fit=crop&w=500&q=80", type: "snack" },
    { id: 15, name: "Es Krim Strawberry Segar", price: 10000, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500&q=80", type: "snack" },
    { id: 16, name: "Risol Ragout Ayam Krispi", price: 12000, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=500&q=80", type: "snack" },

    { id: 17, name: "Kopi Susu Gula Aren", price: 15000, img: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?auto=format&fit=crop&w=500&q=80", type: "drink" },
    { id: 18, name: "Kopi Latte Creamy", price: 18000, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80", type: "drink" },
    { id: 19, name: "Es Cendol Durian", price: 18000, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80", type: "drink" },
    { id: 20, name: "Matcha Latte Jepang", price: 18000, img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80", type: "drink" },
    { id: 21, name: "Es Dawet Segar", price: 12000, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", type: "drink" },
    { id: 22, name: "Strawberry Milkshake", price: 18000, img: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=500&q=80", type: "drink" }
];

let customer = { type: '', meja: '', nama: '' };
let cart = {}; 
let orders = []; 
let currentCategory = 'food'; 
let selectedPayment = { name: null, type: null }; 
let currentOrderId = null;
let checkStatusInterval = null;
let countdownInterval = null;
let isAdminMode = false;

const formatRp = (angka) => "Rp " + angka.toLocaleString('id-ID');

// Toggle User/Admin Mode di Pojok Kanan Atas
function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    const label = document.getElementById('role-text-label');
    if(isAdminMode) {
        label.innerText = "Mode: Admin/Dapur";
        document.getElementById('customer-app').classList.add('hide');
        document.getElementById('kitchen-app').classList.remove('hide');
        renderKitchen();
    } else {
        label.innerText = "Mode: Pelanggan";
        document.getElementById('kitchen-app').classList.add('hide');
        document.getElementById('customer-app').classList.remove('hide');
    }
}

function chooseOrderType(type) {
    customer.type = type;
    document.getElementById('screen-welcome').classList.add('hide');
    document.getElementById('screen-login').classList.remove('hide');
    
    if(type === 'Takeaway') {
        document.getElementById('input-meja-container').classList.add('hide');
        document.getElementById('login-title').innerText = "Info Pemesan (Takeaway)";
        document.getElementById('login-subtitle').innerText = "Atas nama siapa pesanan ini?";
    } else {
        document.getElementById('input-meja-container').classList.remove('hide');
        document.getElementById('login-title').innerText = "Detail Meja (Dine In)";
        document.getElementById('login-subtitle').innerText = "Masukkan nomor meja Anda";
    }
}

function backToWelcome() {
    document.getElementById('screen-login').classList.add('hide');
    document.getElementById('screen-welcome').classList.remove('hide');
}

function startOrder() {
    const meja = document.getElementById('input-meja').value;
    const nama = document.getElementById('input-nama').value;
    
    if(!nama || (customer.type === 'Dine In' && !meja)) {
        alert("Mohon lengkapi Nama dan Nomor Meja Anda.");
        return;
    }

    customer.meja = customer.type === 'Takeaway' ? '-' : meja;
    customer.nama = nama;
    
    document.getElementById('display-nama').innerText = nama;
    document.getElementById('display-type').innerText = customer.type;
    document.getElementById('display-meja-text').innerText = customer.type === 'Dine In' ? `• Meja ${meja}` : '';

    document.getElementById('screen-login').classList.add('hide');
    document.getElementById('screen-menu').classList.remove('hide');
    changeCategory('food');
}

function changeCategory(type) {
    currentCategory = type;
    const tabs = ['food', 'snack', 'drink'];
    tabs.forEach(tab => {
        const el = document.getElementById(`tab-${tab}`);
        if (tab === type) {
            el.className = "px-5 py-2.5 rounded-full font-bold text-sm transition bg-orange-600 text-white shadow-md whitespace-nowrap";
        } else {
            el.className = "px-5 py-2.5 rounded-full font-bold text-sm transition bg-slate-100 text-slate-500 hover:bg-slate-200 whitespace-nowrap";
        }
    });
    renderMenu();
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
    menuItems.filter(item => item.type === currentCategory).forEach(item => {
        const qty = cart[item.id] || 0;
        container.innerHTML += `
            <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col overflow-hidden food-card">
                <img src="${item.img}" class="w-full h-32 object-cover bg-slate-100" alt="${item.name}">
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-slate-800 text-sm leading-snug mb-1 line-clamp-2 min-h-[2.5rem]">${item.name}</h3>
                    <p class="text-orange-600 font-extrabold text-sm mb-4">${formatRp(item.price)}</p>
                    <div class="mt-auto flex justify-between items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                        <button onclick="updateCart(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-slate-500 hover:text-slate-900 transition active:scale-90">-</button>
                        <span class="font-bold text-sm text-slate-800 w-6 text-center">${qty}</span>
                        <button onclick="updateCart(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-lg shadow-sm font-bold text-white hover:bg-orange-700 transition active:scale-90">+</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function updateCart(id, change) {
    if(!cart[id]) cart[id] = 0;
    cart[id] += change;
    if(cart[id] <= 0) delete cart[id];
    renderMenu(); 
    calculateCart();
}

function calculateCart() {
    let totalQty = 0, totalBill = 0;
    for (const [id, qty] of Object.entries(cart)) {
        totalQty += qty; 
        totalBill += qty * menuItems.find(m => m.id == id).price;
    }
    document.getElementById('cart-count').innerText = totalQty;
    document.getElementById('cart-total').innerText = formatRp(totalBill);
    document.getElementById('pay-total-summary').innerText = formatRp(totalBill);
    document.getElementById('final-pay-total').innerText = formatRp(totalBill);
}

function showPaymentMethods() {
    if(Object.keys(cart).length === 0) { 
        alert("Silakan pilih menu makanan/minuman terlebih dahulu."); 
        return; 
    }
    document.getElementById('screen-menu').classList.add('hide');
    document.getElementById('screen-payment-methods').classList.remove('hide');
}

function backToMenu() {
    document.getElementById('screen-payment-methods').classList.add('hide');
    document.getElementById('screen-menu').classList.remove('hide');
}

function selectPayment(name, type) {
    selectedPayment = { name, type };
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
    event.currentTarget.classList.add('active');
    const btn = document.getElementById('btn-lanjutkan');
    btn.disabled = false;
    btn.className = "w-full bg-orange-600 hover:bg-orange-700 text-white font-bold p-4 rounded-2xl shadow-lg transition active:scale-95";
    btn.innerText = "Lanjutkan Pembayaran";
}

function proceedToPaymentAction() {
    document.getElementById('screen-payment-methods').classList.add('hide');
    document.getElementById('screen-payment-action').classList.remove('hide');
    document.getElementById('selected-method-label').innerText = selectedPayment.name;

    const area = document.getElementById('payment-instruction-area');
    area.innerHTML = '';

    if (selectedPayment.type === 'qris' || selectedPayment.type === 'ewallet') {
        area.innerHTML = `
            <div class="bg-white p-6 rounded-3xl inline-block border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=BayarRestoNusantara" class="mx-auto rounded-xl w-48 h-48" alt="QRIS">
                <p class="mt-6 text-sm font-semibold text-slate-600 tracking-widest uppercase">Scan untuk Bayar via ${selectedPayment.name}</p>
            </div>`;
    } else if (selectedPayment.type === 'va') {
        const vaNumber = "8890" + Math.floor(Math.random() * 90000000 + 10000000);
        area.innerHTML = `
            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left">
                <p class="text-xs text-slate-500 mb-2 font-bold uppercase">Nomor Virtual Account (${selectedPayment.name})</p>
                <div class="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 mb-3">
                    <span class="text-xl font-extrabold tracking-wider text-slate-900">${vaNumber}</span>
                    <span class="text-orange-600 font-bold text-xs bg-orange-50 px-3 py-1.5 rounded-lg">SIAP</span>
                </div>
                <p class="text-xs text-slate-400">Silakan transfer sesuai total tagihan sebelum batas waktu habis.</p>
            </div>`;
    } else if (selectedPayment.type === 'credit') {
        area.innerHTML = `
            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left">
                <input type="text" placeholder="Nomor Kartu (16 digit)" class="w-full p-3 rounded-xl border border-slate-300 mb-3 focus:outline-none focus:border-orange-500 text-sm">
                <div class="flex gap-3">
                    <input type="text" placeholder="MM/YY" class="w-1/2 p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-orange-500 text-sm">
                    <input type="text" placeholder="CVV" class="w-1/2 p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-orange-500 text-sm">
                </div>
            </div>`;
    }
}

function backToPaymentMethods() {
    document.getElementById('screen-payment-action').classList.add('hide');
    document.getElementById('screen-payment-methods').classList.remove('hide');
}

// 1. PROSES PEMBAYARAN & KIRIM KE FIREBASE CLOUD
function processFinalPayment() {
    const btn = event.target;
    btn.innerHTML = "Memverifikasi Pembayaran..."; 
    btn.disabled = true;

    setTimeout(() => {
        const orderId = "ORD-" + Math.floor(Math.random() * 9000 + 1000);
        const orderItems = [];
        for (const [id, qty] of Object.entries(cart)) {
            orderItems.push({ item: menuItems.find(m => m.id == id).name, qty: qty });
        }

        const newOrderData = {
            id: orderId, 
            type: customer.type, 
            meja: customer.meja, 
            nama: customer.nama,
            items: orderItems, 
            status: "Sedang Dimasak", 
            payment: selectedPayment.name,
            timestamp: Date.now()
        };

        // Simpan data pesanan secara real-time ke Firebase Database
        db.ref('orders/' + orderId).set(newOrderData).then(() => {
            currentOrderId = orderId;
            
            document.getElementById('screen-payment-action').classList.add('hide');
            document.getElementById('screen-waiting').classList.remove('hide');
            document.getElementById('waiting-type-text').innerText = customer.type === "Dine In" ? `Dine In - Meja ${customer.meja}` : "Takeaway";
            
            startTimer(15 * 60);
            
            // Dengarkan perubahan status pesanan ini secara real-time dari database
            db.ref('orders/' + orderId).on('value', (snapshot) => {
                const data = snapshot.val();
                if (data && data.status === "Selesai") {
                    triggerOrderFinished();
                }
            });

            cart = {}; 
            calculateCart();
            btn.innerHTML = "Saya Sudah Bayar"; 
            btn.disabled = false;
            document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
            const btnLanjut = document.getElementById('btn-lanjutkan');
            btnLanjut.disabled = true; 
            btnLanjut.className = "w-full bg-slate-200 text-slate-400 font-bold p-4 rounded-2xl transition shadow-sm"; 
            btnLanjut.innerText = "Pilih Metode Pembayaran Dulu";
        }).catch((error) => {
            alert("Gagal mengirim pesanan ke database: " + error.message);
            btn.innerHTML = "Saya Sudah Bayar";
            btn.disabled = false;
        });
    }, 1200); 
}

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const display = document.getElementById('timer-display');
    clearInterval(countdownInterval);
    
    countdownInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) { 
            clearInterval(countdownInterval); 
            display.textContent = "00:00"; 
        }
    }, 1000);
}

// 2. KETIKA PESANAN SELESAI DI SISI PELANGGAN
function triggerOrderFinished() {
    if(document.getElementById('screen-waiting').classList.contains('hide')) return;
    
    clearInterval(countdownInterval);
    db.ref('orders/' + currentOrderId).off(); 
    
    document.getElementById('screen-waiting').classList.add('hide');
    document.getElementById('screen-feedback').classList.remove('hide');
    
    if(customer.type === "Takeaway") {
        document.getElementById('feedback-title').innerText = "Pesanan Siap Diambil!";
        document.getElementById('feedback-subtitle').innerText = "Silakan ambil pesanan Anda di konter kasir.";
    } else {
        document.getElementById('feedback-title').innerText = "Pesanan Selesai!";
        document.getElementById('feedback-subtitle').innerText = "Hidangan telah disajikan di meja Anda.";
    }
}

let currentRating = 0;
function rateStar(stars) {
    currentRating = stars;
    document.querySelectorAll('.star-rating svg').forEach((svg, index) => {
        if(index < stars) svg.classList.add('active');
        else svg.classList.remove('active');
    });
}

function submitFeedback() {
    if(currentRating === 0) { 
        alert("Harap berikan rating bintang terlebih dahulu."); 
        return; 
    }
    alert("Terima kasih banyak atas ulasan dan kunjungan Anda di Resto Nusantara Cabang Sutomo!");
    resetApp();
}

function resetApp() {
    customer = { type: '', meja: '', nama: '' };
    currentOrderId = null; 
    currentRating = 0;
    document.getElementById('input-meja').value = '';
    document.getElementById('input-nama').value = '';
    document.querySelectorAll('.star-rating svg').forEach(svg => svg.classList.remove('active'));
    document.querySelector('textarea').value = '';
    
    document.getElementById('screen-feedback').classList.add('hide');
    document.getElementById('screen-welcome').classList.remove('hide');
}

// 3. RENDER KITCHEN / ADMIN BERBASIS REAL-TIME DARI FIREBASE
function renderKitchen() {
    const container = document.getElementById('kitchen-orders');
    
    db.ref('orders').on('value', (snapshot) => {
        container.innerHTML = '';
        const data = snapshot.val();
        
        if (!data) { 
            container.innerHTML = `<div class="col-span-full py-20 text-center"><p class="text-slate-400 font-medium">Belum ada pesanan aktif.</p></div>`; 
            return; 
        }

        let ordersArray = Object.values(data);
        ordersArray.sort((a, b) => b.timestamp - a.timestamp);

        ordersArray.forEach((order) => {
            let itemsHtml = order.items.map(i => `<li class="py-2 text-sm font-medium text-slate-700 flex justify-between border-b border-slate-100 last:border-0"><span>${i.item}</span> <span class="font-bold text-slate-900">x${i.qty}</span></li>`).join('');
            let actionText = order.type === "Takeaway" ? "Tandai Siap Diambil" : "Tandai Selesai & Antar";
            
            let btnHtml = order.status === "Sedang Dimasak" 
                ? `<button onclick="finishOrder('${order.id}')" class="w-full mt-5 bg-slate-900 hover:bg-black text-white font-bold py-3.5 rounded-xl shadow-md transition active:scale-95">${actionText}</button>`
                : `<div class="w-full mt-5 bg-green-50 text-green-600 font-bold py-3.5 text-center rounded-xl">Pesanan Selesai</div>`;
            
            let bgColor = order.status === "Sedang Dimasak" ? 'bg-white border-orange-200' : 'bg-slate-50 border-slate-200 opacity-75';
            
            container.innerHTML += `
                <div class="border rounded-3xl p-6 ${bgColor} shadow-sm transition">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-extrabold text-slate-900">${order.type === 'Takeaway' ? 'Takeaway' : 'Meja ' + order.meja}</h3>
                            <p class="font-bold text-slate-600 mt-1">${order.nama}</p>
                        </div>
                        <div class="text-right">
                            <span class="text-xs bg-slate-100 text-slate-500 font-bold px-3 py-1.5 rounded-lg border border-slate-200 block mb-1">${order.id}</span>
                            <span class="text-[10px] text-slate-400 font-bold uppercase">${order.payment}</span>
                        </div>
                    </div>
                    <ul class="mb-2 bg-slate-50 rounded-2xl p-4 border border-slate-100">${itemsHtml}</ul>
                    ${btnHtml}
                </div>
            `;
        });
    });
}

// 4. UPDATE STATUS SELESAI OLEH ADMIN/DAPUR KE CLOUD
function finishOrder(orderId) {
    db.ref('orders/' + orderId).update({
        status: "Selesai"
    }).catch((error) => {
        alert("Gagal memperbarui status pesanan: " + error.message);
    });
}