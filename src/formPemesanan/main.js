let dataPemesanan = {
  idPemesan: "",
  namaPemesan: "",
  nIdentitas: 0,
  tipeKamar: "",
  jenisKelamin: "",
  harga: 0,
  tglPesan: "",
  diskon: 0,
  durasiMenginap: 0,
  breakfast: false,
  total: 0,
};

function validateNomorIdentitas() {
  const nomorIdentitasInput = document.getElementById("nomorIdentitas");
  const nomorIdentitasMessage = document.getElementById(
    "nomorIdentitasMessage"
  );
  const value = nomorIdentitasInput.value;

  if (value.length >= 16 && !isNaN(value)) {
    nomorIdentitasMessage.classList.add("hidden");
    dataPemesanan.nIdentitas = value
    console.log(dataPemesanan.nIdentitas)
  } else {
    nomorIdentitasMessage.classList.remove("hidden");
  }
}

const handleChange = () => {
  const harga = {
    standar: 300000,
    deluxe: 500000,
    family: 700000,
  };
  const isSelect = document.getElementById("tipeKamar").value;
  if (isSelect === "standar") {
    document.getElementById("harga").value = harga.standar;
    dataPemesanan.harga = harga.standar;
  }
  if (isSelect === "deluxe") {
    document.getElementById("harga").value = harga.deluxe;
    dataPemesanan.harga = harga.deluxe;
  }
  if (isSelect === "family") {
    document.getElementById("harga").value = harga.family;
    dataPemesanan.harga = harga.family;
  }
  dataPemesanan.tipeKamar = isSelect;
};

const handleDurasiMenginap = () => {
  const durasi = document.getElementById('durasiMenginap').value;
  dataPemesanan.durasiMenginap = durasi
  let total = dataPemesanan.harga * durasi;
  console.log(total)
  let diskon = 0;
  if(durasi > 3) {
    diskon = (total * 10) / 100;
    total = total - diskon
    dataPemesanan.diskon = diskon;
  }
  document.getElementById('totalBayar').value = total;
  dataPemesanan.total = total
};

const handleBreakfast = () => {
  const breakfast = document.getElementById('termasukBreakfast').checked;
  if(breakfast) {
    dataPemesanan.total += 80000;
  } else {
    dataPemesanan.total -= 80000
  }
  document.getElementById('totalBayar').value = dataPemesanan.total;
  dataPemesanan.breakfast = breakfast;
}

const handleGender = () => {
  const isSelect = document.getElementById('jenisKelaminLaki').checked;
  if(isSelect) {
    dataPemesanan.jenisKelamin = document.getElementById('jenisKelaminLaki').value;
  } else {
    dataPemesanan.jenisKelamin = document.getElementById('jenisKelaminPerempuan').value;
  }
  console.log(dataPemesanan.jenisKelamin)
}

const resumePesanan = () => {
  const resume = document.getElementById('resumePemesanan')
  let notaPemesananHotel = `<pre>
  Nama Pemesan      = ${dataPemesanan.namaPemesan}
  Nomor Identitas   = ${dataPemesanan.nIdentitas}
  Jenis Kelamin     = ${dataPemesanan.jenisKelamin}
  Tipe Kamar        = ${dataPemesanan.tipeKamar}
  Durasi Penginapan = ${dataPemesanan.durasiMenginap}
  Diskon            = ${dataPemesanan.diskon}
  ===================================================
  Total Bayar       = ${dataPemesanan.total}
  </pre>`;
  resume.innerHTML = `<h1 style="padding-left: 12px;">Resume Pemesanan</h1>${notaPemesananHotel}`;
}

const handleClick = () => {
  handleGender();
  dataPemesanan.idPemesan = document.getElementById('idPemesanan').value;
  dataPemesanan.namaPemesan = document.getElementById('namaPemesan').value;
  dataPemesanan.tglPesan = document.getElementById('tanggalPesan').value;
  resumePesanan()
  const form = document.getElementById("formPemesanan");
  const resume = document.getElementById("resumePemesanan");
  form.classList.toggle("hidden");
  resume.classList.toggle("hidden");
};
