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

// Default Menu Data jika Firebase masih kosong (Tabel 5: /menu)
const defaultMenuItems = [
    { id: 1, name: "Nasi Goreng Spesial Nusantara", price: 16000, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 2, name: "Mie Goreng Pedas Manis", price: 13000, img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 3, name: "Mie Bangladesh Otentik", price: 17000, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 4, name: "Mie Aceh Daging Sapi", price: 22000, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 5, name: "Ayam Penyet Sambal Terasi", price: 19000, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 6, name: "Ayam Geprek Mozzarella", price: 21000, img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 7, name: "Ayam Sambel Hijau Padang", price: 20000, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 8, name: "Soto Ayam Kampung Kuah Kuning", price: 18000, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80", type: "food" },
    { id: 9, name: "Pecak Ikan Gurame/Lele", price: 23000, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80", type: "food" },

    { id: 10, name: "Udang Keju Krispi (Isi 4)", price: 15000, img: "https://images.unsplash.com/photo-1559737605-39ac05399570?auto=format&fit=crop&w=600&q=80", type: "snack" },
    { id: 11, name: "Dimsum Mentai Original", price: 18000, img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80", type: "snack" },
    { id: 12, name: "Fudge Brownies Panggang", price: 16000, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80", type: "snack" },
    { id: 13, name: "Es Krim Vanila Klasik", price: 10000, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80", type: "snack" },
    { id: 14, name: "Es Krim Coklat Belgia", price: 10000, img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80", type: "snack" },
    { id: 15, name: "Es Krim Strawberry Segar", price: 10000, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80", type: "snack" },
    { id: 16, name: "Risol Ragout Ayam Krispi", price: 12000, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80", type: "snack" },

    { id: 17, name: "Kopi Susu Gula Aren", price: 15000, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80", type: "drink" },
    { id: 18, name: "Kopi Latte Creamy", price: 18000, img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80", type: "drink" },
    { id: 19, name: "Es Cendol Durian", price: 18000, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80", type: "drink" },
    { id: 20, name: "Matcha Latte Jepang", price: 18000, img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=600&q=80", type: "drink" },
    { id: 21, name: "Es Dawet Segar", price: 12000, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80", type: "drink" },
    { id: 22, name: "Strawberry Milkshake", price: 18000, img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80", type: "drink" }
];

let menuItems = [];
let customer = { type: '', meja: '', nama: '' };
let cart = {}; 
let currentCategory = 'food'; 
let selectedPayment = { name: null, type: null }; 
let currentOrderId = null;
let countdownInterval = null;
let isAdminLoggedIn = false;
let appliedDiscountPercent = 0;

const formatRp = (angka) => "Rp " + (angka || 0).toLocaleString('id-ID');

// LISTEN REALTIME DATABASE: TABEL 5 (/menu)
db.ref('menu').on('value', (snapshot) => {
    const data = snapshot.val();
    if (!data) {
        // Inisialisasi awal ke Firebase jika masih kosong
        db.ref('menu').set(defaultMenuItems);
        menuItems = defaultMenuItems;
    } else {
        menuItems = Object.values(data);
    }
    renderMenu();
});

// DEFAULT PROMO SYSTEM: TABEL 4 (/promos)
db.ref('promos').on('value', (snapshot) => {
    if (!snapshot.exists()) {
        db.ref('promos').set({
            "NUSANTARA20": { code: "NUSANTARA20", discountPercent: 20 },
            "HEMAT10": { code: "HEMAT10", discountPercent: 10 }
        });
    }
});

// LOGIN ADMIN
function openAdminLoginModal() {
    if(isAdminLoggedIn) toggleAdminModeView(true);
    else document.getElementById('modal-admin-login').classList.remove('hide');
}

function closeAdminLoginModal() {
    document.getElementById('modal-admin-login').classList.add('hide');
}

function submitAdminLogin() {
    const user = document.getElementById('admin-username').value.trim();
    const pass = document.getElementById('admin-password').value.trim();

    if(user === "zrix" && pass === "11111111") {
        isAdminLoggedIn = true;
        closeAdminLoginModal();
        document.getElementById('admin-username').value = '';
        document.getElementById('admin-password').value = '';
        toggleAdminModeView(true);
    } else {
        alert("Username atau Password Admin salah!");
    }
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    toggleAdminModeView(false);
}

function toggleAdminModeView(showAdmin) {
    const label = document.getElementById('role-text-label');
    if(showAdmin) {
        label.innerText = "Mode: Admin/Dapur";
        document.getElementById('customer-app').classList.add('hide');
        document.getElementById('kitchen-app').classList.remove('hide');
        renderKitchenAndStats();
    } else {
        label.innerText = "Mode: Pelanggan";
        document.getElementById('kitchen-app').classList.add('hide');
        document.getElementById('customer-app').classList.remove('hide');
    }
}

// PELANGGAN & ORDER FLOW
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

    document.getElementById('greeting-name-display').innerText = `Halo, ${nama}!`;
    document.getElementById('modal-greeting').classList.remove('hide');
}

function closeGreetingModal() {
    document.getElementById('modal-greeting').classList.add('hide');
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
    if(!container) return;
    container.innerHTML = '';
    menuItems.filter(item => item.type === currentCategory).forEach(item => {
        const qty = cart[item.id] || 0;
        container.innerHTML += `
            <div class="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col overflow-hidden food-card">
                <img src="${item.img}" 
                     onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80';" 
                     class="w-full h-32 object-cover bg-slate-100" 
                     alt="${item.name}">
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-slate-800 text-xs sm:text-sm leading-snug mb-1 line-clamp-2 min-h-[2.5rem]">${item.name}</h3>
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
    
    const cartCountEl = document.getElementById('cart-count');
    cartCountEl.classList.add('pop-bounce');
    setTimeout(() => cartCountEl.classList.remove('pop-bounce'), 300);

    renderMenu(); 
    calculateCart();
}

function calculateCart() {
    let totalQty = 0, totalBill = 0;
    for (const [id, qty] of Object.entries(cart)) {
        totalQty += qty; 
        const found = menuItems.find(m => m.id == id);
        if(found) totalBill += qty * found.price;
    }
    
    // Potongan harga diskon voucher promo
    const finalBillAfterDiscount = Math.round(totalBill * (1 - appliedDiscountPercent / 100));

    document.getElementById('cart-count').innerText = totalQty;
    document.getElementById('cart-total').innerText = formatRp(totalBill);
    document.getElementById('pay-total-summary').innerText = formatRp(finalBillAfterDiscount);
    document.getElementById('final-pay-total').innerText = formatRp(finalBillAfterDiscount);
}

// GUNAKAN KODE PROMO (Tabel 4: /promos)
function applyPromoCode() {
    const code = document.getElementById('input-promo-code').value.trim().toUpperCase();
    const statusMsg = document.getElementById('promo-status-msg');

    if(!code) {
        alert("Masukkan kode promo terlebih dahulu.");
        return;
    }

    db.ref('promos/' + code).once('value', (snapshot) => {
        if(snapshot.exists()) {
            const promo = snapshot.val();
            appliedDiscountPercent = promo.discountPercent;
            statusMsg.className = "text-[11px] font-bold mt-2 text-green-600 block";
            statusMsg.innerText = `✅ Voucher ${code} Berhasil Dipasang (Diskon ${promo.discountPercent}%)!`;
            calculateCart();
        } else {
            appliedDiscountPercent = 0;
            statusMsg.className = "text-[11px] font-bold mt-2 text-red-500 block";
            statusMsg.innerText = `❌ Kode Promo tidak ditemukan atau kadaluarsa.`;
            calculateCart();
        }
    });
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
                <p class="mt-6 text-xs font-semibold text-slate-600 tracking-widest uppercase">Scan untuk Bayar via ${selectedPayment.name}</p>
            </div>`;
    }
}

function backToPaymentMethods() {
    document.getElementById('screen-payment-action').classList.add('hide');
    document.getElementById('screen-payment-methods').classList.remove('hide');
}

// PROSES PEMBAYARAN KE TABEL 1 (/orders)
function processFinalPayment() {
    const btn = event.target;
    btn.innerHTML = "Memverifikasi Pembayaran..."; 
    btn.disabled = true;

    setTimeout(() => {
        const orderId = "ORD-" + Math.floor(Math.random() * 9000 + 1000);
        const orderItems = [];
        let totalAmountCalculated = 0;

        for (const [id, qty] of Object.entries(cart)) {
            const itemObj = menuItems.find(m => m.id == id);
            if(itemObj) {
                orderItems.push({ item: itemObj.name, qty: qty, price: itemObj.price });
                totalAmountCalculated += itemObj.price * qty;
            }
        }

        const finalTotal = Math.round(totalAmountCalculated * (1 - appliedDiscountPercent / 100));

        const newOrderData = {
            id: orderId, 
            type: customer.type, 
            meja: customer.meja, 
            nama: customer.nama,
            items: orderItems, 
            totalAmount: finalTotal,
            status: "Sedang Dimasak", 
            payment: selectedPayment.name,
            timestamp: Date.now()
        };

        // Simpan ke Firebase Database Tabel 1 (/orders)
        db.ref('orders/' + orderId).set(newOrderData).then(() => {
            currentOrderId = orderId;
            
            document.getElementById('screen-payment-action').classList.add('hide');
            document.getElementById('screen-waiting').classList.remove('hide');
            document.getElementById('waiting-type-text').innerText = customer.type === "Dine In" ? `Dine In - Meja ${customer.meja}` : "Takeaway";
            
            startTimer(15 * 60);
            
            db.ref('orders/' + orderId).on('value', (snapshot) => {
                const data = snapshot.val();
                if (data && data.status === "Selesai") {
                    triggerOrderFinished();
                }
            });

            cart = {}; 
            appliedDiscountPercent = 0;
            calculateCart();
            btn.innerHTML = "Saya Sudah Bayar"; 
            btn.disabled = false;
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
    const ring = document.getElementById('timer-progress-ring');
    const totalDash = 565;
    clearInterval(countdownInterval);
    
    countdownInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        
        const progressOffset = totalDash - (timer / duration) * totalDash;
        if(ring) ring.style.strokeDashoffset = progressOffset;

        if (--timer < 0) { 
            clearInterval(countdownInterval); 
            display.textContent = "00:00"; 
        }
    }, 1000);
}

function triggerOrderFinished() {
    if(document.getElementById('screen-waiting').classList.contains('hide')) return;
    
    clearInterval(countdownInterval);
    if(currentOrderId) db.ref('orders/' + currentOrderId).off(); 
    
    document.getElementById('screen-waiting').classList.add('hide');
    document.getElementById('screen-feedback').classList.remove('hide');
}

let currentRating = 0;
function rateStar(stars) {
    currentRating = stars;
    document.querySelectorAll('.star-rating svg').forEach((svg, index) => {
        if(index < stars) {
            svg.classList.add('active');
            svg.classList.add('star-bounce');
        } else {
            svg.classList.remove('active');
            svg.classList.remove('star-bounce');
        }
    });
}

// FEEDBACK RATINGS KE TABEL 2 (/feedbacks)
function submitFeedback() {
    if(currentRating === 0) { 
        alert("Harap berikan rating bintang terlebih dahulu."); 
        return; 
    }
    const comment = document.getElementById('feedback-comment').value;

    const feedbackData = {
        nama: customer.nama || "Pelanggan",
        meja: customer.meja || "-",
        rating: currentRating,
        comment: comment || "Pelayanan Sangat Memuaskan!",
        timestamp: Date.now()
    };

    db.ref('feedbacks').push(feedbackData).then(() => {
        alert("Terima kasih banyak atas ulasan Anda di Resto Nusantara!");
        resetApp();
    });
}

function resetApp() {
    customer = { type: '', meja: '', nama: '' };
    currentOrderId = null; 
    currentRating = 0;
    document.getElementById('input-meja').value = '';
    document.getElementById('input-nama').value = '';
    document.querySelectorAll('.star-rating svg').forEach(svg => svg.classList.remove('active'));
    document.getElementById('feedback-comment').value = '';
    
    document.getElementById('screen-feedback').classList.add('hide');
    document.getElementById('screen-welcome').classList.remove('hide');
}

// BANTUAN CHATBOT & KIRIM PESAN KE TABEL 3 (/messages)
function toggleHelpModal() {
    document.getElementById('modal-help').classList.toggle('hide');
}

function answerFaq(id) {
    const box = document.getElementById('help-chat-box');
    let q = '', a = '';
    if(id === 1) {
        q = 'Bagaimana cara memesan makanan?';
        a = 'Pilih mode Dine In / Takeaway -> Isi nama & meja -> Pilih menu favorit -> Bayar -> Dapur memasak!';
    } else if(id === 2) {
        q = 'Metode pembayaran apa saja yang tersedia?';
        a = 'Kami mendukung QRIS, E-Wallet (GoPay, OVO, DANA, ShopeePay), Transfer Bank VA, & Kartu Kredit.';
    } else if(id === 3) {
        q = 'Berapa lama estimasi pembuatan makanan?';
        a = 'Rata-rata waktu penyajian adalah 10 - 15 menit.';
    } else if(id === 4) {
        q = 'Apakah ada Voucher Diskon?';
        a = 'Gunakan kode voucher "NUSANTARA20" di halaman pembayaran untuk diskon 20%!';
    }

    box.innerHTML += `
        <div class="text-right my-2"><span class="inline-block bg-orange-600 text-white p-2.5 rounded-2xl font-bold">${q}</span></div>
        <div class="text-left my-2"><span class="inline-block bg-slate-100 text-slate-800 p-2.5 rounded-2xl border border-slate-200">${a}</span></div>
    `;
    box.scrollTop = box.scrollHeight;
}

function openEmailOwnerForm() {
    toggleHelpModal();
    document.getElementById('modal-email-owner').classList.remove('hide');
}

function closeEmailOwnerForm() {
    document.getElementById('modal-email-owner').classList.add('hide');
}

function sendEmailToOwner() {
    const name = document.getElementById('help-user-name').value.trim();
    const msg = document.getElementById('help-user-msg').value.trim();

    if(!name || !msg) {
        alert("Harap isi nama dan pertanyaan Anda.");
        return;
    }

    const messageData = {
        nama: name,
        pesan: msg,
        timestamp: Date.now()
    };

    // Simpan Ke Firebase Database Tabel 3 (/messages)
    db.ref('messages').push(messageData).then(() => {
        alert("Pesan Anda telah berhasil tersimpan di Database Admin!");
        document.getElementById('help-user-name').value = '';
        document.getElementById('help-user-msg').value = '';
        closeEmailOwnerForm();
    });
}

// DASHBOARD ADMIN & FUNGSI AKSI KELOLA DATABASE
function renderKitchenAndStats() {
    const container = document.getElementById('kitchen-orders');
    const feedbackContainer = document.getElementById('feedback-list');
    const messageContainer = document.getElementById('admin-messages-list');
    const promoContainer = document.getElementById('admin-promos-list');
    
    // 1. Listen Orders Data (Tabel 1)
    db.ref('orders').on('value', (snapshot) => {
        container.innerHTML = '';
        const data = snapshot.val();
        let totalRev = 0, totalOrdCount = 0;

        if (!data) { 
            container.innerHTML = `<div class="col-span-full py-12 text-center"><p class="text-slate-400 font-medium">Belum ada pesanan aktif.</p></div>`; 
        } else {
            let ordersArray = Object.values(data);
            totalOrdCount = ordersArray.length;
            ordersArray.sort((a, b) => b.timestamp - a.timestamp);

            ordersArray.forEach((order) => {
                totalRev += (order.totalAmount || 0);

                let itemsHtml = order.items.map(i => `<li class="py-2 text-xs font-semibold text-slate-700 flex justify-between border-b border-slate-100 last:border-0"><span>${i.item}</span> <span class="font-bold text-slate-900">x${i.qty}</span></li>`).join('');
                let actionText = order.type === "Takeaway" ? "Tandai Siap Diambil" : "Tandai Selesai & Antar";
                
                let btnHtml = order.status === "Sedang Dimasak" 
                    ? `<button onclick="finishOrder('${order.id}')" class="w-full mt-4 bg-slate-900 hover:bg-black text-white font-bold py-3 rounded-xl shadow transition text-xs active:scale-95">${actionText}</button>`
                    : `<div class="w-full mt-4 bg-green-50 text-green-600 font-bold py-3 text-center rounded-xl text-xs">Pesanan Selesai</div>`;
                
                let bgColor = order.status === "Sedang Dimasak" ? 'bg-white border-orange-200' : 'bg-slate-50 border-slate-200 opacity-75';
                
                container.innerHTML += `
                    <div class="border rounded-3xl p-5 ${bgColor} shadow-sm transition">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h3 class="text-lg font-extrabold text-slate-900">${order.type === 'Takeaway' ? 'Takeaway' : 'Meja ' + order.meja}</h3>
                                <p class="font-bold text-xs text-slate-600">${order.nama}</p>
                            </div>
                            <div class="text-right">
                                <span class="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-lg border border-slate-200 block mb-1">${order.id}</span>
                                <span class="text-[10px] text-orange-600 font-extrabold uppercase">${order.payment}</span>
                            </div>
                        </div>
                        <ul class="mb-2 bg-slate-50 rounded-2xl p-3 border border-slate-100">${itemsHtml}</ul>
                        <div class="flex justify-between text-xs font-bold text-slate-800 px-1 mt-2">
                            <span>Total Harga:</span>
                            <span class="text-orange-600">${formatRp(order.totalAmount)}</span>
                        </div>
                        ${btnHtml}
                    </div>
                `;
            });
        }

        document.getElementById('dash-total-revenue').innerText = formatRp(totalRev);
        document.getElementById('dash-total-orders').innerText = `${totalOrdCount} Transaksi`;
        document.getElementById('dash-monthly-profit').innerText = formatRp(Math.round(totalRev * 0.35));
    });

    // 2. Listen Feedbacks (Tabel 2)
    db.ref('feedbacks').on('value', (snapshot) => {
        feedbackContainer.innerHTML = '';
        const data = snapshot.val();
        if(!data) {
            feedbackContainer.innerHTML = `<p class="text-slate-400 text-xs italic col-span-full">Belum ada ulasan masuk.</p>`;
            return;
        }

        const feedbacks = Object.values(data).sort((a,b) => b.timestamp - a.timestamp);
        feedbacks.forEach(fb => {
            let stars = '⭐'.repeat(fb.rating);
            feedbackContainer.innerHTML += `
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <div class="flex justify-between items-center mb-1">
                        <span class="font-bold text-slate-800 text-xs">${fb.nama} (${fb.meja === '-' ? 'Takeaway' : 'Meja '+fb.meja})</span>
                        <span class="text-xs">${stars}</span>
                    </div>
                    <p class="text-xs text-slate-600 italic">"${fb.comment}"</p>
                </div>
            `;
        });
    });

    // 3. Listen Messages (Tabel 3)
    db.ref('messages').on('value', (snapshot) => {
        messageContainer.innerHTML = '';
        const data = snapshot.val();
        if(!data) {
            messageContainer.innerHTML = `<p class="text-slate-400 text-xs italic">Belum ada pesan bantuan pelanggan.</p>`;
            return;
        }
        const msgs = Object.values(data).sort((a,b) => b.timestamp - a.timestamp);
        msgs.forEach(m => {
            messageContainer.innerHTML += `
                <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200 shadow-sm">
                    <div class="flex justify-between items-center mb-1">
                        <span class="font-extrabold text-slate-800 text-xs">📩 ${m.nama}</span>
                        <span class="text-[10px] text-slate-400">${new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                    <p class="text-xs text-slate-700">"${m.pesan}"</p>
                </div>
            `;
        });
    });

    // 4. Listen Promos (Tabel 4)
    db.ref('promos').on('value', (snapshot) => {
        promoContainer.innerHTML = '';
        const data = snapshot.val();
        if(!data) return;
        Object.values(data).forEach(p => {
            promoContainer.innerHTML += `
                <div class="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                    <span class="font-extrabold text-slate-800">🎟️ ${p.code}</span>
                    <span class="font-bold text-orange-600">Diskon ${p.discountPercent}%</span>
                </div>
            `;
        });
    });
}

// FINISH ORDER
function finishOrder(orderId) {
    db.ref('orders/' + orderId).update({ status: "Selesai" });
}

// TAMBAH KODE PROMO BARU (Tabel 4)
function addNewPromoToDb() {
    const code = document.getElementById('new-promo-code').value.trim().toUpperCase();
    const discount = parseInt(document.getElementById('new-promo-discount').value, 10);

    if(!code || !discount) {
        alert("Isi Kode Promo dan % Diskon.");
        return;
    }

    db.ref('promos/' + code).set({ code, discountPercent: discount }).then(() => {
        alert(`Kode Promo ${code} berhasil ditambahkan!`);
        document.getElementById('new-promo-code').value = '';
        document.getElementById('new-promo-discount').value = '';
    });
}

// TAMBAH MENU BARU DARI ADMIN (Tabel 5)
function addNewMenuToDb() {
    const name = document.getElementById('add-menu-name').value.trim();
    const price = parseInt(document.getElementById('add-menu-price').value, 10);
    const type = document.getElementById('add-menu-type').value;
    const img = document.getElementById('add-menu-img').value.trim();

    if(!name || !price || !img) {
        alert("Lengkapi semua field menu baru.");
        return;
    }

    const newId = menuItems.length > 0 ? Math.max(...menuItems.map(m => m.id)) + 1 : 1;
    const newMenuItem = { id: newId, name, price, type, img };

    db.ref('menu/' + newId).set(newMenuItem).then(() => {
        alert(`Menu "${name}" berhasil ditambahkan ke Firebase!`);
        document.getElementById('add-menu-name').value = '';
        document.getElementById('add-menu-price').value = '';
        document.getElementById('add-menu-img').value = '';
    });
}
