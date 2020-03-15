function addToCalender(namaDokter, rumahSakit) {
    const action = `jadwal kunjungan dengan dokter ${namaDokter}`
    const dates = `${new Date()}/ ${new Date()}`
    const text = `pertemuan psikolog dengan langsung`
    const location = 'RumahSakitMitraKeluarga'
    const details = 'nomor telp.0811122233'
    const uri = `https://www.google.com/calendar/event?action=${action}&dates=${dates}&text=${text}&location=${location}&details=${details}`
    // console.log(uri)
    window.location.href = encodeURI(uri)

    console.log(encodeURI(uri))

}