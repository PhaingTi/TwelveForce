// Sample data for members (anggota kelas)
const members = [
    {
        name: "Muhammad Fadhlianoor",
        photo: "FotoAnggota/M.Fadhlianoor.jpg", // Placeholder image
        description: "Engeneering",
        details: "Be Smarth, Be Calm."
    },
    {
        name: "Afdal",
        photo: "FotoAnggota/Afdal.jpg", // Placeholder image
        description: "Engeneering.",
        details: "Stay Calm"
    },
    {
        name: "Kurniawan",
        photo: "FotoAnggota/Kurniawan.jpg", // Placeholder image
        description: "Engeneering",
        details: "Glory Glory Man United."
    },
    {
        name: "Rafi",
        photo: "FotoAnggota/Rafi.jpg", // Placeholder image
        description: "#",
        details: "Visca Barca."
    },
    {
        name: "Muhammad Algy Oktafary",
        photo: "FotoAnggota/Algy.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Muhammad Jamil",
        photo: "FotoAnggota/Jamil.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Refaldi Irwan",
        photo: "FotoAnggota/Irwan.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Sugianto",
        photo: "FotoAnggota/Sugianto.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Jentra",
        photo: "FotoAnggota/Jentra.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Cika",
        photo: "FotoAnggota/Cika.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Nurmaulidah",
        photo: "FotoAnggota/Idah.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Chelsy Olivia",
        photo: "FotoAnggota/Chelsy.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {   
        name: "Diva Egika",
        id:"Diva Egika",
        photo: "FotoAnggota/Diva.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Chika Laura",
        photo: "FotoAnggota/Chika.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Rini Wulandari",
        photo: "FotoAnggota/Rini.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Metrisnawati",
        photo: "FotoAnggota/Metris.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Jelita",
        photo: "FotoAnggota/Jeli.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Tiara",
        photo: "FotoAnggota/Tiara.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Laura Sinta Bela",
        photo: "FotoAnggota/Laura.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Nor Salimah",
        photo: "FotoAnggota/Salimah.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Melsie",
        photo: "FotoAnggota/Melsie.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Nur Sabela",
        photo: "FotoAnggota/Yaya.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Bela Oktaviani",
        photo: "FotoAnggota/Dadang.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Sriwina Mega Supia",
        photo: "FotoAnggota/Wina.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Sucikawati",
        photo: "FotoAnggota/Suci.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Tila Febriani",
        photo: "FotoAnggota/Tila.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
    {
        name: "Piana Oktavia",
        photo: "FotoAnggota/Pina.jpg", // Placeholder image
        description: ".",
        details: "Bergabung sejak 2021. Spesialisasi: Video Editing."
    },
];


// Sample data for gallery photos (fitur foto)
const galleryPhotos = [
    "FotoKelas/FotoCafe.jpg",
    "FotoKelas/Kantin.jpg",
    "FotoKelas/CeweKelas.jpg",
    "FotoKelas/CowoKelas.jpg",
    "FotoKelas/Hujan.jpg",
    "FotoKelas/RaportPaBu.jpg",
    "FotoKelas/Kerkom.jpg",
    "FotoKelas/TKA.jpg",
    "FotoKelas/Maulid.jpg",
    "FotoKelas/DipahV1.jpg",
    "FotoKelas/DipahV2.jpg",
    "FotoKelas/DipahGirl.jpg"
];

// Function to populate members grid
function populateMembers() {
    const grid = document.getElementById('members-grid');
    members.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="${member.photo}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <div class="member-details">
                <p>${member.details}</p>
            </div>
        `;
        card.addEventListener('click', () => toggleDetails(card, index));
        grid.appendChild(card);
    });
}

// Toggle member details
function toggleDetails(card, index) {
    const details = card.querySelector('.member-details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        // Hide other details first
        document.querySelectorAll('.member-details').forEach(d => d.style.display = 'none');
        details.style.display = 'block';
    }
}

// Function to populate gallery
function populateGallery() {
    const grid = document.getElementById('gallery-grid');
    galleryPhotos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'gallery-img';
        img.addEventListener('click', () => openLightbox(photo));
        grid.appendChild(img);
    });
}

// Lightbox functionality
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    populateMembers();
    populateGallery();

    // Close lightbox
    document.querySelector('.close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') closeLightbox();
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function Searching
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    // Fungsi pencarian
    function performSearch(query) {
        const trimmedQuery = query.toLowerCase().trim();
        if (!trimmedQuery) {
            searchResults.innerHTML = '<li class="no-results">Ketik nama untuk mencari!</li>';
            return;
        }

        // Filter array (case-insensitive, cari substring)
        const filteredMembers = members.filter(members => members.name.toLowerCase().includes(trimmedQuery)
        );

        if (filteredMembers.length === 0) {
            searchResults.innerHTML = `<li class="no-result">Nama tidak ditemukan</li>`;
            return;
        }
        const targetId = filteredMembers[0].id;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block:"center"});
            targetElement.style.transition = "background-color 0,4s";
            targetElement.style.backgroundColor = "#ffeb3b";
            setTimeout(() => targetElement.style.backgroundColor = "", 2000);
        }

        searchResults.innerHTML = filteredMembers.map(m => `<li>${m.name}</li>`).join(``);
    }

//     // Event: Klik tombol
//     searchBtn.addEventListener('click', function() {
//         performSearch(searchInput.value);
//     });

//     // Event Enter di input 
//     searchInput.addEventListener(`keyprees`, function(e) {
//         if (e.key === `Enter`) {
//             performSearch(searchInput.value);
//         }
//     });

//     // Event: Real-time search saat ketik (dengan debounce untuk performa)
//     let searchTimeout;
//     searchInput.addEventListener('input', function() {
//         clearTimeout(searchTimeout);
//         searchTimeout = setTimeout(function() {
//             performSearch(searchInput.value);
//         }, 300); // Delay 300ms agar tidak lag
//     });

//     // Event: Tekan Enter di input
//     searchInput.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             searchBtn.click();
//         }
//     });

//     // Inisialisasi: Pesan awal
//     searchResults.innerHTML = '<li class="no-results">Hasil pencarian akan muncul di sini...</li>';
});