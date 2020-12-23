$(function () {
    $('#proses').click(function () {
        let tinggiBadan = $('#tinggiBadan').val();
        let beratBadan = $('#beratBadan').val();
        let aktifitas = 4;
        let umur = $('#umur').val();
        let imt = beratBadan / ((tinggiBadan * tinggiBadan) / 10000);
        let alfa = new Array(100);
        let z = new Array(100);

        $('#hasil').val(hasil());

        //untuk menampilkan tabel alfa dan z stiap aturan
        let z_result = "";
        for (i = 0; i < z.length; i++) {
            z_result += "<tr><td>" + (i + 1) + "</td><td>alfa</td><td>" + alfa[i] + "</td><td>z</td><td>" + z[i] + "</td></tr>";

        }
        $('#z-result').html(z_result);

        /** 
         * mencari nilai minimun dari tiga variabel
         * @params x
         * @param y 
         * @param z 
         * @return nilai minimum
         */

        function findMin(x, y, z) {
            if (x <= y && x <= z) {
                return x;
            } else if (y <= x && y <= z) {
                return y;
            } else {
                return z;
            }
        }


        //    INDEKS MASSA TUBUH

        function imtSangatKurus() {
            if (imt <= 16.5) {
                return 1;

            } else if (imt > 16.5 && imt < 17) {
                return (17 - imt) / (17 - 16.5);
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan imt kurus
         * @return nilai keanggotaan dihimpunan imt kurus
         */

        function imtKurus() {
            if (imt >= 17 && imt <= 18) {
                return 1;
            } else if (imt > 16.5 && imt < 17) {
                return (imt - 16.5) / (17 - 16.5);
            } else if (imt > 18 && imt < 18.5) {
                return (18.5 - imt) / (18.5 - 18);
            } else {
                return 0;
            }
        }

        /**
         * menacari nilai keangotaan himpunan imt normal 
         * @return nilai keanggotaan dihimpunan imt normal
         */

        function imtNormal() {
            if (imt >= 18.5 && imt <= 24.5) {
                return 1;
            } else if (imt > 18 && imt < 18.5) {
                return (imt > 18) / (18.5 - 18);
            } else if (imt > 24.5 && imt < 25) {
                return (25 - imt) / (25 - 24.5);
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan imt gemuk 
         * @return nilai keanggotaan dihimpunan imt gemuk
         */

        function imtGemuk() {
            if (imt >= 25 && imt <= 26.5) {
                return 1;
            } else if (imt > 24.5 && imt < 25) {
                return (imt - 24.5) / (25 - 24.5);
            } else if (imt > 26.5 && imt < 27) {
                return (27 - imt) / (27 - 26.5);
            } else {
                return 0;
            }
        }

        /**
         * mecari nilai keanggotaan himpunan imt sangat gemuk 
         * @return nilai keanggotaan dihimpunan imt sangat gemuk 
         */

        function imtSangatGemuk() {
            if (imt <= 40) {
                return 1;
            } else if (imt > 26.5 && imt < 27) {
                return (imt - 26.5) / (27 - 26.5);
            } else {
                return 0;
            }
        }

        // INDEKS USIA
        /**
         * mencari nilai keanggotaan himpunan umur muda
         * @return nilai keanggotaan dihimpunan umur muda
         */

        function umurMuda() {
            if (umur <= 25) {
                return 1;
            } else if (umur > 25 && umur < 40) {
                return (40 - umur) / (40 - 25);
            } else {
                return 0;
            }
        }

        /**
         * menacari nilai keanggotaan himpunan umur parobaya
         * @return nilai keanggotaan dihimpunan umur parobaya
         */

        function umurParobaya() {
            if (umur == 40) {
                return 1;
            } else if (umur > 35 && umur < 40) {
                return (umur - 35) / (40 - 35);
            } else if (umur > 40 && umur < 60) {
                return (60 - umur) / (60 - 40);
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan umur tua 
         * @return nilai keanggotaan di himpunan umur tua
         */
        function umurTua() {
            if (umur == 60) {
                return 1;
            } else if (umur > 55 && umur < 60) {
                return (umur - 55) / (60 - 55);
            } else if (umur > 60 && umur < 70) {
                return (70 - umur) / (70 - 10);
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan sangat tua
         * @return nilai keanggotaan dihumpunan umur sangat tua
         */

        function umurSangatTua() {
            if (umur >= 70) {
                return 1;
            } else if (umur > 65 && umur < 70) {
                return (umur - 65) / (70 - 65);
            } else {
                return 0;
            }
        }

        //INDEKS AKTIFITAS

        /**
         * mencari nilai keanggotaan himpunan aktifitas istrht
         * @return nilai keanggotaan dihimpunan aktifitas istrirahat
         */
        function aktifitasIstirahat() {
            if (aktifitas <= 2) {
                return 1;
            } else if (aktifitas > 2 && aktifitas < 4) {
                return (4 - aktifitas) / 2;
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan aktifitas ringan
         * @return nilai keanggotaan dihimpunan aktifitas ringan
         */

        function aktifitasRingan() {
            if (aktifitas == 4) {
                return 1;
            } else if (aktifitas > 3 && aktifitas < 4) {
                return (aktifitas - 3);
            } else if (aktifitas > 4 && aktifitas < 5) {
                return (5 - aktifitas);
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan sedang
         * @return nilai keanggotaan dihimpunan aktifitas sedanh
         */

        function aktifitasSedang() {
            if (aktifitas == 6) {
                return 1;
            } else if (aktifitas > 4 && aktifitas < 6) {
                return (aktifitas - 4) / 2;
            } else if (aktifitas > 6 && aktifitas < 8) {
                return (8 - aktifitas) / 2;
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan aktifitas berat
         * @return nilai keanggotaan dihimpunan aktifitas berat
         */

        function aktifitasBerat() {
            if (aktifitas == 8) {
                return 1;
            } else if (aktifitas > 7 && aktifitas < 8) {
                return (aktifitas - 7);
            } else if (aktifitas > 8 && aktifitas < 9) {
                return (9 - aktifitas)
            } else {
                return 0;
            }
        }

        /**
         * mencari nilai keanggotaan himpunan aktifitas sangat berat
         * @return nilai keanggotaan dihimpunan aktifitas sangat berat
         */

        function aktifitasSangatBerat() {
            if (aktifitas >= 10) {
                return 1;
            } else if (aktifitas > 8 && aktifitas < 10) {
                return (aktifitas - 8) / 2;
            } else {
                return 0;
            }
        }

        //INDEKS KALORI

        /**
         * mencari nilai keanggotaan himpunan kalori sedikit
         * @return nilai keanggotaan dihimpunan kalori sedikit
         */

        function kaloriSedikit(alfa) {
            if (alfa > 0 && alfa < 1) {
                return (2500 - 1300) * alfa + 1300;
            } else if (alfa == 1) {
                return 1300;
            } else {
                return 0;
            }
        }

        /**
         * mencari keanggotaan himpunan kalori banyak
         * @return nilai keanggotaan dihimpunan kalori banyk
         */

        function kaloriBanyak(alfa) {
            if (alfa > 0 && alfa < 1) {
                return (2500 - 1300) * alfa;
            } else if (alfa == 1) {
                return 2500;
            } else {
                return 0;
            }
        }

        /**
         * Mencari nilai Z untuk semua aturan yang ada
         */

        function aturan() {
            //-------------------------IMT SANGAT KURUS--------------------//
            //1.jika imt SANGAT KURUS dan aktifitas ISTIRAHAT dan umur MUDA maka kalori BANYAK
            alfa[0] = findMin(imtSangatKurus(), aktifitasIstirahat(), umurMuda());
            z[0] = kaloriBanyak(alfa[0]);
            //2.jika imt SANGAT KURUS dan aktifitas ISTIRAHAT dan umur PAROBAYA maka kalori BANYAK
            alfa[1] = findMin(imtSangatKurus(), aktifitasIstirahat(), umurParobaya());
            z[1] = kaloriBanyak(alfa[1]);
            //3.jika imt SANGAT KURUS dan aktifitas ISTIRAHAT dan umur TUA maka Kalori BANYAK
            alfa[2] = findMin(imtSangatKurus(), aktifitasIstirahat(), umurTua());
            z[2] = kaloriBanyak(alfa[2]);
            //4.jika imt SANGAT KURUS dan umur SANGAT TUA maka kalori BANYAK 
            alfa[3] = findMin(imtSangatKurus(), aktifitasIstirahat(), umurSangatTua());
            z[3] = kaloriBanyak(alfa[3]);
            // 5. Jika imt SANGAT KURUS dan aktifitas RINGAN dan umur MUDA maka kalori BANYAK
            alfa[4] = findMin(imtSangatKurus(), aktifitasRingan(), umurMuda());
            z[4] = kaloriBanyak(alfa[4]);
            // 6. Jika imt SANGAT KURUS dan aktifitas RINGAN dan umur PAROBAYA maka kalori BANYAK
            alfa[5] = findMin(imtSangatKurus(), aktifitasRingan(), umurParobaya());
            z[5] = kaloriBanyak(alfa[5]);
            // 7. Jika imt SANGAT KURUS dan aktifitas RINGAN dan umur TUA maka kalori BANYAK
            alfa[6] = findMin(imtSangatKurus(), aktifitasRingan(), umurTua());
            z[6] = kaloriBanyak(alfa[6]);
            // 8. Jika imt SANGAT KURUS dan aktifitas RINGAN dan umur SANGAT TUA maka kalori BANYAK
            alfa[7] = findMin(imtSangatKurus(), aktifitasRingan(), umurSangatTua());
            z[7] = kaloriBanyak(alfa[7]);
            // 9. Jika imt SANGAT KURUS dan aktifitas SEDANG dan umur MUDA maka kalori BANYAK
            alfa[8] = findMin(imtSangatKurus(), aktifitasSedang(), umurMuda());
            z[8] = kaloriBanyak(alfa[8]);
            // 10. Jika imt SANGAT KURUS dan aktifitas SEDANG dan umur PAROBAYA maka kalori BANYAK
            alfa[9] = findMin(imtSangatKurus(), aktifitasSedang(), umurParobaya());
            z[9] = kaloriBanyak(alfa[9]);
            // 11. Jika imt SANGAT KURUS dan aktifitas SEDANG dan umur TUA maka kalori BANYAK
            alfa[10] = findMin(imtSangatKurus(), aktifitasSedang(), umurTua());
            z[10] = kaloriBanyak(alfa[10]);
            // 12. Jika imt SANGAT KURUS dan aktifitas SEDANG dan umur SANGAT TUA maka kalori BANYAK
            alfa[11] = findMin(imtSangatKurus(), aktifitasSedang(), umurSangatTua());
            z[11] = kaloriBanyak(alfa[11]);
            // 13. Jika imt SANGAT KURUS dan aktifitas BERAT dan umur MUDA maka kalori BANYAK
            alfa[12] = findMin(imtSangatKurus(), aktifitasBerat(), umurMuda());
            z[12] = kaloriBanyak(alfa[12]);
            // 14. Jika imt SANGAT KURUS dan aktifitas BERAT dan umur PAROBAYA maka kalori BANYAK
            alfa[13] = findMin(imtSangatKurus(), aktifitasBerat(), umurParobaya());
            z[13] = kaloriBanyak(alfa[13]);
            // 15. Jika imt SANGAT KURUS dan aktifitas BERAT dan umur TUA maka kalori BANYAK
            alfa[14] = findMin(imtSangatKurus(), aktifitasBerat(), umurTua());
            z[14] = kaloriBanyak(alfa[14]);
            // 16. Jika imt SANGAT KURUS dan aktifitas BERAT dan umur SANGAT TUA maka kalori BANYAK
            alfa[15] = findMin(imtSangatKurus(), aktifitasBerat(), umurSangatTua());
            z[15] = kaloriBanyak(alfa[15]);
            // 17. Jika imt SANGAT KURUS dan aktifitas SANGAT BERAT dan umur MUDA maka kalori BANYAK
            alfa[16] = findMin(imtSangatKurus(), aktifitasSangatBerat(), umurMuda());
            z[16] = kaloriBanyak(alfa[16]);
            // 18. Jika imt SANGAT KURUS dan aktifitas SANGAT BERAT dan umur PAROBAYA maka kalori BANYAK
            alfa[17] = findMin(imtSangatKurus(), aktifitasSangatBerat(), umurParobaya());
            z[17] = kaloriBanyak(alfa[17]);
            // 19. Jika imt SANGAT KURUS dan aktifitas SANGAT BERAT dan umur TUA maka kalori BANYAK
            alfa[18] = findMin(imtSangatKurus(), aktifitasSangatBerat(), umurTua());
            z[18] = kaloriBanyak(alfa[18]);
            // 20. Jika imt SANGAT KURUS dan aktifitas SANGAT BERAT dan umur SANGAT TUA maka kalori BANYAK
            alfa[19] = findMin(imtSangatKurus(), aktifitasSangatBerat(), umurSangatTua());
            z[19] = kaloriBanyak(alfa[19]);

            //-----------------------IMT  KURUS-----------------------------------------//

            // 21. Jika imt KURUS dan aktifitas ISTIRAHAT dan umur MUDA maka kalori BANYAK
            alfa[20] = findMin(imtKurus(), aktifitasIstirahat(), umurMuda());
            z[20] = kaloriBanyak(alfa[20]);
            // 22. Jika imt KURUS dan aktifitas ISTIRAHAT dan umur PAROBAYA maka kalori BANYAK
            alfa[21] = findMin(imtKurus(), aktifitasIstirahat(), umurParobaya());
            z[21] = kaloriBanyak(alfa[21]);
            // 23. Jika imt KURUS dan aktifitas ISTIRAHAT dan umur TUA maka kalori BANYAK
            alfa[22] = findMin(imtKurus(), aktifitasIstirahat(), umurTua());
            z[22] = kaloriBanyak(alfa[22]);
            // 24. Jika imt KURUS dan aktifitas ISTIRAHAT dan umur SANGAT TUA maka kalori BANYAK
            alfa[23] = findMin(imtKurus(), aktifitasIstirahat(), umurSangatTua());
            z[23] = kaloriBanyak(alfa[23]);
            // 25. Jika imt KURUS dan aktifitas RINGAN dan umur MUDA maka kalori BANYAK
            alfa[24] = findMin(imtKurus(), aktifitasRingan(), umurMuda());
            z[24] = kaloriBanyak(alfa[24]);
            // 26. Jika imt KURUS dan aktifitas RINGAN dan umur PAROBAYA maka kalori BANYAK
            alfa[25] = findMin(imtKurus(), aktifitasRingan(), umurParobaya());
            z[25] = kaloriBanyak(alfa[25]);
            // 27. Jika imt KURUS dan aktifitas RINGAN dan umur TUA maka kalori BANYAK
            alfa[26] = findMin(imtKurus(), aktifitasRingan(), umurTua());
            z[26] = kaloriBanyak(alfa[26]);
            // 28. Jika imt KURUS dan aktifitas RINGAN dan umur SANGAT TUA maka kalori BANYAK
            alfa[27] = findMin(imtKurus(), aktifitasRingan(), umurSangatTua());
            z[27] = kaloriBanyak(alfa[27]);
            // 29. Jika imt KURUS dan aktifitas SEDANG dan umur MUDA maka kalori BANYAK
            alfa[28] = findMin(imtKurus(), aktifitasSedang(), umurMuda());
            z[28] = kaloriBanyak(alfa[28]);
            // 30. Jika imt KURUS dan aktifitas SEDANG dan umur PAROBAYA maka kalori BANYAK
            alfa[29] = findMin(imtKurus(), aktifitasSedang(), umurParobaya());
            z[29] = kaloriBanyak(alfa[29]);
            // 31. Jika imt KURUS dan aktifitas SEDANG dan umur TUA maka kalori BANYAK
            alfa[30] = findMin(imtKurus(), aktifitasSedang(), umurTua());
            z[30] = kaloriBanyak(alfa[30]);
            // 32. Jika imt KURUS dan aktifitas SEDANG dan umur SANGAT TUA maka kalori BANYAK
            alfa[31] = findMin(imtKurus(), aktifitasSedang(), umurSangatTua());
            z[31] = kaloriBanyak(alfa[31]);
            // 33. Jika imt KURUS dan aktifitas BERAT dan umur MUDA maka kalori BANYAK
            alfa[32] = findMin(imtKurus(), aktifitasBerat(), umurMuda());
            z[32] = kaloriBanyak(alfa[32]);
            // 34. Jika imt KURUS dan aktifitas BERAT dan umur PAROBAYA maka kalori BANYAK
            alfa[33] = findMin(imtKurus(), aktifitasBerat(), umurParobaya());
            z[33] = kaloriBanyak(alfa[33]);
            // 35. Jika imt KURUS dan aktifitas BERAT dan umur TUA maka kalori BANYAK
            alfa[34] = findMin(imtKurus(), aktifitasBerat(), umurTua());
            z[34] = kaloriBanyak(alfa[34]);
            // 36. Jika imt KURUS dan aktifitas BERAT dan umur SANGAT TUA maka kalori BANYAK
            alfa[35] = findMin(imtKurus(), aktifitasBerat(), umurSangatTua());
            z[35] = kaloriBanyak(alfa[35]);
            // 37. Jika imt KURUS dan aktifitas SANGAT BERAT dan umur MUDA maka kalori BANYAK
            alfa[36] = findMin(imtKurus(), aktifitasSangatBerat(), umurMuda());
            z[36] = kaloriBanyak(alfa[36]);
            // 38. Jika imt KURUS dan aktifitas SANGAT BERAT dan umur PAROBAYA maka kalori BANYAK
            alfa[37] = findMin(imtKurus(), aktifitasSangatBerat(), umurParobaya());
            z[37] = kaloriBanyak(alfa[37]);
            // 39. Jika imt KURUS dan aktifitas SANGAT BERAT dan umur TUA maka kalori BANYAK
            alfa[38] = findMin(imtKurus(), aktifitasSangatBerat(), umurTua());
            z[38] = kaloriBanyak(alfa[38]);
            // 40. Jika imt KURUS dan aktifitas SANGAT BERAT dan umur SANGAT TUA maka kalori BANYAK
            alfa[39] = findMin(imtKurus(), aktifitasSangatBerat(), umurSangatTua());
            z[39] = kaloriBanyak(alfa[39]);

            //----------------------IMT NORMAL--------------------//

            // 41. Jika imt NORMAL dan aktifitas ISTIRAHAT dan umur MUDA maka kalori BANYAK
            alfa[40] = findMin(imtNormal(), aktifitasIstirahat(), umurMuda());
            z[40] = kaloriBanyak(alfa[40]);
            // 42. Jika imt NORMAL dan aktifitas ISTIRAHAT dan umur PAROBAYA maka kalori BANYAK
            alfa[41] = findMin(imtNormal(), aktifitasIstirahat(), umurParobaya());
            z[41] = kaloriBanyak(alfa[41]);
            // 43. Jika imt NORMAL dan aktifitas ISTIRAHAT dan umur TUA maka kalori BANYAK
            alfa[42] = findMin(imtNormal(), aktifitasIstirahat(), umurTua());
            z[42] = kaloriBanyak(alfa[42]);
            // 44. Jika imt NORMAL dan aktifitas ISTIRAHAT dan umur SANGAT TUA maka kalori BANYAK
            alfa[43] = findMin(imtNormal(), aktifitasIstirahat(), umurSangatTua());
            z[43] = kaloriBanyak(alfa[43]);
            // 45. Jika imt NORMAL dan aktifitas RINGAN dan umur MUDA maka kalori BANYAK
            alfa[44] = findMin(imtNormal(), aktifitasRingan(), umurMuda());
            z[44] = kaloriBanyak(alfa[44]);
            // 46. Jika imt NORMAL dan aktifitas RINGAN dan umur PAROBAYA maka kalori BANYAK
            alfa[45] = findMin(imtNormal(), aktifitasRingan(), umurParobaya());
            z[45] = kaloriBanyak(alfa[45]);
            // 47. Jika imt NORMAL dan aktifitas RINGAN dan umur TUA maka kalori BANYAK
            alfa[46] = findMin(imtNormal(), aktifitasRingan(), umurTua());
            z[46] = kaloriBanyak(alfa[46]);
            // 48. Jika imt NORMAL dan aktifitas RINGAN dan umur SANGAT TUA maka kalori BANYAK
            alfa[47] = findMin(imtNormal(), aktifitasRingan(), umurSangatTua());
            z[47] = kaloriBanyak(alfa[47]);
            // 49. Jika imt NORMAL dan aktifitas SEDANG dan umur MUDA maka kalori BANYAK
            alfa[48] = findMin(imtNormal(), aktifitasSedang(), umurMuda());
            z[48] = kaloriBanyak(alfa[48]);
            // 50. Jika imt NORMAL dan aktifitas SEDANG dan umur PAROBAYA maka kalori BANYAK
            alfa[49] = findMin(imtNormal(), aktifitasSedang(), umurParobaya());
            z[49] = kaloriBanyak(alfa[49]);
            // 51. Jika imt NORMAL dan aktifitas SEDANG dan umur TUA maka kalori SEDIKIT
            alfa[50] = findMin(imtNormal(), aktifitasSedang(), umurTua());
            z[50] = kaloriSedikit(alfa[50]);
            // 52. Jika imt NORMAL dan aktifitas SEDANG dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[51] = findMin(imtNormal(), aktifitasSedang(), umurSangatTua());
            z[51] = kaloriSedikit(alfa[51]);
            // 53. Jika imt NORMAL dan aktifitas BERAT dan umur MUDA maka kalori SEDIKIT
            alfa[52] = findMin(imtNormal(), aktifitasBerat(), umurMuda());
            z[52] = kaloriSedikit(alfa[52]);
            // 54. Jika imt NORMAL dan aktifitas BERAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[53] = findMin(imtNormal(), aktifitasBerat(), umurParobaya());
            z[53] = kaloriSedikit(alfa[53]);
            // 55. Jika imt NORMAL dan aktifitas BERAT dan umur TUA maka kalori SEDIKIT
            alfa[54] = findMin(imtNormal(), aktifitasBerat(), umurTua());
            z[54] = kaloriSedikit(alfa[54]);
            // 56. Jika imt NORMAL dan aktifitas BERAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[55] = findMin(imtNormal(), aktifitasBerat(), umurSangatTua());
            z[55] = kaloriSedikit(alfa[55]);
            // 57. Jika imt NORMAL dan aktifitas SANGAT BERAT dan umur MUDA maka kalori SEDIKIT
            alfa[56] = findMin(imtNormal(), aktifitasSangatBerat(), umurMuda());
            z[56] = kaloriSedikit(alfa[56]);
            // 58. Jika imt NORMAL dan aktifitas SANGAT BERAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[57] = findMin(imtNormal(), aktifitasSangatBerat(), umurParobaya());
            z[57] = kaloriSedikit(alfa[57]);
            // 59. Jika imt NORMAL dan aktifitas SANGAT BERAT dan umur TUA maka kalori SEDIKIT
            alfa[58] = findMin(imtNormal(), aktifitasSangatBerat(), umurTua());
            z[58] = kaloriSedikit(alfa[58]);
            // 60. Jika imt NORMAL dan aktifitas SANGAT BERAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[59] = findMin(imtNormal(), aktifitasSangatBerat(), umurSangatTua());
            z[59] = kaloriSedikit(alfa[59]);

            //---------------------------IMT GEMUK----------------//

            // 61. Jika imt GEMUK dan aktifitas ISTIRAHAT dan umur MUDA maka kalori SEDIKIT
            alfa[60] = findMin(imtGemuk(), aktifitasIstirahat(), umurMuda());
            z[60] = kaloriSedikit(alfa[60]);
            // 62. Jika imt GEMUK dan aktifitas ISTIRAHAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[61] = findMin(imtGemuk(), aktifitasIstirahat(), umurParobaya());
            z[61] = kaloriSedikit(alfa[61]);
            // 63. Jika imt GEMUK dan aktifitas ISTIRAHAT dan umur TUA maka kalori SEDIKIT
            alfa[62] = findMin(imtGemuk(), aktifitasIstirahat(), umurTua());
            z[62] = kaloriSedikit(alfa[62]);
            // 64. Jika imt GEMUK dan aktifitas ISTIRAHAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[63] = findMin(imtGemuk(), aktifitasIstirahat(), umurSangatTua());
            z[63] = kaloriSedikit(alfa[63]);
            // 65. Jika imt GEMUK dan aktifitas RINGAN dan umur MUDA maka kalori SEDIKIT
            alfa[64] = findMin(imtGemuk(), aktifitasRingan(), umurMuda());
            z[64] = kaloriSedikit(alfa[64]);
            // 66. Jika imt GEMUK dan aktifitas RINGAN dan umur PAROBAYA maka kalori SEDIKIT
            alfa[65] = findMin(imtGemuk(), aktifitasRingan(), umurParobaya());
            z[65] = kaloriSedikit(alfa[65]);
            // 67. Jika imt GEMUK dan aktifitas RINGAN dan umur TUA maka kalori SEDIKIT
            alfa[66] = findMin(imtGemuk(), aktifitasRingan(), umurTua());
            z[66] = kaloriSedikit(alfa[66]);
            // 68. Jika imt GEMUK dan aktifitas RINGAN dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[67] = findMin(imtGemuk(), aktifitasRingan(), umurSangatTua());
            z[67] = kaloriSedikit(alfa[67]);
            // 69. Jika imt GEMUK dan aktifitas SEDANG dan umur MUDA maka kalori SEDIKIT
            alfa[68] = findMin(imtGemuk(), aktifitasSedang(), umurMuda());
            z[68] = kaloriSedikit(alfa[68]);
            // 70. Jika imt GEMUK dan aktifitas SEDANG dan umur PAROBAYA maka kalori SEDIKIT
            alfa[69] = findMin(imtGemuk(), aktifitasSedang(), umurParobaya());
            z[69] = kaloriSedikit(alfa[69]);
            // 71. Jika imt GEMUK dan aktifitas SEDANG dan umur TUA maka kalori SEDIKIT
            alfa[70] = findMin(imtGemuk(), aktifitasSedang(), umurTua());
            z[70] = kaloriSedikit(alfa[70]);
            // 72. Jika imt GEMUK dan aktifitas SEDANG dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[71] = findMin(imtGemuk(), aktifitasSedang(), umurSangatTua());
            z[71] = kaloriSedikit(alfa[71]);
            // 73. Jika imt GEMUK dan aktifitas BERAT dan umur MUDA maka kalori SEDIKIT
            alfa[72] = findMin(imtGemuk(), aktifitasBerat(), umurMuda());
            z[72] = kaloriSedikit(alfa[72]);
            // 74. Jika imt GEMUK dan aktifitas BERAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[73] = findMin(imtGemuk(), aktifitasBerat(), umurParobaya());
            z[73] = kaloriSedikit(alfa[73]);
            // 75. Jika imt GEMUK dan aktifitas BERAT dan umur TUA maka kalori SEDIKIT
            alfa[74] = findMin(imtGemuk(), aktifitasBerat(), umurTua());
            z[74] = kaloriSedikit(alfa[74]);
            // 76. Jika imt GEMUK dan aktifitas BERAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[75] = findMin(imtGemuk(), aktifitasBerat(), umurSangatTua());
            z[75] = kaloriSedikit(alfa[75]);
            // 77. Jika imt GEMUK dan aktifitas SANGAT BERAT dan umur MUDA maka kalori SEDIKIT
            alfa[76] = findMin(imtGemuk(), aktifitasSangatBerat(), umurMuda());
            z[76] = kaloriSedikit(alfa[76]);
            // 78. Jika imt GEMUK dan aktifitas SANGAT BERAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[77] = findMin(imtGemuk(), aktifitasSangatBerat(), umurParobaya());
            z[77] = kaloriSedikit(alfa[77]);
            // 79. Jika imt GEMUK dan aktifitas SANGAT BERAT dan umur TUA maka kalori SEDIKIT
            alfa[78] = findMin(imtGemuk(), aktifitasSangatBerat(), umurTua());
            z[78] = kaloriSedikit(alfa[78]);
            // 80. Jika imt GEMUK dan aktifitas SANGAT BERAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[79] = findMin(imtGemuk(), aktifitasSangatBerat(), umurSangatTua());
            z[79] = kaloriSedikit(alfa[79]);

            //--------------------IMT SANGAT GEMUK------------------//
            // 81. Jika imt SANGAT GEMUK dan aktifitas ISTIRAHAT dan umur MUDA maka kalori SEDIKIT
            alfa[80] = findMin(imtSangatGemuk(), aktifitasIstirahat(), umurMuda());
            z[80] = kaloriSedikit(alfa[80]);
            // 82. Jika imt SANGAT GEMUK dan aktifitas ISTIRAHAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[81] = findMin(imtSangatGemuk(), aktifitasIstirahat(), umurParobaya());
            z[81] = kaloriSedikit(alfa[81]);
            // 83. Jika imt SANGAT GEMUK dan aktifitas ISTIRAHAT dan umur TUA maka kalori SEDIKIT
            alfa[82] = findMin(imtSangatGemuk(), aktifitasIstirahat(), umurTua());
            z[82] = kaloriSedikit(alfa[82]);
            // 84. Jika imt SANGAT GEMUK dan aktifitas ISTIRAHAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[83] = findMin(imtSangatGemuk(), aktifitasIstirahat(), umurSangatTua());
            z[83] = kaloriSedikit(alfa[83]);
            // 85. Jika imt SANGAT GEMUK dan aktifitas RINGAN dan umur MUDA maka kalori SEDIKIT
            alfa[84] = findMin(imtSangatGemuk(), aktifitasRingan(), umurMuda());
            z[84] = kaloriSedikit(alfa[84]);
            // 86. Jika imt SANGAT GEMUK dan aktifitas RINGAN dan umur PAROBAYA maka kalori SEDIKIT
            alfa[85] = findMin(imtSangatGemuk(), aktifitasRingan(), umurParobaya());
            z[85] = kaloriSedikit(alfa[85]);
            // 87. Jika imt SANGAT GEMUK dan aktifitas RINGAN dan umur TUA maka kalori SEDIKIT
            alfa[86] = findMin(imtSangatGemuk(), aktifitasRingan(), umurTua());
            z[86] = kaloriSedikit(alfa[86]);
            // 88. Jika imt SANGAT GEMUK dan aktifitas RINGAN dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[87] = findMin(imtSangatGemuk(), aktifitasRingan(), umurSangatTua());
            z[87] = kaloriSedikit(alfa[87]);
            // 89. Jika imt SANGAT GEMUK dan aktifitas SEDANG dan umur MUDA maka kalori SEDIKIT
            alfa[88] = findMin(imtSangatGemuk(), aktifitasSedang(), umurMuda());
            z[88] = kaloriSedikit(alfa[88]);
            // 90. Jika imt SANGAT GEMUK dan aktifitas SEDANG dan umur PAROBAYA maka kalori SEDIKIT
            alfa[89] = findMin(imtSangatGemuk(), aktifitasSedang(), umurParobaya());
            z[89] = kaloriSedikit(alfa[89]);
            // 91. Jika imt SANGAT GEMUK dan aktifitas SEDANG dan umur TUA maka kalori SEDIKIT
            alfa[90] = findMin(imtSangatGemuk(), aktifitasSedang(), umurTua());
            z[90] = kaloriSedikit(alfa[90]);
            // 92. Jika imt SANGAT GEMUK dan aktifitas SEDANG dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[91] = findMin(imtSangatGemuk(), aktifitasSedang(), umurSangatTua());
            z[91] = kaloriSedikit(alfa[91]);
            // 93. Jika imt SANGAT GEMUK dan aktifitas BERAT dan umur MUDA maka kalori SEDIKIT
            alfa[92] = findMin(imtSangatGemuk(), aktifitasBerat(), umurMuda());
            z[92] = kaloriSedikit(alfa[92]);
            // 94. Jika imt SANGAT GEMUK dan aktifitas BERAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[93] = findMin(imtSangatGemuk(), aktifitasBerat(), umurParobaya());
            z[93] = kaloriSedikit(alfa[93]);
            // 95. Jika imt SANGAT GEMUK dan aktifitas BERAT dan umur TUA maka kalori SEDIKIT
            alfa[94] = findMin(imtSangatGemuk(), aktifitasBerat(), umurTua());
            z[94] = kaloriSedikit(alfa[94]);
            // 96. Jika imt SANGAT GEMUK dan aktifitas BERAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[95] = findMin(imtSangatGemuk(), aktifitasBerat(), umurSangatTua());
            z[95] = kaloriSedikit(alfa[95]);
            // 97. Jika imt SANGAT GEMUK dan aktifitas SANGAT BERAT dan umur MUDA maka kalori SEDIKIT
            alfa[96] = findMin(imtSangatGemuk(), aktifitasSangatBerat(), umurMuda());
            z[96] = kaloriSedikit(alfa[96]);
            // 98. Jika imt SANGAT GEMUK dan aktifitas SANGAT BERAT dan umur PAROBAYA maka kalori SEDIKIT
            alfa[97] = findMin(imtSangatGemuk(), aktifitasSangatBerat(), umurParobaya());
            z[97] = kaloriSedikit(alfa[97]);
            // 99. Jika imt SANGAT GEMUK dan aktifitas SANGAT BERAT dan umur TUA maka kalori SEDIKIT
            alfa[98] = findMin(imtSangatGemuk(), aktifitasSangatBerat(), umurTua());
            z[98] = kaloriSedikit(alfa[98]);
            // 100. Jika imt SANGAT GEMUK dan aktifitas SANGAT BERAT dan umur SANGAT TUA maka kalori SEDIKIT
            alfa[99] = findMin(imtSangatGemuk(), aktifitasSangatBerat(), umurSangatTua());
            z[99] = kaloriSedikit(alfa[99]);
        }

        /**
         * mencari nilai total z(defuzzyfikasi)
         * @return nilai total z
         */

        function defuzzyfikasi() {
            let temp1 = 0;
            let temp2 = 0;
            let hasil = 0;
            let final = 0;
            let cek = document.querySelectorAll('.jenisKelamin');

            for (i = 0; i < 100; i++) {
                temp1 = temp1 + alfa[i] * z[i];
                temp2 = temp2 + alfa[i];
            }
            //  hasil = temp1 / temp2;
            // return Math.round(hasil);

            //tambahan
            let jenisKelaminBaru = '';
            for (i = 0; i < cek.length; i++) {
                if (cek[i].checked) {
                    jenisKelaminBaru = cek[i].value
                }
            }

            // console.log(jenisKelaminBaru);
            // if (jenisKelaminBaru == 'lk') {
            //     return hasil = (temp1 / temp2) + 500;
            // } else if (jenisKelaminBaru == 'pr') {
            //     return hasil = (temp1 / temp2) + 300;
            // } else {
            //     return 0;
            // }
            if( jenisKelaminBaru =='lk'){
                if(umur >=0 && umur <= 3){
                    return hasil = ((temp1/temp2) - 54);
                }else if(umur >= 3 && umur <=10){
                    return  hasil = ((temp1/temp2) + 495);
                }else if(umur > 10 && umur <=15 ){
                    return hasil = ((temp1/temp2) + 651);
                }else if (umur >=18 && umur <=30  ){
                    return hasil = ((temp1/temp2) + 679);
                }else if(umur > 30 && umur <=60){
                    return hasil = ((temp1/temp2) + 879);
                } else if (umur >60){
                    return hasil = ((temp1/temp2) + 487);
                }else{
                    return 0;
                }
            }else if (jenisKelaminBaru == 'pr'){
                if(umur >=0 && umur <= 3){
                    return hasil = ((temp1/temp2) - 51);
                }else if(umur >= 3 && umur <=10){
                    return  hasil = ((temp1/temp2) + 499);
                }else if(umur > 10 && umur <=15 ){
                    return hasil = ((temp1/temp2) + 746);
                }else if (umur >=18 && umur <=30  ){
                    return hasil = ((temp1/temp2) + 496);
                }else if(umur > 30 && umur <=60){
                    return hasil = ((temp1/temp2) + 829);
                } else if (umur >60){
                    return hasil = ((temp1/temp2) + 596);
                }else{
                    return 0;
                }
            }
    }
    

        /**
         * menghitung semua aturan dan menentukan harga
         * @return harga
         */
        function hasil() {
            aturan();
            return defuzzyfikasi();
        }
    });
    

});
