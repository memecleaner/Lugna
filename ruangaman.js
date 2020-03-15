function chatgroup(namaGrup) {
    const phoneNumber = '085693348121'
    const text = `saya ingin masuk ke grup ${namaGrup}`
    const uri = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`
    console.log(encodeURI(uri))
    window.location.href = encodeURI(uri)
}