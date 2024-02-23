const cron = require('node-cron');
const axios = require('axios');

// URL yang akan dicek statusnya
const url = 'https://claymorestore.shop/tools/cek_digi.php';

// Fungsi untuk melakukan fetch status dari URL
const fetchStatus = async () => {
  try {
    const response = await axios.get(url);
    console.log(`Status: ${response.data || 'Tidak ada transaksi yang terdeteksi!'}`);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
};

// Konfigurasi cron job untuk menjalankan fungsi fetch setiap satu detik
cron.schedule('* * * * * *', () => {
  fetchStatus();
  console.log('Melakukan fetch status...');
});
