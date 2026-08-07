const canvas = document.querySelector("#chart");

const obj = {
  daily: {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "# Expenses",
        data: [30000, 40000, 70000, 40000, 70000, 60000, 40000],
        borderWidth: 1,
      },
    ],
  },
  monthly: {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "# Expenses",
        data: [
          2918902, 1098272, 1928381, 2918462, 2092821, 1502910, 1880291,
          1787211, 827119, 900182, 892812, 1291822,
        ],
        borderWidth: 1,
      },
    ],
  },
  yearly: {
    labels: [2022, 2023, 2024, 2025, 2026],
    datasets: [
      {
        label: "# Expenses",
        data: [28191102, 12009381, 19839123, 1827719, 1203922],
        borderWidth: 1,
      },
    ],
  },
};

const myLineChart = new Chart(canvas, {
  type: "bar",
  data: obj.daily,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const selectPeriode = document.querySelector("#select-periode");

selectPeriode.addEventListener("change", (e) => {
  const selected = e.target.value;
  myLineChart.data = obj[selected];

  myLineChart.update();
});
